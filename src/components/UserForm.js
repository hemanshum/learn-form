import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextInput from "./TextInput";
import ImageView from "./ImageView";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3)
    .max(16, "Username must be less than 20 characters"),
  title: yup
    .string()
    .required("Title is required")
    .max(20, "Title must be less than 20 characters"),
  member: yup.boolean(),
  bio: yup
    .string()
    .required("Bio is required")
    .max(200, "Bio must be less than 200 characters"),
  linkedin: yup
    .string()
    .required("Linkedin is required")
    .matches(
      "(http(s?)://)?(www.)?linkedin.([a-z])+/(in/)([A-Za-z0-9]+)+/?",
      "Please enter a valid Linkedin URL",
    ),
  github: yup
    .string()
    .required("Github is required")
    .matches(
      "(http(s?)://)?(www.)?github.([a-z])+/()([A-Za-z0-9]+)+/?",
      "Please enter a valid Github URL",
    ),
  website: yup
    .string()
    .matches(
      "(http(s?)://)?(www.)?([A-Za-z0-9]+)(.[a-z])+(/[A-Za-z0-9]+)*",
      "Please enter a valid Website URL",
    ),
});

const UserForm = ({ submit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Details</Text>

      <View style={{ alignItems: "center" }}>
        <ImageView URI={"https://i.pravatar.cc/150?img=3"} />
      </View>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Username"
            placeholder="Enter your username"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.username && (
        <Text style={{ color: "red" }}>{errors.username.message}</Text>
      )}
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Title"
            placeholder="Enter your job title"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.title && (
        <Text style={{ color: "red" }}>{errors.title.message}</Text>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Controller
          control={control}
          name="member"
          render={({ field: { onChange, onBlur, value } }) => (
            <Switch
              trackColor={{ false: "#172F52", true: "#249781" }}
              thumbColor={value ? "#c2c2c2" : "#f4f3f4"}
              onValueChange={onChange}
              value={value}
            />
          )}
        />
        <Text style={{ color: "#9caec7" }}>Are you a member of Code Club</Text>
      </View>
      <Controller
        control={control}
        name="bio"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Bio"
            placeholder="Enter your bio"
            multiline
            numberOfLines={4}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.bio && <Text style={{ color: "red" }}>{errors.bio.message}</Text>}
      <Controller
        control={control}
        name="linkedin"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Linkedin"
            placeholder="Enter your Linkedin"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.linkedin && (
        <Text style={{ color: "red" }}>{errors.linkedin.message}</Text>
      )}
      <Controller
        control={control}
        name="github"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="GitHub"
            placeholder="Enter your Github"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.github && (
        <Text style={{ color: "red" }}>{errors.github.message}</Text>
      )}
      <Controller
        control={control}
        name="website"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Website"
            placeholder="Enter your Website"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      />
      {errors.website && (
        <Text style={{ color: "red" }}>{errors.website.message}</Text>
      )}
      {/* 3. allow user to access image using the image picker function */}
      <Pressable style={styles.imgButton} onPress={pickImageAsync}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#9caec7",
    borderRadius: 10,
    padding: 8,
    marginVertical: 16,
    marginBottom: 100,
  },
  title: {
    fontSize: 16,
    color: "#9caec7",
    fontWeight: "medium",
    marginVertical: 8,
  },
  imgButton: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 3,
    borderColor: "#249781",
  },
  button: {
    backgroundColor: "#249781",
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default UserForm;
