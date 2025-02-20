export const passwordValidation = {
  required: true,
  minLength: { value: 6, message: "El mínimo de caracteres es 8" },
  maxLength: { value: 20, message: "El máximo de caracteres es 20" },
};

export const emailValidation = {
  required: true,
  pattern: {value: /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  message: "Ingrese un email válido"}
};


export const usernamelValidation = {
  required: true,
  minLength: {value: 2, message: "El mínimo de caracteres es 2"},
  maxLength: {value: 25, message: "El mínimo de caracteres es 25"},
};