import { Image, StyleSheet, Text, View } from "react-native";

import ExternalLinks from "./ExternalLinks";
import ImageView from "./ImageView";

const FormData = ({ userDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageView
          URI={userDetails.image || "https://i.pravatar.cc/150?img=3"}
        />
        <View>
          <Text style={styles.username}>{userDetails.username}</Text>
          <Text style={styles.title}>{userDetails.title}</Text>
          <Text style={styles.member}>
            {userDetails.isMember && "Member of Code Club"}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.bio}>{userDetails.bio}</Text>
        <ExternalLinks icon="linkedin" link={userDetails.linkedin} />
        <ExternalLinks icon="github" link={userDetails.github} />
        <ExternalLinks icon="globe" link={userDetails.website} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#9caec7",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#172F52",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  username: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
  },
  title: {
    color: "#9caec7",
    fontWeight: "400",
    fontSize: 12,
    fontStyle: "italic",
  },
  member: {
    color: "#9caec7",
    fontWeight: "400",
    fontSize: 12,
  },
  bio: {
    fontSize: 14,
    letterSpacing: 0.4,
    marginVertical: 8,
    color: "#9caec7",
  },
});

export default FormData;
