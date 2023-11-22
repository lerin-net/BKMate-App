import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const KhunVin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.khunVin}>
      <LinearGradient
        style={[styles.top, styles.barPosition]}
        locations={[0.03, 0.61]}
        colors={["#bae6fd", "#f0f9ff"]}
      >
        <View style={styles.top1}>
          <View style={[styles.statusBar, styles.barPosition]}>
            <View style={styles.statusBar1}>
              <Image
                style={styles.uiIcon}
                contentFit="cover"
                source={require("../assets/ui.png")}
              />
              <View style={styles.time}>
                <Text style={[styles.time1, styles.time1Typo]}>9:27</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.back, styles.backFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.backChild}
              contentFit="cover"
              source={require("../assets/vector-92.png")}
            />
            <Text style={[styles.back1, styles.aIm1Typo]}>Trang chủ</Text>
          </Pressable>
        </View>
        <View style={[styles.khunVin1, styles.backFlexBox]}>
          <Text style={[styles.khunVin2, styles.tmKimTypo]}>Khuôn viên</Text>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <View style={styles.search}>
          <View style={[styles.inputBox, styles.navBarBorder]}>
            <Image
              style={styles.searchIcon1}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
            <Text style={styles.aIm}>Địa điểm</Text>
          </View>
          <View style={[styles.searchButton, styles.backFlexBox]}>
            <Text style={[styles.tmKim, styles.aIm1Clr]}>Tìm kiếm</Text>
            <Image
              style={styles.arrowRight1}
              contentFit="cover"
              source={require("../assets/arrow--right.png")}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.khuVc}>Khu vực</Text>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("ToHcTp")}
        >
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image9.png")}
          />
          <Text style={[styles.aIm1, styles.aIm1Clr]}>Tòa nhà học tập</Text>
        </Pressable>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("TaChcNng")}
        >
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image10.png")}
          />
          <Text style={[styles.aIm1, styles.aIm1Clr]}>Tòa nhà chức năng</Text>
        </Pressable>
      </View>
      <View style={[styles.navBar, styles.navBarBorder]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.thngBo, styles.time1Typo]}>Thông báo</Text>
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
          <Text style={[styles.thngBo, styles.time1Typo]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile5.png")}
          />
          <Text style={[styles.thngBo, styles.time1Typo]}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: 0,
    position: "absolute",
  },
  time1Typo: {
    fontFamily: FontFamily.roboto,
    color: Color.colorsBlack,
  },
  backFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  aIm1Typo: {
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
  },
  tmKimTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.montserrat,
  },
  navBarBorder: {
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  aIm1Clr: {
    color: Color.white,
    textAlign: "left",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
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
    textAlign: "center",
    width: 54,
    color: Color.colorsBlack,
    letterSpacing: 0,
    top: "50%",
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
    paddingTop: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    color: Color.deepskyblue_300,
    marginLeft: 10,
    textAlign: "left",
    letterSpacing: 0,
  },
  back: {
    top: 70,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
    width: 428,
    left: 0,
    position: "absolute",
  },
  top1: {
    height: 101,
    width: 428,
  },
  khunVin2: {
    fontSize: FontSize.size_16xl,
    width: 226,
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
    color: Color.colorsBlack,
  },
  vectorIcon2: {
    width: 113,
    height: 89,
    marginLeft: 8,
  },
  khunVin1: {
    justifyContent: "center",
  },
  searchIcon1: {
    height: "56%",
    width: "7.91%",
    top: "22.6%",
    right: "86.92%",
    bottom: "21.4%",
    left: "5.17%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aIm: {
    top: 17,
    left: 62,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    color: Color.gray_100,
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
    position: "absolute",
  },
  inputBox: {
    borderColor: "#d5dfe9",
    borderWidth: 1.1,
    width: 354,
    height: 50,
    borderRadius: Border.br_sm_7,
  },
  tmKim: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.5,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
  },
  arrowRight1: {
    width: 28,
    height: 28,
    marginLeft: 14,
    overflow: "hidden",
  },
  searchButton: {
    backgroundColor: Color.gray_300,
    width: 201,
    paddingHorizontal: 18,
    paddingVertical: 11,
    marginTop: 30,
    borderRadius: Border.br_sm_7,
    justifyContent: "center",
  },
  search: {
    height: 168,
    transform: [
      {
        rotate: "-0.09deg",
      },
    ],
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_16xl,
    borderBottomLeftRadius: Border.br_16xl,
    height: 385,
    justifyContent: "space-between",
    backgroundColor: "transparent",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  khuVc: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    color: Color.gray_200,
    fontWeight: "700",
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
  },
  imageIcon: {
    marginTop: -72,
    marginLeft: -191,
    left: "50%",
    height: 144,
    width: 383,
    top: "50%",
    position: "absolute",
  },
  aIm1: {
    top: 99,
    left: 12,
    letterSpacing: 0.6,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  cardShadowBox: {
    marginTop: 25,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    height: 144,
    width: 383,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  content: {
    top: 405,
    left: 23,
    position: "absolute",
  },
  vectorIcon3: {
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 428,
    left: 0,
    position: "absolute",
  },
  khunVin: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default KhunVin;
