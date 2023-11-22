import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const BoLiGp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.boLiGp1}
      locations={[0, 1]}
      colors={["#a5f3fc", "#2aa1dc"]}
    >
      <View style={styles.navBar}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={styles.thngBo}>Thông báo</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/iconlyboldhome.png")}
          />
          <Text style={styles.thngBo}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/iconlylightprofile.png")}
          />
          <Text style={styles.thngBo}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={styles.statusBar}>
        <View style={styles.statusBar1}>
          <Image
            style={styles.uiIcon}
            contentFit="cover"
            source={require("../assets/ui1.png")}
          />
          <View style={styles.time}>
            <Text style={styles.time1}>9:27</Text>
          </View>
        </View>
      </View>
      <Text style={styles.bnCMun1}>{`Bạn có muốn chia sẻ 
góp ý hay báo cáo lỗi không? `}</Text>
      <Pressable
        style={[styles.satisfied, styles.satisfiedLayout]}
        onPress={() => navigation.navigate("CmNBoLiGp")}
      >
        <Text style={[styles.miThN1, styles.miThN1Layout]}>Mọi thứ ổn!</Text>
        <Text style={[styles.everythingGood, styles.notSastifiedTypo]}></Text>
      </Pressable>
      <Pressable
        style={[styles.notSatisfied, styles.tiKhngHi1Layout]}
        onPress={() => navigation.navigate("NiDungBoLiGp")}
      >
        <Text style={[styles.tiKhngHi1, styles.tiKhngHi1Layout]}>
          Tôi không hài lòng lắm!
        </Text>
        <Text style={[styles.notSastified, styles.notSastifiedTypo]}></Text>
      </Pressable>
      <Pressable
        style={styles.hyHiTiContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.hyHiTiVoLcKhc, styles.miThN1Layout]}>
          Hãy hỏi tôi vào lúc khác!
        </Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
        <Text style={styles.text1}></Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  satisfiedLayout: {
    height: 125,
    top: 437,
  },
  miThN1Layout: {
    height: 50,
    textAlign: "center",
    letterSpacing: 0,
  },
  notSastifiedTypo: {
    color: Color.gainsboro_100,
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  tiKhngHi1Layout: {
    width: 195,
    position: "absolute",
  },
  vectorIcon1: {
    width: 24,
    height: 24,
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    marginTop: 4,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  home: {
    marginLeft: 8,
  },
  navBar: {
    top: 875,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "rgba(26, 145, 255, 0.3)",
    borderTopWidth: 1,
    height: 57,
    flexDirection: "row",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    width: 428,
    position: "absolute",
  },
  uiIcon: {
    top: 12,
    right: 15,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    left: 0,
    position: "absolute",
  },
  time: {
    top: 5,
    left: 16,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar1: {
    height: 42,
    width: 428,
  },
  statusBar: {
    backgroundColor: Color.gray_600,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bnCMun1: {
    top: 328,
    left: 5,
    fontSize: FontSize.size_5xl,
    width: 416,
    height: 87,
    color: Color.whitesmoke_200,
    fontFamily: FontFamily.robotoFlex,
    textAlign: "center",
    letterSpacing: 0,
    fontWeight: "700",
    position: "absolute",
  },
  miThN1: {
    fontSize: FontSize.size_xl,
    top: 75,
    height: 50,
    color: Color.whitesmoke_200,
    fontFamily: FontFamily.robotoFlex,
    left: 0,
    width: 179,
    position: "absolute",
  },
  everythingGood: {
    left: 57,
  },
  satisfied: {
    left: 26,
    width: 179,
    position: "absolute",
  },
  tiKhngHi1: {
    height: 50,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 75,
    color: Color.whitesmoke_200,
    fontFamily: FontFamily.robotoFlex,
    left: 0,
  },
  notSastified: {
    left: 60,
  },
  notSatisfied: {
    left: 217,
    height: 125,
    top: 437,
  },
  hyHiTiVoLcKhc: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.robotoMono,
    color: "#e4e4e4",
    width: 297,
  },
  hyHiTiContainer: {
    left: 74,
    top: 832,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_17xl,
    color: Color.white,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    letterSpacing: 0,
  },
  pressable: {
    left: 369,
    top: 72,
    position: "absolute",
  },
  boLiGp1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default BoLiGp;
