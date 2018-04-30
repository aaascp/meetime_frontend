import React from "react";

const FormInput = ({
  selectedError,
  properties,
  input,
  hide,
  meta: { error, touched }
}) => {
  const { placeholder, disabled, label } = properties;
  return (
    !hide && (
      <div className="form__field">
        <label className="form__label">{label}</label>
        <div
          className={"form__input" + (disabled ? " form__input--disabled" : "")}
        >
          <input
            className={
              "form__input-value" +
              (touched && error ? " form__input--error" : "")
            }
            {...input}
            placeholder={placeholder}
            disabled={disabled}
          />
          <div className="form__info form__info--error">
            {(selectedError && error) || (touched && error)}
          </div>
        </div>
      </div>
    )
  );
};

export default FormInput;
