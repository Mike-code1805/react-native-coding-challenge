import React from "react";
import { Text } from "react-native";
import { Field } from "formik";
import AppForm from "./components/AppForm";
import AppFormField from "./components/AppFormField";
import AppFormSubmitButton from "./components/AppFormSubmitButton";
import loginValidation from "./validator/loginValidation";


const Login = () => {
  return (
    <>
      <Text>Sign Up</Text>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={loginValidation}
        onSubmit={(values: any) => console.log(values)}
      >
        <Field
          component={AppFormField}
          name="email"
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Field
          component={AppFormField}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Submit" />
      </AppForm>
    </>
  );
};

export default Login;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     fontSize: 18,
//     borderRadius: 6,
//   },
//   errorText: {
//     color: 'crimson',
//     fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 6,
//     textAlign: 'center',
//   },

// });
