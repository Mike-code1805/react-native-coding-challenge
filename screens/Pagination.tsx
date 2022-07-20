import { StackActions } from "@react-navigation/native";
import { Field } from "formik";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/apiCall";
import { logout, selectUsers } from "../redux/store";
import ButtonShared from "./components/button/ButtonShared";
import AppForm from "./components/form/AppForm";
import AppFormField from "./components/form/AppFormField";
import AppFormSubmitButton from "./components/form/AppFormSubmitButton";
import userValidation from "./validator/userValidation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 60,
    padding: 10,
  },
  text: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 20,
  },
  containerEdit: {},
  containerButtons: {},
});
const Pagination = ({ navigation }: any) => {
  const state = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const editUser = async () => {
    await getUser(dispatch, state.user);
    console.log(state.user.id);
    setEdit(true);
  };

  const handleOnSubmitToEdit = (values: any) => {
    console.log(values);
    setEdit(false);
  };

  console.log("xxxx");
  console.log(state.user);
  console.log("xxxx");

  const gotoLogOut = () => {
    try {
      dispatch(logout());
      navigation.dispatch(StackActions.replace("Login", state.user));
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagination</Text>
      {edit ? (
        <View style={styles.containerEdit}>
          <AppForm
            initialValues={{
              avatar: "",
              first_name: "",
              last_name: "",
              email: "",
            }}
            validationSchema={userValidation}
            onSubmit={handleOnSubmitToEdit}
          >
            <Field
              component={AppFormField}
              name="avatar"
              placeholder={state.user.avatar}
            />
            <Field
              component={AppFormField}
              name="email"
              placeholder={state.user.email}
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Field
              component={AppFormField}
              name="first_name"
              placeholder={state.user.first_name}
            />
            <Field
              component={AppFormField}
              name="last_name"
              placeholder={state.user.last_name}
            />
            <AppFormSubmitButton title="Editar" />
          </AppForm>
          <ButtonShared
            title="Cancelar"
            onPress={() => setEdit(false)}
            isValid={true}
            color={true}
          />
        </View>
      ) : null}

      <View style={styles.containerButtons}>
        <ButtonShared
          title="Cerrar Sesión"
          onPress={gotoLogOut}
          isValid={true}
        />
        <ButtonShared title="Editar" onPress={editUser} isValid={true} />
      </View>
    </View>
  );
};

export default Pagination;
