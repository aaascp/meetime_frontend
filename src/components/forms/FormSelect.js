import React from "react";

const FormSelect = ({
  selectedError,
  properties,
  input,
  hide,
  items,
  meta: { error, touched }
}) => {
  const { placeholder, label } = properties;
  return (
    !hide && (
      <div className="form__field">
        <label className="form__label">{label}</label>
        <select {...input} value={input.value || "0"}>
          <option value="0" disabled>
            {placeholder}
          </option>

          {items.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
        <div className="form__error">
          {(selectedError && error) || (touched && error)}
        </div>
      </div>
    )
  );
};

export default FormSelect;
