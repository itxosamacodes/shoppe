import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../../utils/supabase";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, SetErrMsg] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const signUpHandeler = async () => {
    SetErrMsg("");
    if (!name && !email && !Password && !ConfirmPass) {
      SetErrMsg("Please fill all the fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      SetErrMsg("Please enter a valid email address");
      return;
    }

    if (Password !== ConfirmPass) {
      SetErrMsg("Password doesnt match");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: Password,
      options: {
        data: {
          fullName: name,
        },
      },
    });
    setLoading(false);
    if (error) {
      SetErrMsg(error.message);
      return;
    }
    router.push({
      pathname: "/(auth)/varification",
      params: { email },
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.bkgImg}
        source={require("../../assets/auth/bkg.png")}
      />
      <Text style={styles.titel}>Create Account</Text>
      <ScrollView>
        <View style={styles.form}>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={styles.inputs}
            placeholderTextColor="#B0B0B0"
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.inputs}
            placeholderTextColor="#B0B0B0"
          />
          <TextInput
            value={Password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputs}
            placeholderTextColor="#B0B0B0"
          />
          <TextInput
            value={ConfirmPass}
            secureTextEntry={true}
            onChangeText={setConfirmPass}
            placeholder="Confirm Password"
            style={styles.inputs}
            placeholderTextColor="#B0B0B0"
          />
          <Text style={styles.error}>{errMsg ? errMsg : null}</Text>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => {
              signUpHandeler();
            }}
          >
            <Text style={styles.btnTitel}>
              {loading ? (
                <ActivityIndicator color={"white"} size={"small"} />
              ) : (
                "Sign Up"
              )}
            </Text>
          </TouchableOpacity>
          <View style={styles.siginRow}>
            <Text style={styles.sigintxt}>I already have account </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/signIn");
              }}
            >
              <Text style={styles.btnTxt}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  error: {
    color: "red",
    fontSize: 14,
    paddingTop: 25,
  },
  bkgImg: {
    resizeMode: "cover",
    height: "37%",
    width: "auto",
  },
  titel: {
    position: "absolute",
    fontSize: 54,
    textAlign: "left",
    width: 250,
    paddingLeft: 30,
    paddingTop: 170,
    fontWeight: "700",
    zIndex: 10,
  },
  form: {
    alignItems: "center",
    marginTop: -30,
    zIndex: 25,
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
