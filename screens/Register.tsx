import React from "react";
import { Text } from "react-native";
import { Field } from "formik";
import AppForm from "./components/AppForm";
import AppFormField from "./components/AppFormField";
import AppFormSubmitButton from "./components/AppFormSubmitButton";
import registerValidation from "./validator/registerValidation";

const Register = () => {
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
        validationSchema={registerValidation}
        onSubmit={(values: any) => console.log(values)}
      >
        <Field component={AppFormField} name="name" placeholder="Name" />
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
        <Field
          component={AppFormField}
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Submit" />
      </AppForm>
    </>
  );
};

export default Register;
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