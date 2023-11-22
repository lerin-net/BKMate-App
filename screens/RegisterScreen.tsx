import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerScreen}>
      <View style={[styles.background1, styles.toTiKhon2Position]} />
      <Image
        style={[styles.objectsIcon, styles.toTiKhon2Position]}
        contentFit="cover"
        source={require("../assets/objects1.png")}
      />
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.toTiKhon2, styles.toTiKhon2Clr]}>
          Tạo tài khoản
        </Text>
        <Text style={[styles.toTiKhon3, styles.toTiKhon3Typo]}>
          Tạo tài khoản giúp bạn có những trải nghiệm đầy đủ về ứng dụng và
          trường
        </Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.buttonShadowBox}>
          <Text style={[styles.button1, styles.buttonTypo1]}>Sign in</Text>
        </View>
        <View style={styles.button2}>
          <Text style={[styles.button3, styles.buttonTypo]}>
            Create new account
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <View style={[styles.input, styles.inputSpaceBlock]}>
            <Text style={styles.placeholder}>Email</Text>
          </View>
          <View style={[styles.input1, styles.inputSpaceBlock]}>
            <Text style={styles.placeholder}>Password</Text>
          </View>
          <View style={[styles.input1, styles.inputSpaceBlock]}>
            <Text style={styles.placeholder}>Confirm Password</Text>
          </View>
        </View>
        <View style={styles.actions1}>
          <View style={styles.buttonShadowBox}>
            <Text style={[styles.button5, styles.buttonTypo1]}>Đăng kí</Text>
          </View>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={[styles.button7, styles.buttonTypo]}>
              Đã có tài khoản ?
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.socialMedia}>
        <Text style={[styles.hocTipTc1, styles.toTiKhon3Typo]}>
          Hoặc tiếp tục với
        </Text>
        <View style={styles.socialMedia1}>
          <View style={styles.googleFlexBox}>
            <Image
              style={styles.googleChild}
              contentFit="cover"
              source={require("../assets/frame-12.png")}
            />
          </View>
          <View style={[styles.facebook, styles.googleFlexBox]}>
            <Image
              style={[styles.wrapperIcon1, styles.appleChildLayout]}
              contentFit="cover"
              source={require("../assets/wrapper1.png")}
            />
          </View>
          <View style={[styles.facebook, styles.googleFlexBox]}>
            <Image
              style={styles.appleChildLayout}
              contentFit="cover"
              source={require("../assets/frame-13.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toTiKhon2Position: {
    top: 0,
    position: "absolute",
  },
  headerLayout: {
    width: 326,
    position: "absolute",
  },
  toTiKhon2Clr: {
    color: Color.deepskyblue_100,
    fontWeight: "700",
  },
  toTiKhon3Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
  },
  buttonTypo1: {
    color: Color.white,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  buttonTypo: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  inputSpaceBlock: {
    paddingBottom: Padding.p_xl,
    paddingRight: Padding.p_16xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_xl,
    backgroundColor: Color.ghostwhite,
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
  },
  googleFlexBox: {
    width: 60,
    backgroundColor: Color.whitesmoke_600,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  appleChildLayout: {
    height: 24,
    width: 24,
  },
  background1: {
    width: 428,
    left: 0,
    height: 926,
  },
  objectsIcon: {
    width: 1069,
    height: 1417,
    left: 0,
  },
  toTiKhon2: {
    left: 57,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    top: 0,
    position: "absolute",
  },
  toTiKhon3: {
    top: 51,
    color: Color.colorsBlack,
    width: 326,
    position: "absolute",
    left: 0,
  },
  header: {
    top: 97,
    left: 51,
    height: 85,
  },
  button1: {
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  buttonShadowBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    width: 357,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "#cbd6ff",
    backgroundColor: Color.lightskyblue_100,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  button3: {
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
  },
  button2: {
    marginTop: 30,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  actions: {
    top: 701,
    left: -537,
    position: "absolute",
  },
  placeholder: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.dimgray_100,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
  input: {
    borderStyle: "solid",
    borderColor: "#45b3e3",
    borderWidth: 2,
  },
  input1: {
    marginTop: 26,
  },
  button5: {
    fontFamily: FontFamily.montserrat,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.size_xl,
  },
  button7: {
    fontFamily: FontFamily.montserrat,
  },
  actions1: {
    marginTop: 53,
  },
  form: {
    top: 243,
    left: 31,
    position: "absolute",
  },
  hocTipTc1: {
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
    top: 736,
    left: 114,
    alignItems: "center",
    position: "absolute",
  },
  registerScreen: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.white,
  },
});

export default RegisterScreen;
