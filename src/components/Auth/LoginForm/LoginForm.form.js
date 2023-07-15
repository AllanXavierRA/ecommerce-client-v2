import * as Yup from "yup";

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    identifier: Yup.string().required("Email obligatorio"),
    password: Yup.string().required("Contraseña obligatoria"),
  });
}
