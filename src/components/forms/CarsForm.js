import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import CarFieldItem from "./CarFieldItem";
import CarFieldSelect from "./CarFieldSelect";
import carsFields from "./carsFields";
import { actions } from "../../actions";

class CarsForm extends React.Component {
  componentDidMount() {
    this.props.fetchUsersList();
  }

  renderFields() {
    return carsFields.map(
      ({
        label,
        name,
        placeholder,
        disabled,
        hideOnNew,
        validations,
        isSelectField
      }) => {
        return (
          <Field
            key={name}
            component={isSelectField ? CarFieldSelect : CarFieldItem}
            type="text"
            hide={!this.props.isUpdate && hideOnNew}
            label={label}
            validate={validations}
            disabled={disabled || false}
            placeholder={placeholder}
            items={this.props.usersList}
            name={name}
          />
        );
      }
    );
  }

  handleSubmitForm = () => {
    if (this.props.isUpdate) {
      this.props.handleUpdateCar();
    } else {
      this.props.handleAddCar();
    }
    this.props.clearCar();
  };

  onClearClick = event => {
    event.preventDefault();
    this.props.clearCar();
  };

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
    usersList: state.usersList.value,
    initialValues: state.selectedCar,
    isUpdate: !!state.selectedCar
  };
};

const CarsReduxForm = reduxForm({
  form: "carsForm",
  enableReinitialize: true
})(CarsForm);

export default connect(mapStateToProps, actions)(CarsReduxForm);
