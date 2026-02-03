import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const index = () => {
  return (
    <SafeAreaView style={styles.contsiner}>
      <View style={styles.topContent}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={require("../assets/App/logo.png")}
          ></Image>
        </View>
        <Text style={styles.titel}>Shoppe</Text>
        <Text style={styles.subTitel}>
          Beautiful eCommerce UI Kit for your online store
        </Text>
      </View>
      <View style={styles.botomBar}>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => {
            router.push("/(auth)/signUp");
          }}
        >
          <Text style={styles.btnTitel}>Let s get started</Text>
        </TouchableOpacity>
        <View style={styles.haveAcc}>
          <Text style={styles.haveAccount}>I already have an account</Text>
          <TouchableOpacity style={styles.arrowBtn}>
            <Ionicons
              name="arrow-forward"
              size={28}
              color={"#F2F2F2"}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default index;
const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  topContent: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 144,
    width: 144,
    borderRadius: 72,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  logoImg: {
    height: 100,
    width: 90,
  },
  titel: {
    fontSize: 52,
    textAlign: "center",
    fontWeight: "700",
    paddingTop: 30,
  },
  subTitel: {
    paddingTop: 30,
    lineHeight: 25,
    paddingHorizontal: 34,
    maxWidth: 320,
    fontSize: 20,
    textAlign: "center",
    color: "grey",
    fontWeight: "600",
  },
  botomBar: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  startBtn: {
    backgroundColor: "#004cffc8",
    height: 70,
    paddingHorizontal: 85,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  btnTitel: {
    fontSize: 24,
    color: "#F2F2F2",
  },
  haveAccount: {
    fontSize: 18,
    color: "#555",
  },
  haveAcc: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  arrowBtn: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: "#004cffc8",
    alignItems: "center",
    justifyContent: "center",
  },
});
