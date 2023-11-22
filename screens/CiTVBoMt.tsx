import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const CiTVBoMt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ciTVBoMt1}>
      <View style={[styles.menuBar, styles.menuBarPosition]}>
        <Text style={styles.ciT}>Cài đặt</Text>
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
      </View>
      <Pressable
        style={[styles.profilePicture, styles.menuBarPosition]}
        onPress={() => navigation.navigate("ThngTinCNhn")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/profile-picture1.png")}
        />
      </Pressable>
      <View style={[styles.accountSetting, styles.settingPosition]}>
        <Text style={[styles.account, styles.otherTypo]}></Text>
        <Text style={[styles.tiKhon, styles.khcTypo]}>Tài khoản</Text>
        <Text style={[styles.chnhSaH1, styles.chNn1Typo]}>Chỉnh sửa hồ sơ</Text>
        <Text style={[styles.quynRingT1, styles.chNn1Typo]}>
          Quyền riêng tư
        </Text>
        <Text style={[styles.thayIMt1, styles.chNn1Typo]}>
          Thay đổi mật khẩu
        </Text>
      </View>
      <View style={[styles.notificationSetting, styles.settingPosition]}>
        <Text style={[styles.account, styles.otherTypo]}>bell</Text>
        <View style={[styles.thngBo, styles.thngPosition]}>
          <Text style={[styles.thngBo1, styles.chNn1Typo]}>Thông báo</Text>
          <Text style={styles.text3}></Text>
        </View>
        <View style={[styles.thngBo2, styles.thngPosition]}>
          <Text style={[styles.thngBo1, styles.chNn1Typo]}>Cập nhật</Text>
          <Text style={[styles.text4, styles.textTypo]}></Text>
        </View>
        <Text style={[styles.thngBo3, styles.khcTypo]}>Thông báo</Text>
      </View>
      <View style={[styles.otherSetting, styles.settingPosition]}>
        <Text style={[styles.other, styles.otherTypo]}></Text>
        <Text style={[styles.khc, styles.khcTypo]}>Khác</Text>
        <View style={[styles.darkMode, styles.menuBarPosition]}>
          <Text style={[styles.chNn1, styles.chNn1Typo]}>Chế độ nền tối</Text>
          <Text style={[styles.text5, styles.textTypo]}></Text>
        </View>
        <View style={[styles.language, styles.regionPosition]}>
          <Text style={[styles.ngnNg, styles.ngnNgPosition]}>Ngôn ngữ</Text>
          <View style={[styles.upcomingEvents, styles.upcomingLayout]}>
            <Text style={styles.button}>Tiếng Việt</Text>
          </View>
        </View>
        <View style={[styles.region, styles.regionPosition]}>
          <Text style={[styles.vngKhuVc1, styles.ngnNgPosition]}>
            Vùng/ Khu vực
          </Text>
          <View style={[styles.upcomingEvents1, styles.upcomingLayout]}>
            <Text style={styles.button}>Vietnam</Text>
          </View>
        </View>
      </View>
      <View style={[styles.navBar, styles.navLayout]}>
        <View style={[styles.navBar1, styles.navLayout]}>
          <Pressable
            style={styles.homeFlexBox}
            onPress={() => navigation.navigate("ThngBo")}
          >
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.thngBo4, styles.thngBo4Typo]}>Thông báo</Text>
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
            <Text style={[styles.thngBo4, styles.thngBo4Typo]}>Trang chủ</Text>
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
            <Text style={[styles.tiKhon1, styles.thngBo4Typo]}>Tài khoản</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  settingPosition: {
    left: 32,
    position: "absolute",
  },
  otherTypo: {
    fontFamily: FontFamily.fontAwesome6Free,
    top: 0,
    textAlign: "left",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  khcTypo: {
    height: 20,
    width: 140,
    display: "flex",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    textAlign: "left",
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  chNn1Typo: {
    width: 170,
    height: 20,
    display: "flex",
    fontSize: FontSize.size_xl,
    color: Color.colorsBlack,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  thngPosition: {
    width: 359,
    marginLeft: -179,
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.gainsboro_100,
    width: 30,
    display: "flex",
    fontFamily: FontFamily.fontAwesome6Free,
    alignItems: "center",
    top: 0,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  regionPosition: {
    height: 33,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ngnNgPosition: {
    marginTop: -9.5,
    width: 170,
    height: 20,
    display: "flex",
    fontSize: FontSize.size_xl,
    color: Color.colorsBlack,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  upcomingLayout: {
    paddingHorizontal: Padding.p_xl,
    width: 93,
    borderWidth: 1,
    borderColor: "rgba(69, 69, 69, 0.5)",
    backgroundColor: Color.whitesmoke_300,
    flexDirection: "row",
    borderStyle: "solid",
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  navLayout: {
    height: 57,
    backgroundColor: Color.white,
  },
  thngBo4Typo: {
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  ciT: {
    marginTop: 67.55,
    marginLeft: -182,
    width: 219,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.deepskyblue_100,
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
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
    width: 54,
    textAlign: "center",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  menuBar: {
    marginTop: -466.1,
    marginLeft: -215,
    height: 191,
    width: 428,
  },
  icon: {
    marginTop: -400,
    marginLeft: -183,
    height: "100%",
    width: "100%",
  },
  profilePicture: {
    width: 70,
    height: 70,
  },
  account: {
    left: 0,
  },
  tiKhon: {
    marginTop: -68,
    marginLeft: -48.5,
  },
  chnhSaH1: {
    marginTop: -26,
    marginLeft: -91.5,
    width: 170,
  },
  quynRingT1: {
    marginTop: 52,
    marginLeft: -90.5,
  },
  thayIMt1: {
    marginTop: 13,
    marginLeft: -91.5,
    width: 170,
  },
  accountSetting: {
    top: 228,
    width: 183,
    height: 144,
  },
  thngBo1: {
    marginTop: -10,
    marginLeft: -179.5,
  },
  text3: {
    width: 30,
    left: 329,
    display: "flex",
    fontFamily: FontFamily.fontAwesome6Free,
    alignItems: "center",
    top: 0,
    textAlign: "left",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  thngBo: {
    marginTop: -8.5,
    height: 24,
  },
  text4: {
    left: 329,
    color: Color.gainsboro_100,
  },
  thngBo2: {
    marginTop: 31.5,
    height: 24,
  },
  thngBo3: {
    marginTop: -51.5,
    marginLeft: -137,
  },
  notificationSetting: {
    top: 442,
    height: 111,
    width: 360,
  },
  other: {
    left: 1,
  },
  khc: {
    marginTop: -77.5,
    marginLeft: -134.5,
  },
  chNn1: {
    marginTop: -8,
    marginLeft: -180,
  },
  text5: {
    left: 330,
  },
  darkMode: {
    marginTop: -33.5,
    marginLeft: -180.5,
    height: 24,
    width: 360,
  },
  ngnNg: {
    marginLeft: -180,
  },
  button: {
    fontSize: FontSize.size_base,
    color: Color.darkgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoFlex,
  },
  upcomingEvents: {
    left: 267,
  },
  language: {
    marginTop: 4.5,
    marginLeft: -179.5,
    width: 360,
  },
  vngKhuVc1: {
    marginLeft: -180.5,
  },
  upcomingEvents1: {
    left: 268,
  },
  region: {
    marginTop: 46.5,
    marginLeft: -180.5,
    width: 361,
  },
  otherSetting: {
    top: 630,
    height: 159,
    width: 361,
  },
  vectorIcon1: {
    width: 26,
    height: 26,
  },
  thngBo4: {
    color: Color.colorsBlack,
  },
  iconlyboldhome: {
    width: 24,
    height: 24,
  },
  home: {
    marginLeft: 8,
  },
  tiKhon1: {
    color: Color.deepskyblue_100,
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
  },
  navBar1: {
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    width: 428,
  },
  navBar: {
    bottom: 0,
    justifyContent: "space-between",
    left: 0,
    position: "absolute",
  },
  ciTVBoMt1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default CiTVBoMt;
