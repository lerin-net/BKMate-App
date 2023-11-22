import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ThngTinCNhn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.thngTinCNhn1}>
      <Pressable
        style={[styles.gpBoLi2, styles.gpBoLi2Layout]}
        onPress={() => navigation.navigate("BoLiGp")}
      >
        <View style={[styles.gpBoLiChild, styles.childShadowBox]} />
        <Text style={[styles.text7, styles.textTypo2]}></Text>
        <Text style={[styles.gp1, styles.gp1Typo]}>{`Góp ý & báo lỗi`}</Text>
      </Pressable>
      <Pressable
        style={[styles.gpBoLi3, styles.gpBoLi2Layout]}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <View style={[styles.gpBoLiItem, styles.childShadowBox]} />
        <Text style={[styles.text8, styles.textTypo2]}></Text>
        <Text style={[styles.gp1, styles.gp1Typo]}>Đăng xuất</Text>
      </Pressable>
      <Pressable
        style={[styles.trungTmHTr1, styles.gpBoLi2Layout]}
        onPress={() => navigation.navigate("TrungTmHTr")}
      >
        <View style={[styles.trungTmHTrChild, styles.childShadowBox]} />
        <Text style={[styles.text9, styles.textTypo2]}></Text>
        <Text style={[styles.trungTmH1, styles.gp1Typo]}>Trung tâm hỗ trợ</Text>
      </Pressable>
      <Pressable
        style={[styles.ciTBoMt1, styles.ciTBoMt1Position]}
        onPress={() => navigation.navigate("CiTVBoMt")}
      >
        <View style={[styles.ciTBoMtChild, styles.childShadowBox]} />
        <Text style={[styles.text10, styles.textTypo1]}></Text>
        <Text style={[styles.ciT1, styles.gp1Typo]}>{`Cài đặt & bảo mật`}</Text>
      </Pressable>
      <Pressable
        style={[styles.cHiNghNghip1, styles.ciTBoMt1Position]}
        onPress={() => navigation.navigate("HngNghip")}
      >
        <View style={[styles.cHiNghNghipChild, styles.childShadowBox]} />
        <Text style={[styles.text11, styles.textTypo1]}></Text>
        <Text style={[styles.cHiNgh1, styles.cHiNgh1Layout]}>
          Cơ hội nghề nghiệp
        </Text>
      </Pressable>
      <Pressable
        style={[styles.sKinLu1, styles.sKinLu1Position]}
        onPress={() => navigation.navigate("SKinLu")}
      >
        <View style={[styles.sKinLuChild, styles.childShadowBox]} />
        <Text style={[styles.sKin1, styles.sKin1Position]}>Sự kiện đã lưu</Text>
        <Text style={[styles.text12, styles.textTypo2]}></Text>
      </Pressable>
      <Pressable
        style={[styles.thngTinTiKhon1, styles.sKinLu1Position]}
        onPress={() => navigation.navigate("ThngTinTiKhon")}
      >
        <View style={[styles.thngTinTiKhonChild, styles.childShadowBox]} />
        <Text style={[styles.text13, styles.barFlexBox]}></Text>
        <Text style={[styles.thngTinTi1, styles.sKin1Position]}>
          Thông tin tài khoản
        </Text>
      </Pressable>
      <View style={styles.menuPosition}>
        <LinearGradient
          style={[styles.menuBarChild, styles.menuPosition]}
          locations={[0.24, 1]}
          colors={["#2ca3dc", "rgba(6, 113, 211, 0)"]}
        />
        <Pressable
          style={[styles.menuBar1, styles.notifiPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.text14, styles.textTypo]}></Text>
        </Pressable>
        <Pressable
          style={[styles.notifi, styles.notifiPosition]}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Text style={[styles.text15, styles.textTypo]}></Text>
        </Pressable>
        <View style={[styles.statusBar, styles.barFlexBox]}>
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
      </View>
      <Pressable
        style={[styles.basicInfo, styles.basicPosition]}
        onPress={() => navigation.navigate("ThngTinTiKhon")}
      >
        <View style={[styles.basicInfoChild, styles.basicPosition]} />
        <Image
          style={styles.basicInfoItem}
          contentFit="cover"
          source={require("../assets/profile-picture2.png")}
        />
        <Text style={styles.lRin}>Lê Rin</Text>
        <Text style={[styles.id2333014, styles.gp1Typo]}>ID: 2333014</Text>
        <Text style={[styles.khoaKhoaHc1, styles.barFlexBox]}>
          Khoa: Khoa Học và Kỹ Thuật Máy Tính
        </Text>
      </Pressable>
      <View style={[styles.navBar, styles.barPosition]}>
        <View style={[styles.navBar1, styles.barFlexBox]}>
          <Pressable
            style={styles.homeFlexBox}
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
            style={[styles.home, styles.homeFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.iconlyboldhome}
              contentFit="cover"
              source={require("../assets/iconlyboldhome.png")}
            />
            <Text style={[styles.thngBo, styles.thngBoTypo]}>Trang chủ</Text>
          </Pressable>
          <Pressable
            style={[styles.home, styles.homeFlexBox]}
            onPress={() => navigation.navigate("ThngTinCNhn")}
          >
            <Image
              style={styles.iconlyboldhome}
              contentFit="cover"
              source={require("../assets/iconlylightprofile2.png")}
            />
            <Text style={[styles.tiKhon, styles.thngBoTypo]}>Tài khoản</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gpBoLi2Layout: {
    height: 90,
    width: 165,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  textTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    color: Color.deepskyblue_100,
    position: "absolute",
  },
  gp1Typo: {
    height: 20,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  ciTBoMt1Position: {
    top: 520,
    height: 90,
    width: 165,
    position: "absolute",
  },
  textTypo1: {
    left: 69,
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  cHiNgh1Layout: {
    width: 140,
    marginLeft: -71.5,
  },
  sKinLu1Position: {
    top: 404,
    height: 90,
    width: 165,
    position: "absolute",
  },
  sKin1Position: {
    marginTop: 14,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuPosition: {
    height: 291,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notifiPosition: {
    top: 70,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.fontAwesome6Free,
  },
  basicPosition: {
    height: 221,
    width: 360,
    marginLeft: -180,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  barPosition: {
    left: 0,
    position: "absolute",
  },
  thngBoTypo: {
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  gpBoLiChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  text7: {
    left: 70,
    textAlign: "center",
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    top: 26,
  },
  gp1: {
    width: 121,
    marginLeft: -58.5,
    marginTop: 12,
    fontWeight: "300",
  },
  gpBoLi2: {
    left: 235,
    top: 636,
    height: 90,
    width: 165,
  },
  gpBoLiItem: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  text8: {
    left: 73,
    top: 26,
  },
  gpBoLi3: {
    top: 747,
    left: 35,
  },
  trungTmHTrChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  text9: {
    left: 72,
    top: 24,
  },
  trungTmH1: {
    marginLeft: -62.5,
    width: 121,
    marginTop: 12,
    fontWeight: "300",
  },
  trungTmHTr1: {
    left: 34,
    top: 636,
    height: 90,
    width: 165,
  },
  ciTBoMtChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  text10: {
    top: 24,
  },
  ciT1: {
    marginLeft: -63.5,
    width: 132,
    marginTop: 12,
    fontWeight: "300",
  },
  ciTBoMt1: {
    left: 235,
  },
  cHiNghNghipChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  text11: {
    top: 21,
  },
  cHiNgh1: {
    height: 20,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
    marginTop: 12,
  },
  cHiNghNghip1: {
    left: 34,
  },
  sKinLuChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  sKin1: {
    width: 121,
    marginLeft: -58.5,
  },
  text12: {
    top: 22,
    left: 70,
    textAlign: "center",
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
  },
  sKinLu1: {
    left: 237,
  },
  thngTinTiKhonChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 90,
    width: 165,
    position: "absolute",
  },
  text13: {
    top: 11,
    left: 57,
    width: 48,
    height: 44,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  thngTinTi1: {
    width: 140,
    marginLeft: -71.5,
  },
  thngTinTiKhon1: {
    left: 34,
  },
  menuBarChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
  },
  text14: {
    color: Color.whitesmoke_500,
  },
  menuBar1: {
    left: 36,
  },
  text15: {
    color: Color.white,
  },
  notifi: {
    left: 368,
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
    fontFamily: FontFamily.roboto,
    color: Color.colorsBlack,
    top: "50%",
    textAlign: "center",
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
    left: 0,
    position: "absolute",
    top: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  basicInfoChild: {
    marginTop: -110.5,
    shadowColor: "rgba(164, 164, 164, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Border.br_6xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    backgroundColor: Color.white,
    height: 221,
    width: 360,
    marginLeft: -180,
  },
  basicInfoItem: {
    marginTop: -85.5,
    marginLeft: -58,
    width: 115,
    height: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lRin: {
    marginTop: 46.5,
    marginLeft: -64,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMono,
    width: 126,
    height: 27,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorsBlack,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  id2333014: {
    marginTop: 73.5,
    marginLeft: -49,
    width: 96,
  },
  khoaKhoaHc1: {
    marginTop: 88.5,
    marginLeft: -163,
    fontWeight: "100",
    display: "none",
    width: 323,
    height: 31,
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.size_base,
    alignItems: "center",
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  basicInfo: {
    marginTop: -330,
  },
  vectorIcon1: {
    width: 26,
    height: 26,
  },
  thngBo: {
    color: Color.colorsBlack,
  },
  iconlyboldhome: {
    width: 24,
    height: 24,
  },
  home: {
    marginLeft: 8,
  },
  tiKhon: {
    color: Color.deepskyblue_100,
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
  },
  navBar1: {
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 57,
    width: 428,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  navBar: {
    bottom: 0,
    justifyContent: "space-between",
    height: 57,
  },
  thngTinCNhn1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ThngTinCNhn;
