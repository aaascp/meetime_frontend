export const required = value => (value ? undefined : "Deve ser preenchido");

export const requiredSelect = value => {
  return value && value !== "0" ? undefined : "Deve ser preenchido";
};

export const number = value =>
  value && isNaN(Number(value)) ? "Deve ser um número" : undefined;

export const tooOld = value => {
  const MAX_AGE = 30;
  const currentYear = new Date().getFullYear();

  if (value && currentYear - value > MAX_AGE) {
    return `Deve ser de ${currentYear - MAX_AGE} ou mais novo`;
  } else {
    return undefined;
  }
};

export const validColor = value => {
  const colors = ["branco", "preto", "verde"];
  const initialColors = colors.slice(0, colors.length - 1).join(", ");
  const lastColor = colors.slice(-1);
  if (value && !colors.includes(value.toLowerCase())) {
    return `Deve ser ${initialColors} ou ${lastColor}`;
  } else {
    return undefined;
  }
};
