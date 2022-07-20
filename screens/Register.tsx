import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Field } from "formik";
import AppForm from "./components/form/AppForm";
import AppFormField from "./components/form/AppFormField";
import AppFormSubmitButton from "./components/form/AppFormSubmitButton";
import registerValidation from "./validator/registerValidation";
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

const Register = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro:</Text>
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
        <Field component={AppFormField} name="name" placeholder="Nombre" />
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
        <Field
          component={AppFormField}
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Registrar" />
      </AppForm>
      <ButtonShared
        title="Ir al Login"
        onPress={() => navigation.navigate("Login")}
        isValid={true}
      />
    </View>
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
