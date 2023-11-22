import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ThngTinTiKhon = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.thngTinTiKhon2}>
      <View style={[styles.thngTinTiKhon3, styles.thngLayout]}>
        <View style={[styles.thngTinTiKhonChild, styles.childShadowBox]} />
        <Text style={[styles.phoneIcon, styles.phoneIconFlexBox]}></Text>
        <Text style={[styles.mailIcon, styles.mailIconTypo]}></Text>
        <Text style={[styles.text2, styles.text2Typo]}>+ 84 999999999</Text>
        <Text style={[styles.rinlerinhcmuteduvn, styles.text2Typo]}>
          rin.lerin@hcmut.edu.vn
        </Text>
      </View>
      <View style={[styles.chuynNgnhVKhoa1, styles.chuynLayout]}>
        <View style={[styles.chuynNgnhVKhoaChild, styles.chuynLayout]} />
        <Text style={[styles.phoneIcon1, styles.phoneIconFlexBox]}></Text>
        <Text style={[styles.mailIcon1, styles.mailIconTypo]}></Text>
        <Text style={[styles.khoaHcMy1, styles.khoaPosition]}>
          Khoa Học Máy Tính
        </Text>
        <Text style={[styles.phoneIcon2, styles.timeLayout]}></Text>
        <Text style={[styles.text3, styles.khoaPosition]}>2333014</Text>
        <Text style={[styles.khoaKhoaHc2, styles.khoaPosition]}>
          Khoa Khoa học và Kỹ thuật máy tính
        </Text>
      </View>
      <View style={styles.menuPosition}>
        <LinearGradient
          style={[styles.menuBarChild, styles.menuPosition]}
          locations={[0.25, 1]}
          colors={["#2da3dd", "rgba(6, 113, 211, 0)"]}
        />
        <Pressable
          style={styles.menuBar1}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Text style={[styles.text4, styles.editTypo]}></Text>
        </Pressable>
        <Text style={[styles.edit, styles.editClr]}></Text>
        <Text style={[styles.tiKhon, styles.editClr]}>Tài khoản</Text>
        <View style={[styles.statusBar, styles.barIconFlexBox]}>
          <View style={styles.statusBar1}>
            <Image
              style={styles.uiIcon}
              contentFit="cover"
              source={require("../assets/ui1.png")}
            />
            <View style={[styles.time, styles.timeLayout]}>
              <Text style={styles.time1}>9:27</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.basicInfo, styles.basicPosition]}>
        <View style={[styles.basicInfoChild, styles.basicPosition]} />
        <Image
          style={styles.profilePictureIcon}
          contentFit="cover"
          source={require("../assets/profile-picture2.png")}
        />
        <Text style={styles.lRin}>Lê Rin</Text>
        <Text style={[styles.id2333014, styles.tiKhonPosition]}>
          ID: 2333014
        </Text>
        <Text style={[styles.khoaKhoaHc3, styles.khoaPosition]}>
          Khoa: Khoa Học và Kỹ Thuật Máy Tính
        </Text>
      </View>
      <View style={[styles.navBar, styles.barPosition]}>
        <View style={[styles.navBar1, styles.barIconFlexBox]}>
          <Pressable
            style={styles.phoneIconFlexBox}
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
            style={[styles.home, styles.phoneIconFlexBox]}
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
            style={[styles.home, styles.phoneIconFlexBox]}
            onPress={() => navigation.navigate("ThngTinCNhn")}
          >
            <Image
              style={styles.iconlyboldhome}
              contentFit="cover"
              source={require("../assets/iconlylightprofile2.png")}
            />
            <Text style={[styles.tiKhon1, styles.thngBoTypo]}>Tài khoản</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thngLayout: {
    height: 98,
    width: 360,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: Color.white,
  },
  phoneIconFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  mailIconTypo: {
    left: 46,
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  text2Typo: {
    height: 22,
    width: 237,
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  chuynLayout: {
    height: 139,
    width: 360,
    position: "absolute",
  },
  khoaPosition: {
    height: 31,
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    alignItems: "center",
    position: "absolute",
  },
  timeLayout: {
    width: 56,
    position: "absolute",
  },
  menuPosition: {
    height: 291,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  editTypo: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.fontAwesome6Free,
  },
  editClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  barIconFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  basicPosition: {
    height: 220,
    marginLeft: -180,
    left: "50%",
    top: "50%",
    width: 360,
    position: "absolute",
  },
  tiKhonPosition: {
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
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
  thngTinTiKhonChild: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 98,
    width: 360,
    position: "absolute",
  },
  phoneIcon: {
    height: 48,
    display: "flex",
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    left: 24,
    width: 67,
    position: "absolute",
    top: 12,
  },
  mailIcon: {
    top: 55,
  },
  text2: {
    marginTop: -24,
    marginLeft: -98,
    height: 22,
  },
  rinlerinhcmuteduvn: {
    marginTop: 7,
    marginLeft: -95,
  },
  thngTinTiKhon3: {
    top: 407,
    left: 35,
  },
  chuynNgnhVKhoaChild: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: Color.white,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  phoneIcon1: {
    top: 33,
    height: 68,
    display: "flex",
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    left: 24,
    width: 67,
    position: "absolute",
  },
  mailIcon1: {
    top: 87,
    height: 34,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  khoaHcMy1: {
    marginTop: -18,
    width: 237,
    height: 31,
    textAlign: "left",
    fontWeight: "300",
    marginLeft: -98,
    display: "flex",
  },
  phoneIcon2: {
    left: 30,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  text3: {
    marginTop: -52.1,
    width: 237,
    height: 31,
    textAlign: "left",
    fontWeight: "300",
    marginLeft: -98,
    display: "flex",
  },
  khoaKhoaHc2: {
    marginTop: 19.6,
    width: 255,
    textAlign: "left",
    height: 31,
    fontWeight: "300",
    marginLeft: -98,
    display: "flex",
  },
  chuynNgnhVKhoa1: {
    top: 532,
    left: 35,
  },
  menuBarChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_6xl,
  },
  text4: {
    color: Color.whitesmoke_500,
    textAlign: "center",
  },
  menuBar1: {
    left: 34,
    top: 72,
    position: "absolute",
  },
  edit: {
    left: 363,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.fontAwesome6Free,
    top: 72,
  },
  tiKhon: {
    marginTop: -71.45,
    marginLeft: -119,
    width: 217,
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  uiIcon: {
    right: 15,
    width: 68,
    height: 16,
    top: 12,
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
    height: 23,
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
    left: 0,
    position: "absolute",
    top: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  basicInfoChild: {
    marginTop: -110,
    shadowColor: "rgba(164, 164, 164, 0.25)",
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Border.br_6xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: Color.white,
    height: 220,
    marginLeft: -180,
  },
  profilePictureIcon: {
    marginTop: -85,
    marginLeft: -58,
    width: 115,
    height: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lRin: {
    marginTop: 47,
    marginLeft: -64,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMono,
    width: 126,
    height: 27,
    fontWeight: "700",
    color: Color.colorsBlack,
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  id2333014: {
    marginTop: 74,
    marginLeft: -49,
    width: 96,
    height: 20,
    color: Color.colorsBlack,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoFlex,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  khoaKhoaHc3: {
    marginTop: 89,
    marginLeft: -163,
    fontWeight: "100",
    display: "none",
    width: 323,
    justifyContent: "center",
    textAlign: "center",
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
    height: 24,
    width: 24,
  },
  home: {
    marginLeft: 8,
  },
  tiKhon1: {
    color: Color.deepskyblue_100,
  },
  navBar1: {
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    flexDirection: "row",
    width: 428,
    height: 57,
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  navBar: {
    bottom: 0,
    justifyContent: "space-between",
    height: 57,
  },
  thngTinTiKhon2: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ThngTinTiKhon;
