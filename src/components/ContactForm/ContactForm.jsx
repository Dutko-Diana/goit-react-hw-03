import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.info}>
          <label htmlFor={nameId}>Name</label>
          <Field className={s.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={s.error} name="name" component="p" />
        </div>
        <div className={s.info}>
          <label htmlFor={numberId}>Number</label>
          <Field className={s.input} type="text" name="number" id={numberId} />
          <ErrorMessage className={s.error} name="number" component="p" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
