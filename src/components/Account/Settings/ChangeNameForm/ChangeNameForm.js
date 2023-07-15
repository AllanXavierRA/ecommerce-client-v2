import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./ChangeNameForm.form";
import styles from "./ChangeNameForm.module.scss";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  // console.log(user);
  const formik = useFormik({
    initialValues: initialValues(user.nombre, user.apellido),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>

      <div className={styles.content}>
        <Form.Input
          name="nombre"
          placeholder="Nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.errors.nombre}
        />
        <Form.Input
          name="apellido"
          placeholder="Apellidos"
          value={formik.values.apellido}
          onChange={formik.handleChange}
          error={formik.errors.apellido}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Enviar
        </Form.Button>
      </div>
    </Form>
  );
}
