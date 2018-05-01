import {
  requiredSelect,
  required,
  number,
  tooOld,
  validColor
} from "./carsFieldsValidations";

export default [
  {
    label: "Responsável",
    name: "userId",
    placeholder: "Usuários do Pipedrive",
    validations: requiredSelect,
    isSelectField: true
  },
  {
    label: "Modelo",
    name: "model",
    placeholder: "Ex: Celta",
    validations: required
  },
  {
    label: "Ano",
    name: "year",
    placeholder: "Ex: 2009",
    validations: [required, number, tooOld]
  },
  {
    label: "Cor",
    name: "color",
    placeholder: "Ex: Preto",
    validations: [required, validColor]
  }
];
