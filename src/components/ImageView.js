import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageView = ({ URI }) => {
  return (
    <Image
      source={{
        uri: URI,
      }}
      style={styles.image}
    />
  );
};

export default ImageView;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#9caec7",
  },
});
