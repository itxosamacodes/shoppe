import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const signUp = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bkgImg}
        source={require("../../assets/auth/bkg.png")}
      />
      <Text style={styles.titel}>Create Account</Text>
      <View style={styles.form}>
        <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require("../../assets/auth/Dp.png")}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Full Name"
          style={styles.inputs}
          placeholderTextColor="#B0B0B0"
        />
        <TextInput
          placeholder="Email"
          style={styles.inputs}
          placeholderTextColor="#B0B0B0"
        />
        <TextInput
          placeholder="Password"
          style={styles.inputs}
          placeholderTextColor="#B0B0B0"
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.inputs}
          placeholderTextColor="#B0B0B0"
        />
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => {
            router.push("/(auth)/varification");
          }}
        >
          <Text style={styles.btnTitel}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.siginRow}>
          <Text style={styles.sigintxt}>I already have account </Text>
          <TouchableOpacity>
            <Text style={styles.btnTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default signUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bkgImg: {
    resizeMode: "cover",
    height: "40%",
    width: "auto",
  },
  titel: {
    position: "absolute",
    fontSize: 54,
    textAlign: "left",
    width: 250,
    paddingLeft: 30,
    paddingTop: 200,
    fontWeight: "700",
    zIndex: 10,
  },
  form: {
    alignItems: "center",
  },
  dp: {
    height: 90,
    width: 90,
  },
  inputs: {
    height: 60,
    width: "80%",
    backgroundColor: "#F8F8F8",
    marginTop: 30,
    borderRadius: 20,
    paddingLeft: 20,
    elevation: 5,
  },
  signUpBtn: {
    height: 60,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004cff",
    marginTop: 30,
    borderRadius: 15,
    elevation: 5,
  },
  btnTitel: {
    fontSize: 23,
    color: "#ffff",
  },
  siginRow: {
    flexDirection: "row",
    height: 80,
    paddingTop: 30,
  },
  sigintxt: {
    fontSize: 18,
  },
  btnTxt: {
    fontSize: 18,
    color: "#004cff",
  },
});
