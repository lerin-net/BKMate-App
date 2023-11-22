import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen}>
      <View style={styles.background1} />
      <Image
        style={[styles.objectsIcon, styles.ngNhpPosition]}
        contentFit="cover"
        source={require("../assets/objects.png")}
      />
      <View style={styles.header}>
        <Text style={[styles.ngNhp, styles.ngNhpClr]}>Đăng nhập</Text>
      </View>
      <View style={styles.form}>
        <View>
          <View style={[styles.input, styles.inputSpaceBlock]}>
            <Text style={styles.placeholder}>Email</Text>
          </View>
          <View style={[styles.input1, styles.inputSpaceBlock]}>
            <Text style={styles.placeholder}>Password</Text>
          </View>
        </View>
        <Text style={[styles.qunMtKhu1, styles.button3Typo]}>
          Quên mật khẩu?
        </Text>
        <View style={styles.actions}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.button1, styles.ngNhpTypo]}>Đăng nhập</Text>
          </Pressable>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={[styles.button3, styles.button3Typo]}>
              Tạo tài khoản
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.socialMedia}>
        <Text style={[styles.hocNgNhp1, styles.button3Typo]}>
          Hoặc đăng nhập với
        </Text>
        <View style={styles.socialMedia1}>
          <View style={styles.googleFlexBox}>
            <Image
              style={styles.googleChild}
              contentFit="cover"
              source={require("../assets/frame-1.png")}
            />
          </View>
          <View style={[styles.facebook, styles.googleFlexBox]}>
            <Image
              style={[styles.wrapperIcon1, styles.appleChildLayout]}
              contentFit="cover"
              source={require("../assets/wrapper.png")}
            />
          </View>
          <View style={[styles.facebook, styles.googleFlexBox]}>
            <Image
              style={styles.appleChildLayout}
              contentFit="cover"
              source={require("../assets/frame-11.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.tipTcM1, styles.button3Typo]}>
        Tiếp tục mà không đăng nhập
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ngNhpPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  ngNhpClr: {
    color: Color.deepskyblue_200,
    fontWeight: "700",
  },
  inputSpaceBlock: {
    paddingBottom: Padding.p_xl,
    paddingRight: Padding.p_16xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_xl,
    width: 357,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  button3Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
  },
  ngNhpTypo: {
    fontFamily: FontFamily.montserrat,
    textAlign: "center",
  },
  googleFlexBox: {
    width: 60,
    backgroundColor: Color.whitesmoke_600,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  appleChildLayout: {
    height: 24,
    width: 24,
  },
  background1: {
    top: -51,
    width: 428,
    left: 0,
    position: "absolute",
    height: 926,
  },
  objectsIcon: {
    width: 1105,
    height: 1572,
  },
  ngNhp: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    top: 0,
    left: 0,
    position: "absolute",
  },
  header: {
    top: 97,
    left: 122,
    width: 175,
    height: 37,
    position: "absolute",
  },
  placeholder: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.dimgray_100,
    textAlign: "center",
  },
  input: {
    borderStyle: "solid",
    borderColor: "#45b3e3",
    borderWidth: 2,
    alignItems: "center",
  },
  input1: {
    marginTop: 29,
    alignItems: "center",
  },
  qunMtKhu1: {
    marginTop: 30,
    color: Color.deepskyblue_200,
    fontWeight: "700",
  },
  button1: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
  },
  button: {
    backgroundColor: Color.lightskyblue_100,
    shadowColor: "#cbd6ff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
  },
  button3: {
    color: Color.darkslategray_100,
  },
  button2: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  actions: {
    marginTop: 30,
  },
  form: {
    top: 251,
    left: 31,
    alignItems: "flex-end",
    position: "absolute",
  },
  hocNgNhp1: {
    color: Color.deepskyblue_100,
    fontWeight: "700",
  },
  googleChild: {
    width: 23,
    height: 23,
  },
  wrapperIcon1: {
    overflow: "hidden",
  },
  facebook: {
    marginLeft: 10,
  },
  socialMedia1: {
    justifyContent: "flex-end",
    marginTop: 20,
    flexDirection: "row",
  },
  socialMedia: {
    top: 685,
    left: 114,
    alignItems: "center",
    position: "absolute",
  },
  tipTcM1: {
    top: 815,
    left: 86,
    color: Color.colorsBlack,
    width: 257,
    height: 27,
    position: "absolute",
  },
  loginScreen: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.white,
  },
});

export default LoginScreen;
