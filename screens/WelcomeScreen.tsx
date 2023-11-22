import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeScreen}>
      <View style={[styles.welcomeScreenChild, styles.welcomeChildPosition]} />
      <View style={[styles.welcomeScreenItem, styles.welcomeLayout]} />
      <View style={[styles.welcomeScreenInner, styles.welcomeLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.welcomeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.welcomeScreenChild1, styles.welcomeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.texts}>
        <Text style={[styles.appName, styles.appTypo]}>BKMate</Text>
        <Text style={[styles.appName1, styles.appTypo]}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={[styles.button1, styles.buttonTypo]}>Đăng nhập</Text>
        </Pressable>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>Đăng kí</Text>
        </Pressable>
      </View>
      <Image
        style={styles.logobachkhoasang1Icon}
        contentFit="cover"
        source={require("../assets/01-logobachkhoasang-1.png")}
      />
      <Text style={styles.ngHnhCng1}>{`Đồng hành cùng thanh xuân 
của bạn`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeChildPosition: {
    top: 0,
    position: "absolute",
  },
  welcomeLayout: {
    height: 372,
    width: 372,
    borderWidth: 2,
    borderColor: "#f1f4ff",
    borderStyle: "solid",
    position: "absolute",
  },
  appTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    width: 160,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  buttonTypo: {
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    textAlign: "center",
  },
  welcomeScreenChild: {
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.47)",
    width: 428,
    height: 926,
  },
  welcomeScreenItem: {
    top: 625,
    left: -154,
    transform: [
      {
        rotate: "27.09deg",
      },
    ],
  },
  welcomeScreenInner: {
    top: 684,
    left: -265,
  },
  ellipseIcon: {
    left: 57,
    width: 496,
    height: 496,
  },
  welcomeScreenChild1: {
    left: 148,
    width: 635,
    height: 635,
  },
  appName: {
    top: "0%",
    left: "0%",
    fontWeight: "600",
    color: Color.deepskyblue_300,
    fontSize: FontSize.size_16xl,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    width: "100%",
  },
  appName1: {
    width: "94.18%",
    top: "75.47%",
    left: "2.94%",
    fontSize: FontSize.size_sm,
    color: Color.colorsBlack,
    display: "none",
  },
  texts: {
    top: 339,
    left: 119,
    width: 177,
    height: 53,
    position: "absolute",
  },
  button1: {
    color: Color.white,
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
  },
  button3: {
    color: Color.gray_400,
  },
  button2: {
    marginLeft: 30,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    width: 160,
    borderRadius: Border.br_3xs,
  },
  actionButtons: {
    top: 758,
    left: 37,
    flexDirection: "row",
    position: "absolute",
  },
  logobachkhoasang1Icon: {
    top: 173,
    left: 82,
    width: 244,
    height: 208,
    position: "absolute",
  },
  ngHnhCng1: {
    top: 443,
    left: 20,
    fontFamily: FontFamily.dancingScript,
    color: "#2ca2dc",
    width: 387,
    height: 90,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_16xl,
    position: "absolute",
  },
  welcomeScreen: {
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default WelcomeScreen;
