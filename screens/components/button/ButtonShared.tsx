import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "monospace",
    color: "white",
  },
});

interface AppButtonProps {
  title: string;
  onPress: any;
  isValid: boolean;
}

const ButtonShared = ({ title, onPress, isValid }: AppButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress} disabled={!isValid}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonShared;
