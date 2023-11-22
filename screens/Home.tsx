import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <LinearGradient
        style={[styles.top, styles.topPosition]}
        locations={[0.03, 0.61]}
        colors={["#7bd6f1", "#f0f9ff"]}
      >
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
        <View style={styles.logo}>
          <Text style={[styles.ngHnhCng1, styles.tmKim1Typo]}>
            Đồng hành cùng thanh xuân của bạn
          </Text>
          <Text style={[styles.bkmate, styles.bkmateTypo]}>BKMate</Text>
          <Image
            style={[styles.logobachkhoasang1Icon, styles.topPosition]}
            contentFit="cover"
            source={require("../assets/01-logobachkhoasang-11.png")}
          />
        </View>
        <View style={styles.search}>
          <View style={styles.search1}>
            <View style={[styles.inputBox, styles.navBarBorder]}>
              <Image
                style={styles.searchIcon1}
                contentFit="cover"
                source={require("../assets/search1.png")}
              />
              <Text style={[styles.tmKim, styles.tmKimTypo]}>Tìm kiếm</Text>
            </View>
          </View>
          <View style={[styles.searchButton, styles.navBarFlexBox]}>
            <Text style={[styles.tmKim1, styles.bkmateTypo]}>Tìm kiếm</Text>
            <Image
              style={styles.arrowRight1}
              contentFit="cover"
              source={require("../assets/arrow--right1.png")}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={[styles.navBar, styles.navBarFlexBox]}>
        <Pressable
          style={styles.home1FlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.thngBo, styles.thngBoTypo]}>Thông báo</Text>
        </Pressable>
        <Pressable
          style={[styles.home1, styles.home1FlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlyboldhome1.png")}
          />
          <Text style={[styles.trangCh, styles.thngBoTypo]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home1, styles.home1FlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile5.png")}
          />
          <Text style={[styles.thngBo, styles.thngBoTypo]}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.content, styles.navBarFlexBox]}>
        <Pressable
          style={styles.giiThiuLayout}
          onPress={() => navigation.navigate("GiiThiu")}
        >
          <Image
            style={[styles.icon6, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Giới thiệu</Text>
        </Pressable>
        <Pressable
          style={[styles.khunVin, styles.giiThiuLayout]}
          onPress={() => navigation.navigate("KhunVin")}
        >
          <Image
            style={styles.icon7}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Khuôn viên</Text>
        </Pressable>
        <Pressable
          style={[styles.khunVin, styles.giiThiuLayout]}
          onPress={() => navigation.navigate("CuLcBSKin")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Sự kiện</Text>
        </Pressable>
        <Pressable
          style={[styles.khunVin, styles.giiThiuLayout]}
          onPress={() => navigation.navigate("HngNghip")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Hướng nghiệp</Text>
        </Pressable>
        <Pressable
          style={[styles.khunVin, styles.giiThiuLayout]}
          onPress={() => navigation.navigate("QutMQR")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Quét mã QR</Text>
        </Pressable>
        <Pressable
          style={[styles.khunVin, styles.giiThiuLayout]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon5.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Tài khoản</Text>
        </Pressable>
        <Pressable
          style={[styles.khunVin, styles.giiThiuLayout]}
          onPress={() => navigation.navigate("BoLiGp")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon6.png")}
          />
          <Text style={[styles.text7, styles.tmKimTypo]}>Báo lỗi</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tmKim1Typo: {
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_base,
  },
  bkmateTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  navBarBorder: {
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  tmKimTypo: {
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserrat,
  },
  navBarFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  thngBoTypo: {
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  home1FlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    width: 50,
    height: 50,
  },
  giiThiuLayout: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    color: Color.colorsBlack,
    left: 0,
    top: "50%",
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
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ngHnhCng1: {
    marginTop: 38.6,
    marginLeft: -160,
    lineHeight: 20,
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorsBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bkmate: {
    top: 44,
    right: 46,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppins,
    color: "#2ea4dd",
    width: 142,
    textAlign: "left",
    position: "absolute",
  },
  logobachkhoasang1Icon: {
    marginTop: -57.4,
    marginLeft: -113,
    width: 106,
    height: 96,
  },
  logo: {
    width: 340,
    height: 143,
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
  tmKim: {
    top: 17,
    left: 62,
    color: Color.gray_100,
    textAlign: "left",
    position: "absolute",
  },
  inputBox: {
    borderColor: "#d5dfe9",
    borderWidth: 1.1,
    width: 354,
    height: 50,
    borderRadius: Border.br_sm_7,
    transform: [
      {
        rotate: "-0.09deg",
      },
    ],
  },
  search1: {
    transform: [
      {
        rotate: "-0.09deg",
      },
    ],
  },
  tmKim1: {
    letterSpacing: 0.5,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_base,
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
    marginTop: -467.1,
    marginLeft: -214,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_16xl,
    borderBottomLeftRadius: Border.br_16xl,
    width: 430,
    height: 393,
    backgroundColor: "transparent",
    zIndex: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  vectorIcon1: {
    width: 26,
    height: 26,
  },
  thngBo: {
    color: Color.colorsBlack,
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
  },
  iconlyboldhome: {
    width: 24,
    height: 24,
  },
  trangCh: {
    color: Color.deepskyblue_100,
  },
  home1: {
    marginLeft: 8,
  },
  navBar: {
    bottom: 0,
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 57,
    zIndex: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
    flexDirection: "row",
    width: 428,
    justifyContent: "center",
    position: "absolute",
  },
  icon6: {
    overflow: "hidden",
  },
  text7: {
    alignSelf: "stretch",
    marginTop: 15,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorsBlack,
  },
  icon7: {
    width: 52,
    height: 50,
  },
  khunVin: {
    marginLeft: 25,
  },
  content: {
    marginTop: -9,
    marginLeft: -175,
    width: 351,
    flexWrap: "wrap",
    zIndex: 2,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Home;
