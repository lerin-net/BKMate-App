import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, Padding, FontFamily } from "../GlobalStyles";

const NiDungBoLiGp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.niDungBoLiGp1}
      locations={[0, 1]}
      colors={["#a3f2fc", "#2ca2dc"]}
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
      <Text style={[styles.xinLiVContainer, styles.chnCh1Layout]}>
        <Text style={styles.xinLiV1}>{`Xin lỗi vì bạn đã có 
trải nghiệm không tốt. 
`}</Text>
        <Text
          style={styles.cIuG}
        >{`Có điều gì mà chúng tôi nên cải thiện? `}</Text>
      </Text>
      <Text style={[styles.chnCh1, styles.chnCh1Typo]}>Chọn chủ đề</Text>
      <View style={[styles.paragraphBox, styles.paragraphLayout]}>
        <View style={[styles.paragraphBoxChild, styles.paragraphLayout]} />
        <Text
          style={[styles.hyChoChng1, styles.chnCh1Typo]}
        >{`Hãy cho chúng tôi biết 
trải nghiệm và suy nghĩ của bạn...`}</Text>
      </View>
      <Pressable
        style={styles.send}
        onPress={() => navigation.navigate("CmNBoLiGp")}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Gửi</Text>
      </Pressable>
      <View style={[styles.niDung, styles.dchVLayout]}>
        <Text style={[styles.button1, styles.buttonTypo]}>Nội dung</Text>
      </View>
      <View style={[styles.tnhNng, styles.dchVLayout]}>
        <Text style={[styles.button2, styles.text1Clr]}>Tính năng</Text>
      </View>
      <View style={[styles.tnhNng1, styles.tnhFlexBox]}>
        <Text style={[styles.button2, styles.text1Clr]}>Trung tâm hỗ trợ</Text>
      </View>
      <View style={[styles.tnhNng2, styles.tnhFlexBox]}>
        <Text style={[styles.button2, styles.text1Clr]}>Khác</Text>
      </View>
      <View style={[styles.dchV, styles.dchVLayout]}>
        <Text style={[styles.button2, styles.text1Clr]}>Dịch vụ</Text>
      </View>
      <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
        <Text style={[styles.text1, styles.text1Clr]}></Text>
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
  chnCh1Layout: {
    width: 303,
    color: Color.whitesmoke_200,
    textAlign: "center",
    letterSpacing: 0,
  },
  chnCh1Typo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  paragraphLayout: {
    height: 186,
    width: 338,
    position: "absolute",
  },
  buttonTypo: {
    color: Color.gray_400,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  dchVLayout: {
    height: 37,
    width: 93,
    borderRadius: Border.br_26xl,
    top: 366,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text1Clr: {
    color: Color.white,
    textAlign: "center",
  },
  tnhFlexBox: {
    top: 410,
    height: 37,
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gray_500,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    borderStyle: "solid",
    borderColor: "rgba(28, 121, 242, 0.3)",
    borderTopWidth: 1,
    height: 57,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    width: 428,
    backgroundColor: Color.white,
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
  xinLiV1: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "700",
  },
  cIuG: {
    fontWeight: "300",
    fontFamily: FontFamily.robotoFlex,
  },
  xinLiVContainer: {
    top: 158,
    left: 57,
    fontSize: FontSize.size_5xl,
    height: 115,
    position: "absolute",
  },
  chnCh1: {
    top: 335,
    left: 59,
    height: 31,
    fontFamily: FontFamily.robotoMono,
    fontWeight: "300",
    width: 303,
    color: Color.whitesmoke_200,
    textAlign: "center",
    letterSpacing: 0,
  },
  paragraphBoxChild: {
    borderRadius: 20,
    backgroundColor: Color.gray_500,
    height: 186,
    width: 338,
    top: 0,
    left: 0,
  },
  hyChoChng1: {
    top: 17,
    left: 19,
    fontWeight: "100",
    color: "#2b2b2b",
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
  },
  paragraphBox: {
    top: 530,
    left: 46,
    height: 186,
    width: 338,
  },
  button: {
    fontFamily: FontFamily.robotoMono,
  },
  send: {
    top: 809,
    borderRadius: Border.br_3xs,
    width: 337,
    paddingHorizontal: Padding.p_xl,
    left: 46,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    position: "absolute",
  },
  button1: {
    fontFamily: FontFamily.robotoFlex,
  },
  niDung: {
    left: 166,
    backgroundColor: Color.white,
    width: 93,
    borderRadius: Border.br_26xl,
    top: 366,
  },
  button2: {
    fontWeight: "500",
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoFlex,
  },
  tnhNng: {
    left: 61,
    backgroundColor: Color.gray_500,
  },
  tnhNng1: {
    left: 97,
    width: 150,
  },
  tnhNng2: {
    left: 255,
    width: 62,
  },
  dchV: {
    left: 271,
    backgroundColor: Color.gray_500,
  },
  text1: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.fontAwesome6Free,
    color: Color.white,
    letterSpacing: 0,
  },
  pressable: {
    left: 369,
    top: 72,
    position: "absolute",
  },
  niDungBoLiGp1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default NiDungBoLiGp;
