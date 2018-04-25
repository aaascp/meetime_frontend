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
      <div>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} disabled={disabled} />
        <div>{touched && error}</div>
      </div>
    )
  );
};

export default CarFieldItem;
