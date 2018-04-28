import React from "react";

const CarFieldItem = ({
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
          className={
            "form__input" +
            (touched && error ? " form__input--error" : "") +
            (disabled ? " form__input--disabled" : "")
          }
        >
          <input
            className="form__input-value"
            {...input}
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>
        <div className="form__error">
          {(selectedError && error) || (touched && error)}
        </div>
      </div>
    )
  );
};

export default CarFieldItem;
