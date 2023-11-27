import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/custom_styles";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

const RegisterScreen = ({ togglePages }: { togglePages: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
      Alert.alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Matricula"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoComplete="email"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      )}

      {/* Go to SignIn page */}
      <View style={styles.registerContainer}>
        <Text>Já tenho uma matrícula </Text>
        <TouchableOpacity onPress={togglePages}>
          <Text style={styles.registerText}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
