const required = value => (value ? undefined : "Deve ser preenchido");

const number = value =>
  value && isNaN(Number(value)) ? "Deve ser um número" : undefined;

const tooOld = value => {
  const MAX_AGE = 30;
  const currentYear = new Date().getFullYear();

  if (value && currentYear - value > MAX_AGE) {
    return `Deve ser de ${currentYear - MAX_AGE} ou mais novo`;
  } else {
    return undefined;
  }
};

const validColor = value => {
  const colors = ["branco", "preto", "verde"];
  if (value && !colors.includes(value.toLowerCase())) {
    return `Deve ser uma das seguintes cores [${colors}]`;
  } else {
    return undefined;
  }
};

export default [
  { label: "ID", name: "id", disabled: true, hideOnNew: true },
  {
    label: "Responsável",
    name: "user",
    placeholder: "Usuários do Pipedrive",
    validations: required
  },
  {
    label: "Modelo",
    name: "model",
    placeholder: "Ex: Celta",
    validation: required
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
    placeholder: "Ex: Azul",
    validations: [required, validColor]
  }
];
