import React from "react";
import { reduxForm, Field, change } from "redux-form";
import CarFieldItem from "./CarFieldItem";
import CarFieldSelect from "./CarFieldSelect";
import carsFields from "./carsFields";

class CarsForm extends React.Component {
  componentDidUpdate() {
    if (this.props.selectedCar) {
      carsFields.forEach(({ name }) => {
        if (this.props.selectedCar.hasOwnProperty(name)) {
          this.changeField(name, this.props.selectedCar[name]);
        }
      });
    }
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
            hide={!this.props.selectedCar && hideOnNew}
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
    this.props.handleSubmitForm();
    this.resetFields();
  };

  onClearClick = event => {
    event.preventDefault();
    this.resetFields();
    this.props.handleClearClick();
  };

  resetFields = () => {
    carsFields.forEach(({ name }) => this.changeField(name, null));
  };

  changeField = (name, value) => {
    this.props.dispatch(change("carsForm", name, value));
  };

  render() {
    return (
      <div>
        <h1>{this.props.selectedCar ? "Atualizar" : "Novo"} Carro</h1>
        <form
          className="form"
          onSubmit={this.props.handleSubmit(this.handleSubmitForm)}
        >
          {this.renderFields()}

          <div className="form__actions">
            {this.props.selectedCar && (
              <button className="button" onClick={this.onClearClick}>
                Limpar
              </button>
            )}
            <button type="submit" className="button form__submit">
              {this.props.selectedCar ? "Atualizar" : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "carsForm"
})(CarsForm);
