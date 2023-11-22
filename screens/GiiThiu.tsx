import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const GiiThiu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.giiThiu1}>
      <Pressable
        style={[styles.lchSVTrng1, styles.barFlexBox]}
        onPress={() => navigation.navigate("ThngTinVTrng")}
      >
        <Text
          style={[styles.thngTinV1, styles.giiThiu2FlexBox]}
        >{`Thông tin về trường `}</Text>
        <Image
          style={[styles.image26Icon, styles.iconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/image-26.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.chngTrnhOTo1, styles.barFlexBox]}
        onPress={() => navigation.navigate("ChngTrnhOTo")}
      >
        <Text
          style={[styles.thngTinV1, styles.giiThiu2FlexBox]}
        >{`Chương trình đào tạo `}</Text>
        <Image
          style={[styles.image25Icon, styles.iconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/image-25.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.top, styles.topPosition]}
        locations={[0.03, 0.61]}
        colors={["#bae6fd", "#f0f9ff"]}
      >
        <View style={[styles.statusBar, styles.topPosition]}>
          <View style={styles.statusBar1}>
            <Image
              style={styles.uiIcon}
              contentFit="cover"
              source={require("../assets/ui.png")}
            />
            <View style={styles.time}>
              <Text style={[styles.time1, styles.time1Position]}>9:27</Text>
            </View>
          </View>
        </View>
        <View style={[styles.khunVin, styles.time1Position]}>
          <Text
            style={[styles.giiThiu2, styles.giiThiu2FlexBox]}
          >{`Giới thiệu `}</Text>
          <Image
            style={styles.image28Icon}
            contentFit="cover"
            source={require("../assets/image-28.png")}
          />
        </View>
      </LinearGradient>
      <View style={[styles.navBar, styles.barFlexBox]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.thngBo, styles.time1Clr]}>Thông báo</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlyboldhome.png")}
          />
          <Text style={[styles.thngBo, styles.time1Clr]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile3.png")}
          />
          <Text style={[styles.thngBo, styles.time1Clr]}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  giiThiu2FlexBox: {
    textAlign: "left",
    color: Color.colorsBlack,
  },
  iconSpaceBlock: {
    marginLeft: 6,
    width: 65,
  },
  topPosition: {
    top: 0,
    position: "absolute",
  },
  time1Position: {
    top: "50%",
    position: "absolute",
  },
  time1Clr: {
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  thngTinV1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    width: 220,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    fontWeight: "700",
  },
  image26Icon: {
    height: 65,
  },
  lchSVTrng1: {
    top: 355,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_mini,
    height: 130,
    width: 383,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_mini,
    left: 22,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  image25Icon: {
    height: 64,
  },
  chngTrnhOTo1: {
    top: 535,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_mini,
    height: 130,
    width: 383,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: Border.br_mini,
    left: 22,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "center",
    width: 54,
    left: 0,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
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
    paddingTop: Padding.p_mini,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  giiThiu2: {
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserrat,
    width: 185,
  },
  image28Icon: {
    width: 89,
    height: 89,
    marginLeft: 8,
  },
  khunVin: {
    marginTop: -45,
    marginLeft: -140.9,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  top: {
    marginLeft: -214,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_16xl,
    borderBottomLeftRadius: Border.br_16xl,
    height: 288,
    backgroundColor: "transparent",
    width: 428,
    left: "50%",
  },
  vectorIcon1: {
    width: 26,
    height: 26,
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    marginTop: 4,
    fontWeight: "700",
    color: Color.colorsBlack,
  },
  iconlyboldhome: {
    width: 24,
    height: 24,
  },
  home: {
    marginLeft: 8,
  },
  navBar: {
    bottom: 0,
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 57,
    left: 0,
    width: 428,
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  giiThiu1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default GiiThiu;
