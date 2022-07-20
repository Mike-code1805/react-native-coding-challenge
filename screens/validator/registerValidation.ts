import * as Yup from "yup";

const registerValidation = Yup.object().shape({
    name: Yup.string().required("Se requiere un nombre").label("Name"),
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
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
        .required("Se requiere una confirmación de contraseña")
        .label("Confirm Password"),
});

export default registerValidation;
