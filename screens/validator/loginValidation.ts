import * as Yup from "yup";

const loginValidation = Yup.object().shape({
    email: Yup.string()
        .email("Por favor ingrese un email válido")
        .required("Se requiere un email")
        .label("Email"),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, "La contraseña debe tener letras minúsculas")
        .matches(/\w*[A-Z]\w*/, "La contraseña debe tener una letra mayúscula")
        .matches(/\d/, "La contraseña debe tener un número")
        .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
        .required("Se requiere una contraseña")
        .label("Password"),
});

export default loginValidation;
