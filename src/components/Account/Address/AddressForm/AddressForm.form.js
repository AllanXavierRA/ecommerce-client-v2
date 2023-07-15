import * as Yup from "yup";

export function initialValues(address) {
  return {
    titulo: address?.titulo || "",
    nombre: address?.nombre || "",
    direccion: address?.direccion || "",
    ciudad: address?.ciudad || "",
    provincia: address?.provincia || "",
    codigo_postal: address?.codigo_postal || "",
    telefono: address?.telefono || "",
  };
}

export function validationSchema() {
  return Yup.object({
    titulo: Yup.string().required(true),
    nombre: Yup.string().required(true),
    direccion: Yup.string().required(true),
    ciudad: Yup.string().required(true),
    provincia: Yup.string().required(true),
    codigo_postal: Yup.string().required(true),
    telefono: Yup.number().required(true),
  });
}
