import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import carsFields from "./carsFields";
import { actions } from "../../../actions";
import { debounce } from "lodash";

class CarsForm extends React.Component {
  componentDidMount() {
    const DEBOUNCE_TIME = 1500;
    const DEBOUNCE_OPTIONS = { leading: true, trailing: false };

    this.props.fetchUsersList();

    this.handleSubmitForm = debounce(
      this.handleSubmitForm,
      DEBOUNCE_TIME,
      DEBOUNCE_OPTIONS
    );
  }

  handleUpdateCar = async () => {
    this.props.updateCar({
      fields: this.props.carsForm.values,
      index: this.props.selectedCarIndex
    });
  };

  handleAddCar = () => {
    this.props.addCar(this.props.carsForm.values);
  };

  handleSubmitForm = () => {
    if (this.props.isUpdate) {
      this.handleUpdateCar();
    } else {
      this.handleAddCar();
    }
    this.props.clearCar();
  };

  onClearClick = event => {
    event.preventDefault();
    this.props.clearCar();
  };

  renderFields() {
    return carsFields.map(properties => {
      const { name, validations, hideOnNew, isSelectField } = properties;
      return (
        <Field
          selectedError={this.props.selectedError}
          properties={properties}
          key={name}
          component={isSelectField ? FormSelect : FormInput}
          type="text"
          hide={!this.props.isUpdate && hideOnNew}
          validate={validations}
          items={this.props.usersList}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.isUpdate ? "Atualizar" : "Novo"} Carro</h1>
        <form
          className="form"
          onSubmit={this.props.handleSubmit(this.handleSubmitForm)}
        >
          {this.renderFields()}

          <div className="form__actions">
            {this.props.isUpdate && (
              <button className="button" onClick={this.onClearClick}>
                Limpar
              </button>
            )}
            <button type="submit" className="button form__submit">
              {this.props.isUpdate ? "Atualizar" : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carsForm: state.form.carsForm,
    usersList: state.usersList.value,
    initialValues: state.selectedCar.value,
    isUpdate: !!state.selectedCar.value,
    selectedError: state.selectedCar.error,
    selectedCarIndex: state.selectedCar.index
  };
};

const CarsReduxForm = reduxForm({
  form: "carsForm",
  enableReinitialize: true
})(CarsForm);

export default connect(mapStateToProps, actions)(CarsReduxForm);
