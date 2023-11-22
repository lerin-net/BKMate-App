import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SKinLu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sKinLu1}>
      <View style={styles.events}>
        <LinearGradient
          style={[styles.eventsChild, styles.navBarPosition]}
          locations={[0, 1]}
          colors={["rgba(66, 133, 244, 0.3)", "rgba(66, 133, 244, 0)"]}
        />
        <Pressable
          style={[styles.sKin11, styles.kinLayout]}
          onPress={() => navigation.navigate("ChiTitSKin")}
        >
          <View style={[styles.sKin1Child, styles.menuBarPosition]} />
          <Image
            style={styles.eventLogoIcon4}
            contentFit="cover"
            source={require("../assets/event-logo.png")}
          />
          <Text style={styles.dec2023}>18 Dec 2023</Text>
          <Text style={styles.youthJobFair1}>Youth job fair 2023</Text>
        </Pressable>
        <Pressable
          style={[styles.sKin21, styles.kinLayout]}
          onPress={() => navigation.navigate("ChiTitSKin")}
        >
          <View style={[styles.sKin1Child, styles.menuBarPosition]} />
          <Image
            style={styles.eventLogoIcon4}
            contentFit="cover"
            source={require("../assets/event-logo.png")}
          />
          <Text style={styles.dec2023}>22 Dec 2023</Text>
          <Text style={styles.youthJobFair1}>Olympic Vật lý 2024</Text>
        </Pressable>
        <Pressable
          style={[styles.sKin31, styles.kinPosition]}
          onPress={() => navigation.navigate("ChiTitSKin")}
        >
          <View style={[styles.sKin1Child, styles.menuBarPosition]} />
          <Image
            style={styles.eventLogoIcon4}
            contentFit="cover"
            source={require("../assets/event-logo.png")}
          />
          <Text style={styles.dec2023}>26 Dec 2023</Text>
          <Text style={styles.youthJobFair1}>HCMUT football match 23-24</Text>
        </Pressable>
        <Pressable
          style={[styles.sKin41, styles.kinPosition]}
          onPress={() => navigation.navigate("ChiTitSKin")}
        >
          <View style={[styles.sKin1Child, styles.menuBarPosition]} />
          <Image
            style={styles.eventLogoIcon4}
            contentFit="cover"
            source={require("../assets/event-logo.png")}
          />
          <Text style={styles.dec2023}>28 Dec 2023</Text>
          <Text style={styles.youthJobFair1}>Sự kiện hướng nghiệp 2023</Text>
        </Pressable>
        <Text style={[styles.sKin, styles.kinTypo]}>12 Sự kiện</Text>
      </View>
      <View style={[styles.menuBar, styles.menuBarPosition]}>
        <Pressable
          style={[styles.menuBar1, styles.editPosition]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Text style={[styles.text, styles.textTypo]}></Text>
        </Pressable>
        <Text style={[styles.edit, styles.textTypo]}></Text>
        <Text style={[styles.sKinCa1, styles.time1Position]}>
          Sự kiện của tôi
        </Text>
        <View style={styles.statusBar}>
          <View style={styles.statusBar1}>
            <Image
              style={styles.uiIcon}
              contentFit="cover"
              source={require("../assets/ui1.png")}
            />
            <View style={styles.time}>
              <Text style={[styles.time1, styles.time1Position]}>9:27</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.upcomingEvents, styles.eventsFlexBox]}>
        <Text style={[styles.button, styles.buttonTypo]}>Sự kiện sắp tới</Text>
      </View>
      <View style={[styles.pastEvents, styles.eventsFlexBox]}>
        <Text style={[styles.button1, styles.buttonTypo]}>Đã diễn ra</Text>
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
  navBarPosition: {
    left: 0,
    position: "absolute",
  },
  kinLayout: {
    height: 88,
    width: 476,
  },
  menuBarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  kinPosition: {
    left: 3,
    height: 88,
    width: 476,
    position: "absolute",
  },
  kinTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  editPosition: {
    top: 73,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkgray_300,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
  },
  time1Position: {
    top: "50%",
    color: Color.colorsBlack,
    position: "absolute",
  },
  eventsFlexBox: {
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_21xl,
    top: 175,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    position: "absolute",
    overflow: "hidden",
  },
  buttonTypo: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  navLayout: {
    height: 57,
    backgroundColor: Color.white,
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
  eventsChild: {
    top: 50,
    height: 670,
    backgroundColor: "transparent",
    width: 513,
    borderRadius: Border.br_31xl,
  },
  sKin1Child: {
    backgroundColor: Color.whitesmoke_200,
    height: 88,
    width: 476,
    borderRadius: Border.br_31xl,
  },
  eventLogoIcon4: {
    top: 19,
    left: 123,
    width: 48,
    height: 48,
    position: "absolute",
  },
  dec2023: {
    top: 49,
    fontSize: FontSize.size_base,
    fontWeight: "100",
    textAlign: "left",
    left: 195,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  youthJobFair1: {
    top: 26,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    left: 195,
    position: "absolute",
  },
  sKin11: {
    top: 99,
    left: 6,
    width: 476,
    position: "absolute",
  },
  sKin21: {
    top: 217,
    left: 6,
    width: 476,
    position: "absolute",
  },
  sKin31: {
    top: 335,
  },
  sKin41: {
    top: 461,
  },
  sKin: {
    left: 115,
    width: 141,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    top: 0,
    position: "absolute",
  },
  events: {
    top: 278,
    left: -83,
    height: 720,
    width: 513,
    position: "absolute",
  },
  text: {
    textAlign: "center",
  },
  menuBar1: {
    left: 42,
  },
  edit: {
    left: 364,
    textAlign: "center",
    top: 73,
    position: "absolute",
  },
  sKinCa1: {
    marginTop: 47.55,
    marginLeft: -174,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoFlex,
    width: 219,
    fontWeight: "700",
    textAlign: "left",
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
    top: "50%",
    left: 0,
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
    height: 151,
    width: 428,
  },
  button: {
    color: Color.deepskyblue_200,
  },
  upcomingEvents: {
    left: 37,
    backgroundColor: "#cbd6ff",
    width: 212,
  },
  button1: {
    color: "#909090",
  },
  pastEvents: {
    left: 267,
    width: 190,
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
  home: {
    marginLeft: 8,
  },
  tiKhon: {
    color: Color.deepskyblue_100,
  },
  navBar1: {
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    flexDirection: "row",
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
  sKinLu1: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
  },
});

export default SKinLu;
