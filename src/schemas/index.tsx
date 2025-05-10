import * as Yup from "yup";

const passwordRules = /^(?=.*[a-zA-Z])(?=.*\d).{5,}$/;


const basicScema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string().min(8).matches(passwordRules, { message: 'Password must contain letters and numbers, at least 5 characters' }).required('Required')
})

export default basicScema