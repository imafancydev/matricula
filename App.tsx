import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./app/screens/loginScreen";
import RegisterScreen from "./app/screens/register";
import styles from "./app/styles/custom_styles";

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const togglePages = () => {
    setShowRegister((prevShowRegister) => !prevShowRegister);
  };

  return (
    <View style={styles.container}>
      {showRegister ? (
        <RegisterScreen togglePages={togglePages} />
      ) : (
        <LoginScreen togglePages={togglePages} />
      )}
    </View>
  );
};

export default App;
