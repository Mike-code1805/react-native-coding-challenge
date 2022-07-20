import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Field } from "formik";
import AppForm from "./components/form/AppForm";
import AppFormField from "./components/form/AppFormField";
import AppFormSubmitButton from "./components/form/AppFormSubmitButton";
import loginValidation from "./validator/loginValidation";
import ButtonShared from "./components/button/ButtonShared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 60,
    padding: 10,
  },
  text:{
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 20,
  }
});
const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login:</Text>
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
          placeholder="Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Ingresar" />
      </AppForm>
      <ButtonShared
        title="Regístrate"
        onPress={() => navigation.navigate("Register")}
        isValid={true}
      />
    </View>
  );
};

export default Login;
