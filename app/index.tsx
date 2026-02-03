import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const index = () => {
  return (
    <View style={styles.contsiner}>
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
        <TouchableOpacity style={styles.startBtn}>
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
    </View>
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
    justifyContent: "center",
    gap: 30,
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
  },
  subTitel: {
    lineHeight: 25,
    paddingHorizontal: 90,
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
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  btnTitel: {
    fontSize: 24,
    color: "#F2F2F2",
  },
  haveAccount: {
    fontSize: 20,
  },
  haveAcc: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  arrowBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#004cffc8",
    alignItems: "center",
    justifyContent: "center",
  },
});
