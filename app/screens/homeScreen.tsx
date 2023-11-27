import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/custom_styles";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import LoginScreen from "./loginScreen";
import RegisterScreen from "./register";

const classTimes = [
  "8:00 Horas - 9:30 Horas",
  "10:00 Horas - 11:30 Horas",
  "12:00 Horas - 13:30 Horas",
  "13:00 Horas - 15:30 Horas",
  "16:00 Horas - 17:30 Horas",
  "18:00 Horas - 17:30 Horas",
];

const auth = FIREBASE_AUTH;

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  HorarioScreen: undefined;
  MateriasScreen: undefined;
  InfoEscola: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logOut = () => {
    navigation.navigate("LoginScreen");
  };

  const navigateToHorarioScreen = () => {
    navigation.navigate("HorarioScreen");
  };

  const navigateToMateriasScreen = () => {
    navigation.navigate("MateriasScreen");
  };

  const InfoEscola = () => {
    navigation.navigate("InfoEscola");
  };

  return (
    <View>
      <Text style={styles.loggedInText}>Horarios do Aluno</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToHorarioScreen}>
        <Text style={styles.buttonText}>Horarios</Text>
      </TouchableOpacity>

      <Text style={styles.loggedInText}>Materias do aluno</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToMateriasScreen}
      >
        <Text style={styles.buttonText}>Materias</Text>
      </TouchableOpacity>

      <Text style={styles.loggedInText}>InfoEscola</Text>
      <TouchableOpacity style={styles.button} onPress={InfoEscola}>
        <Text style={styles.buttonText}>Info Escola</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={logOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const HorarioScreen = () => {
  const [completedClasses, setCompletedClasses] = useState(
    Array(classTimes.length).fill(false)
  );

  const toggleClassCompletion = (index: number) => {
    const updatedCompletedClasses = [...completedClasses];
    updatedCompletedClasses[index] = !completedClasses[index];
    setCompletedClasses(updatedCompletedClasses);
  };
  return (
    <View style={stylesHorarioScreen.container}>
      {classTimes.map((time, index) => (
        <View key={index} style={stylesHorarioScreen.box}>
          <View style={stylesHorarioScreen.content}>
            <Text style={stylesHorarioScreen.time}>{time}</Text>
            <Text style={{ fontWeight: "500" }}>CEI Horarios</Text>
          </View>
          <TouchableOpacity
            style={[
              stylesHorarioScreen.checkButton,
              completedClasses[index] &&
                stylesHorarioScreen.completedCheckButton,
            ]}
            onPress={() => toggleClassCompletion(index)}
          >
            <Text>{completedClasses[index] ? "✔" : " "}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const MateriasScreen = () => {
  const [showSubjects, setShowSubjects] = useState(false);

  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
  };

  const subjects = [
    "Matemática ",
    "História",
    "Ciência",
    "Inglês",
    "Artes",
    "Música",
  ];

  return (
    <View>
      <Text style={{ textAlign: "center", fontWeight: "500" }}>
        CEI Materias
      </Text>
      <TouchableOpacity
        onPress={toggleSubjects}
        style={stylesMateriasScreen.toggleButton}
      >
        <Text>Materias do 6º ao 9º ano</Text>
      </TouchableOpacity>
      {showSubjects && (
        <View style={stylesMateriasScreen.subjectsContainer}>
          {subjects.map((subject, index) => (
            <View key={index} style={stylesMateriasScreen.subjectBox}>
              <Text style={stylesMateriasScreen.subjectText}>{subject}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const InfoEscola = () => {
  const schoolInfo = {
    name: "Centro de Ensino Impactus",
    address: " R. Licania, 149 - Gardênia Azul, Rio de Janeiro - RJ, 22765-560",
    email: "xxxxx@xxxxx.com",
    phoneNumber: "(21)9999-9999",
    businessHours: "Segunda - Sexta: 7:00  - 19:00 PM",
  };

  return (
    <View style={stylesInfoEscola.container}>
      <Text style={stylesInfoEscola.title}>
        Informações do Centro de Ensino Impactus{" "}
      </Text>
      <View style={stylesInfoEscola.infoContainer}>
        <Text style={stylesInfoEscola.label}>Nome da escola:</Text>
        <Text style={stylesInfoEscola.info}>{schoolInfo.name}</Text>
      </View>
      <View style={stylesInfoEscola.infoContainer}>
        <Text style={stylesInfoEscola.label}>Endereço:</Text>
        <Text style={stylesInfoEscola.info}>{schoolInfo.address}</Text>
      </View>
      <View style={stylesInfoEscola.infoContainer}>
        <Text style={stylesInfoEscola.label}>Email:</Text>
        <Text style={stylesInfoEscola.info}>{schoolInfo.email}</Text>
      </View>
      <View style={stylesInfoEscola.infoContainer}>
        <Text style={stylesInfoEscola.label}>Número de telefone:</Text>
        <Text style={stylesInfoEscola.info}>{schoolInfo.phoneNumber}</Text>
      </View>
      <View style={stylesInfoEscola.infoContainer}>
        <Text style={stylesInfoEscola.label}>Horário de funcionamento:</Text>
        <Text style={stylesInfoEscola.info}>{schoolInfo.businessHours}</Text>
      </View>
    </View>
  );
};

const stylesMateriasScreen = StyleSheet.create({
  toggleButton: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subjectsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subjectBox: {
    width: 100,
    height: 80,
    margin: 10,
    borderWidth: 1,
    borderColor: "#212325",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  subjectText: {
    color: "#5c2b5c",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const stylesHorarioScreen = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "45%",
    height: 100,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flex: 1,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  className: {
    fontSize: 14,
  },
  checkButton: {
    width: 30,
    height: 30,
    backgroundColor: "lightgray",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  completedCheckButton: {
    backgroundColor: "green",
  },
});

const stylesInfoEscola = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HorarioScreen" component={HorarioScreen} />
        <Stack.Screen name="MateriasScreen" component={MateriasScreen} />
        <Stack.Screen name="InfoEscola" component={InfoEscola} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
