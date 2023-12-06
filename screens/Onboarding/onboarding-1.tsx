import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen1 = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.onboardingScreen1}>
      <LinearGradient
        style={[styles.onboardingScreen1Child, styles.time1Position]}
        locations={[0, 1]}
        colors={["#a4f2fc", "#2ca2dc"]}
      />
      <Image
        style={styles.onboardingScreen1Item}
        contentFit="cover"
        source={require("../../assets/ellipse-2.png")}
      />
      <View style={styles.appName}>
        <Text style={[styles.appName1, styles.buttonTypo]}>BKMate</Text>
        <Text style={[styles.appName2, styles.appName2Position]}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
      </View>
      <Image
        style={styles.logobachkhoasang1Icon}
        contentFit="cover"
        source={require("../../assets/01-logobachkhoasang-1.png")}
      />
      <Text style={[styles.choMngBnContainer, styles.button1Typo]}>
        <Text style={styles.choMngBn}>{`Chào mừng bạn đến với 
`}</Text>
        <Text style={styles.bkmateNgiBnNg}>{`BKMate
Người bạn đồng hành tin cậy`}</Text>
        <Text
          style={styles.choMngBn}
        >{` trong hành trình đại học tại Đại học Bách Khoa TP.Hồ Chí Minh. Hãy cùng khám phá nhé!
`}</Text>
      </Text>
      <Image
        style={[styles.image25Icon, styles.appName2Position]}
        contentFit="cover"
        source={require("../../assets/image-25.png")}
      />
      <Pressable
        style={[styles.skipBotton, styles.nextFlexBox]}
        onPress={() => { navigation.navigate('Home') }}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Skip</Text>
      </Pressable>
      <Pressable style={[styles.next, styles.nextFlexBox]} onPress={() => { }}>
        <Text style={[styles.button1, styles.button1Typo]}>{'>'}</Text>
      </Pressable>
      <Text style={styles.text}>
        <Text style={styles.txt}>
          <Text style={styles.text1}>-</Text>
          <Text style={styles.text2}>--</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time1Position: {
    left: 0,
    position: "absolute",
  },
  buttonTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  appName2Position: {
    display: "none",
    position: "absolute",
  },
  button1Typo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
  },
  nextFlexBox: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    height: 49,
    width: 88,
    borderRadius: Border.br_3xs,
    top: 803,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  onboardingScreen1Child: {
    backgroundColor: "transparent",
    width: 428,
    top: 0,
    height: 926,
    left: 0,
  },
  onboardingScreen1Item: {
    left: 55,
    width: 496,
    height: 496,
    top: 0,
    position: "absolute",
  },
  appName1: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_16xl,
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    width: "100%",
  },
  appName2: {
    width: "94.17%",
    top: "75.44%",
    left: "2.92%",
    fontSize: FontSize.size_sm,
    color: Color.darkgray_100,
    textAlign: "center",
  },
  appName: {
    top: 384,
    left: 126,
    width: 177,
    height: 53,
    position: "absolute",
  },
  logobachkhoasang1Icon: {
    top: 196,
    left: 80,
    width: 267,
    height: 227,
    position: "absolute",
  },
  choMngBn: {
    fontWeight: "300",
    fontFamily: FontFamily.robotoFlex,
  },
  bkmateNgiBnNg: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
  },
  choMngBnContainer: {
    top: 473,
    left: 53,
    color: "#f5f5f5",
    width: 322,
    height: 198,
    position: "absolute",
  },
  image25Icon: {
    top: 130,
    left: 245,
    width: 162,
    height: 164,
  },
  button: {
    fontSize: FontSize.size_xl,
    color: "#30a4dd",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  skipBotton: {
    left: 36,
    backgroundColor: Color.white,
    flexDirection: "row",
    height: 49,
    width: 88,
    borderRadius: Border.br_3xs,
    top: 803,
  },
  button1: {
    fontFamily: FontFamily.fontAwesome6Free,
    color: "#2da3dd",
  },
  next: {
    left: 303,
    backgroundColor: "#b8e5fb",
  },
  text1: {
    fontWeight: "900",
    fontFamily: FontFamily.robotoSerifBlack,
  },
  text2: {
    fontFamily: FontFamily.robotoSerifRegular,
  },
  txt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text: {
    top: 707,
    left: 168,
    fontSize: 48,
    display: "flex",
    width: 93,
    alignItems: "center",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  onboardingScreen1: {
    borderRadius: 50,
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default OnboardingScreen1;
