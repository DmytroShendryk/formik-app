import React from 'react';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import  Validate from './Validate';
import '../css/style.css'

const FormComponent = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={Validate}
      onSubmit={handleSubmit}
    >
      <Form className='form-component'>
        <InputField label="Ім'я" name="name" type="text" />
        <InputField label="Електронна пошта" name="email" type="email" />
        <InputField label="Телефон" name="phone" type="text" />
        <button type="submit">Відправити</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;