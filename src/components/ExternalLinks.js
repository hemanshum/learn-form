import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ExternalLinks = ({ icon, link }) => {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={18} color="#249781" />
      <Text style={styles.link}>{link}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 6,
  },
  link: {
    fontSize: 12,
    color: "#fff",
    letterSpacing: 0.4,
  },
});

export default ExternalLinks;
