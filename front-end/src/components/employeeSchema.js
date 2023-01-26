import * as yup from 'yup';

export const EmployeeSchema = yup.object().shape({
    fname: yup.string().min(6).max(10).required(),
    lname: yup.string().min(6).max(10).required(),
    email: yup.string().email("Please enter valide Email Address").required(),
    phone: yup.string().matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, { message: "please enter valide number" }).required(),
    picture: yup.string().url().required()
});

