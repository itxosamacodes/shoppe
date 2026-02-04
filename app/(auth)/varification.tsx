import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const signIn = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bkgImg}
        source={require("../../assets/auth/bkg.png")}
      />
      <Text style={styles.titel}>Varify your Identity</Text>
      <View style={styles.form}>
        <View style={styles.otp}>
          <TextInput
            style={styles.inputs}
            placeholder="1 2 3 1 2 3"
            placeholderTextColor="#B0B0B0"
          />
        </View>

        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => {
            router.push("/(auth)/update");
          }}
        >
          <Text style={styles.btnTitel}>Varify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default signIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  bkgImg: {
    width: "100%",
    height: "40%",
    resizeMode: "cover",
  },

  titel: {
    position: "absolute",
    fontSize: 54,
    textAlign: "left",
    paddingLeft: 30,
    paddingTop: 200,
    fontWeight: "700",
    zIndex: 10,
  },
  form: {
    alignItems: "center",
    marginTop: 40,
  },

  otp: {
    flexDirection: "row",
    marginBottom: 30,
  },

  inputs: {
    height: 60,
    width: "80%",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    marginHorizontal: 6,
    textAlign: "center",
    fontSize: 18,
    elevation: 3,
  },

  signUpBtn: {
    height: 60,
    width: "80%",
    backgroundColor: "#004CFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },

  btnTitel: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "600",
  },
});
