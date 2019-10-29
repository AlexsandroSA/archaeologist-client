import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string()
        .min(3)
        .max(30)
        .required('Required'),
    description: Yup.string()
        .min(3)
        .max(80)
        .required('Required'),
    comments: Yup.string()
});

export default schema;

