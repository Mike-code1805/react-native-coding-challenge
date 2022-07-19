import React from "react";
import { Button, Text } from "react-native";
import { Field } from "formik";
import AppForm from "./components/form/AppForm";
import AppFormField from "./components/form/AppFormField";
import AppFormSubmitButton from "./components/form/AppFormSubmitButton";
import loginValidation from "./validator/loginValidation";
import ButtonShared from "./components/button/ButtonShared";

const Login = ({ navigation }: any) => {
  return (
    <>
      <Text>Login</Text>
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
        <AppFormSubmitButton title="Ingresar" />
      </AppForm>
      <ButtonShared
        title="Go to Register"
        onPress={() => navigation.navigate("Register")}
        isValid={true}
      />
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
