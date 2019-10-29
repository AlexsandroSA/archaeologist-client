import React from 'react';
import { useFormik } from 'formik';

import { Input, Button } from '../../components';
import schema from './schema';

const initialValues = {
    title: '',
    description: '',
    commentss: '',
};

const Form = ({ onSubmit, initialValuesWithData }) => {
    const formik = useFormik({
        initialValues: { ...initialValues, ...initialValuesWithData },
        validationSchema: schema,
        onSubmit: values => onSubmit(values),
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                label="*Title"
                name="title"
                id="title"
                type="text"
                error={formik.errors.title}
                touched={formik.touched.title}
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <Input
                label="*Description"
                name="description"
                id="description"
                type="text"
                error={formik.errors.description}
                touched={formik.touched.description}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <Input
                label="Comments"
                name="comments"
                id="comments"
                type="text"
                error={formik.errors.comments}
                touched={formik.touched.comments}
                value={formik.values.comments}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <Button type="submit">Send</Button>
        </form>
    );
}

export default Form;
