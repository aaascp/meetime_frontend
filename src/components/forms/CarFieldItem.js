import React from "react";

const CarFieldItem = ({
  input,
  label,
  placeholder,
  disabled,
  hide,
  meta: { error, touched }
}) => {
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
        <div className="form__error">{touched && error}</div>
      </div>
    )
  );
};

export default CarFieldItem;
