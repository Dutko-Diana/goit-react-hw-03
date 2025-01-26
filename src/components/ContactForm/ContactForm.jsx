import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    username: "",
    number: "",
    id: nanoid(),
  };

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <div className={s.info}>
          <label htmlFor={nameId}>Name</label>
          <Field className={s.input} type="text" name="username" id={nameId} />
        </div>
        <div className={s.info}>
          <label htmlFor={numberId}>Number</label>
          <Field className={s.input} type="text" name="number" id={numberId} />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// onSubmit({
//             id: nanoid(),
//             name: event.target.elements.username.value,
//             number: event.target.elements.number.value,
//               })
