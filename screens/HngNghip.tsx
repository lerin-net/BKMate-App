import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HngNghip = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hngNghip}>
      <View style={styles.content}>
        <View style={[styles.ccHotNg1, styles.ccHotNg1Position]}>
          <Pressable
            style={[styles.hotNg51, styles.hotShadowBox]}
            onPress={() => navigation.navigate("ChiTitHngNghip")}
          >
            <Image
              style={[styles.image18Icon, styles.time1Position]}
              contentFit="cover"
              source={require("../assets/image-18.png")}
            />
            <Text style={styles.titleTypo}>VNG University week</Text>
          </Pressable>
          <Pressable
            style={[styles.hotNg41, styles.hotShadowBox]}
            onPress={() => navigation.navigate("ChiTitHngNghip")}
          >
            <Image
              style={[styles.image18Icon, styles.time1Position]}
              contentFit="cover"
              source={require("../assets/image-18.png")}
            />
            <Text style={styles.titleTypo}>VNG University week</Text>
          </Pressable>
          <Pressable
            style={[styles.hotNg31, styles.hotShadowBox]}
            onPress={() => navigation.navigate("ChiTitHngNghip")}
          >
            <Image
              style={[styles.image18Icon, styles.time1Position]}
              contentFit="cover"
              source={require("../assets/image-18.png")}
            />
            <Text style={styles.titleTypo}>VNG University week</Text>
          </Pressable>
          <Pressable
            style={[styles.hotNg21, styles.hotShadowBox]}
            onPress={() => navigation.navigate("ChiTitHngNghip")}
          >
            <Image
              style={[styles.image18Icon, styles.time1Position]}
              contentFit="cover"
              source={require("../assets/image-18.png")}
            />
            <Text style={styles.titleTypo}>VNG University week</Text>
          </Pressable>
          <Pressable
            style={[styles.hotNg11, styles.hotShadowBox]}
            onPress={() => navigation.navigate("ChiTitHngNghip")}
          >
            <Image
              style={[styles.image18Icon, styles.time1Position]}
              contentFit="cover"
              source={require("../assets/image-18.png")}
            />
            <Text style={styles.titleTypo}>VNG University week</Text>
          </Pressable>
        </View>
        <Text style={[styles.hngNghip1, styles.timePosition]}>
          Hướng nghiệp
        </Text>
      </View>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backChild}
          contentFit="cover"
          source={require("../assets/vector-9.png")}
        />
        <Text style={[styles.back1, styles.back1Typo]}>Trang chủ</Text>
      </Pressable>
      <View style={[styles.navBar, styles.barFlexBox]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon2}
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
            style={styles.iconlyboldhome}
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
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile.png")}
          />
          <Text style={styles.thngBo}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.barFlexBox]}>
        <View style={styles.statusBar1}>
          <Image
            style={styles.uiIcon}
            contentFit="cover"
            source={require("../assets/ui.png")}
          />
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.time1, styles.back1Typo]}>9:27</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ccHotNg1Position: {
    left: 1,
    width: 383,
  },
  hotShadowBox: {
    height: 144,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    left: 0,
    width: 383,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  time1Position: {
    left: 0,
    position: "absolute",
  },
  timePosition: {
    top: 5,
    position: "absolute",
  },
  back1Typo: {
    letterSpacing: 0,
    fontFamily: FontFamily.roboto,
  },
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  image18Icon: {
    height: 383,
    top: 0,
    width: 383,
  },
  titleTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    letterSpacing: 0.6,
    left: 11,
    top: 113,
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  hotNg51: {
    top: 638,
  },
  hotNg41: {
    top: 477,
  },
  hotNg31: {
    top: 320,
  },
  hotNg21: {
    top: 159,
  },
  hotNg11: {
    top: 0,
  },
  ccHotNg1: {
    top: 54,
    height: 727,
    position: "absolute",
  },
  hngNghip1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.deepskyblue_100,
    height: 38,
    fontWeight: "700",
    textAlign: "left",
    left: 1,
    width: 383,
  },
  content: {
    top: 108,
    left: 23,
    height: 771,
    width: 383,
    position: "absolute",
    backgroundColor: Color.white,
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    color: Color.deepskyblue_300,
    marginLeft: 10,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
  },
  back: {
    top: 67,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
    alignItems: "center",
    flexDirection: "row",
    width: 428,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    width: 26,
    height: 26,
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    marginTop: 4,
    fontWeight: "700",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
  },
  iconlyboldhome: {
    width: 24,
    height: 24,
  },
  home: {
    marginLeft: 8,
  },
  navBar: {
    top: 889,
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 57,
    flexDirection: "row",
    justifyContent: "center",
    width: 428,
    backgroundColor: Color.white,
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
    textAlign: "center",
    width: 54,
    color: Color.colorsBlack,
    left: 0,
    position: "absolute",
  },
  time: {
    left: 16,
    width: 56,
    height: 23,
  },
  statusBar1: {
    height: 42,
    width: 428,
  },
  statusBar: {
    backgroundColor: Color.gray_600,
    paddingTop: Padding.p_mini,
    top: 0,
    overflow: "hidden",
  },
  hngNghip: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 943,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default HngNghip;
