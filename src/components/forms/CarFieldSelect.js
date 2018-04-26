import React from "react";

const CarFieldSelect = ({
  input,
  label,
  placeholder,
  disabled,
  hide,
  items,
  meta: { error, touched }
}) => {
  return (
    !hide && (
      <div className="form__field">
        <label className="form__label">{label}</label>
        <select {...input}>
          <option value="" disabled defaultValue>
            {placeholder}
          </option>

          {items.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
        <div className="form__error">{touched && error}</div>
      </div>
    )
  );
};

export default CarFieldSelect;
