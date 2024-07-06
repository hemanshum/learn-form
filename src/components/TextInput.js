import { StyleSheet, Text, View, TextInput as Input } from "react-native";

const TextInput = ({ label, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        cursorColor="#249781"
        placeholderTextColor="#9caec716"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  inputLabel: {
    fontSize: 12,
    color: "#9caec7",
    fontWeight: "medium",
  },
  input: {
    borderWidth: 2,
    borderColor: "#9caec7",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginVertical: 4,
    backgroundColor: "#172F52",
    color: "#fff",
  },
});

export default TextInput;
