import React from 'react';
import { useFormik } from 'formik';

import { Input, Button } from '../../../components';
import formSchema from './schema';

const Form = () => {
  const formik = useFormik({
    validationSchema: formSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <Input
            id="email"
            label="Email"
            name="name"
            type="email"
            error={formik.errors.email}
            touched={formik.touched.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />

        <Input
          id="password"
          label="Senha"
          name="password"
          type="password"
          error={formik.errors.password}
          touched={formik.touched.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button type="submit">Entrar</Button>
    </form>
  );
};


export default Form;
