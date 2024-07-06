import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import axios from "./src/apis/mainAPI";

import FormData from "./src/components/FormData";
import UserForm from "./src/components/UserForm";
import { useState, useEffect } from "react";

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  const [userDetails, setUserDetails] = useState({});

  const handleFetchData = async () => {
    const result = await axios.get("/users");
    setUserDetails(result.data[result.data.length - 1]);
  };

  const handleSubmit = async (userData) => {
    const result = await axios.post("/users", userData);
    setUserDetails(result.data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FormData userDetails={userDetails} />
      <UserForm submit={handleSubmit} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121933",
    paddingVertical: statusBarHeight,
    paddingHorizontal: 16,
  },
});
