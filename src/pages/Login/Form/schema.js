import * as Yup from 'yup';

const formSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email addresss`')
      .required('Required'),
    password: Yup.string()
      .min(3, 'Must be 15 characters or less')
      .required('Required'),
});

export default formSchema;
