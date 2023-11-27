import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  appbar: {
    backgroundColor: "",
    borderStartWidth: 0,
  },
  loggedInText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
    color: "green",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    paddingTop: 50,
  },
  logo: {
    fontSize: 120,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 25,
  },
  textInput: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#6504e4",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#6504e4",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#6504e4",
    fontSize: 16,
    marginLeft: 4,
  },
  image: {
    alignSelf: "center",
    marginTop: 80,
  },
});

export default styles;
