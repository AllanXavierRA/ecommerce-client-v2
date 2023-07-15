import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";

const addressCtrl = new Address();

export function AddressForm(props) {
  const { onClose, onReload, addressId, address } = props;
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (addressId) {
          await addressCtrl.update(formValue, addressId);
        } else {
          await addressCtrl.create(formValue, user.id);
        }

        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="titulo"
        placeholder="Titulo de la dirección"
        value={formik.values.titulo}
        onChange={formik.handleChange}
        error={formik.errors.titulo}
      />

      <Form.Group widths="equal">
        <Form.Input
          name="nombre"
          placeholder="Nombre y apellidos"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.errors.nombre}
        />
        <Form.Input
          name="direccion"
          placeholder="Dirección"
          value={formik.values.direccion}
          onChange={formik.handleChange}
          error={formik.errors.direccion}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="provincia"
          placeholder="Provincia"
          value={formik.values.provincia}
          onChange={formik.handleChange}
          error={formik.errors.provincia}
        />
        <Form.Input
          name="ciudad"
          placeholder="Ciudad"
          value={formik.values.ciudad}
          onChange={formik.handleChange}
          error={formik.errors.ciudad}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          name="codigo_postal"
          placeholder="Codigo postal"
          value={formik.values.codigo_postal}
          onChange={formik.handleChange}
          error={formik.errors.codigo_postal}
        />
        <Form.Input
          name="telefono"
          placeholder="Telefono"
          value={formik.values.telefono}
          onChange={formik.handleChange}
          error={formik.errors.telefono}
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
}
