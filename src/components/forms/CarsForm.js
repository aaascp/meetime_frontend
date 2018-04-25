import React from "react";
import { reduxForm, Field, change } from "redux-form";
import CarFieldItem from "./CarFieldItem";
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
      ({ label, name, placeholder, disabled, hideOnNew }) => {
        return (
          <Field
            key={name}
            component={CarFieldItem}
            type="text"
            hide={!this.props.selectedCar && hideOnNew}
            label={label}
            disabled={disabled || false}
            placeholder={placeholder}
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
        <form onSubmit={this.props.handleSubmit(this.handleSubmitForm)}>
          {this.renderFields()}
          {this.props.selectedCar && (
            <button className="button" onClick={this.onClearClick}>
              Limpar
            </button>
          )}
          <button type="submit" className="button">
            {this.props.selectedCar ? "Atualizar" : "Salvar"}
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // errors.recipients = validateEmails(values.recipients || "");
  //
  // _.each(formFields, ({ name }) => {
  //   if (!values[name]) {
  //     errors[name] = "You must provide a value";
  //   }
  // });

  return errors;
}

export default reduxForm({
  validate,
  form: "carsForm"
})(CarsForm);
