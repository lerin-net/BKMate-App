import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily, Padding } from "../GlobalStyles";

const ToHcTp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.toHcTp1}>
      <View style={styles.content}>
        <Text style={styles.taNhHc1}>Tòa nhà học tập</Text>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("TaChcNng")}
        >
          <Image
            style={[styles.imageIcon, styles.imagePosition]}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Tòa H1</Text>
        </Pressable>
        <View style={[styles.card1, styles.cardShadowBox]}>
          <Pressable
            style={styles.imagePosition}
            onPress={() => navigation.navigate("TaChcNng")}
          >
            <Image
              style={[styles.icon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
          </Pressable>
          <Text style={[styles.aIm, styles.aImTypo]}>Tòa H2</Text>
        </View>
        <Pressable
          style={[styles.card2, styles.cardShadowBox]}
          onPress={() => navigation.navigate("TaChcNng")}
        >
          <Image
            style={[styles.imageIcon, styles.imagePosition]}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Tòa H3</Text>
        </Pressable>
        <Pressable
          style={[styles.card3, styles.cardShadowBox]}
          onPress={() => navigation.navigate("TaChcNng")}
        >
          <Image
            style={[styles.imageIcon, styles.imagePosition]}
            contentFit="cover"
            source={require("../assets/image3.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Tòa H6</Text>
        </Pressable>
      </View>
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
            source={require("../assets/iconlylightprofile5.png")}
          />
          <Text style={styles.thngBo}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.top, styles.topPosition]}>
        <View style={[styles.statusBar, styles.topPosition]}>
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
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Image
            style={styles.backChild}
            contentFit="cover"
            source={require("../assets/vector-9.png")}
          />
          <Text style={[styles.back1, styles.time1Typo]}>Khuôn viên</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    left: "50%",
    top: "50%",
    height: 144,
    width: 383,
    position: "absolute",
  },
  aImTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  cardShadowBox: {
    marginTop: 25,
    height: 144,
    width: 383,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  iconSpaceBlock: {
    marginLeft: -191,
    marginTop: -72,
  },
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  topPosition: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  time1Typo: {
    letterSpacing: 0,
    fontFamily: FontFamily.roboto,
  },
  taNhHc1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.gray_200,
    textAlign: "left",
    fontWeight: "700",
  },
  imageIcon: {
    marginLeft: -191,
    marginTop: -72,
  },
  aIm: {
    top: 99,
    left: 12,
    letterSpacing: 0.6,
    color: Color.white,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  card1: {
    backgroundColor: Color.white,
  },
  card2: {
    backgroundColor: Color.white,
  },
  card3: {
    backgroundColor: Color.white,
  },
  content: {
    top: 108,
    left: 23,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
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
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
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
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 57,
    flexDirection: "row",
    justifyContent: "center",
    width: 428,
    left: 0,
    position: "absolute",
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
    fontSize: FontSize.size_mini,
    textAlign: "center",
    width: 54,
    color: Color.colorsBlack,
    left: 0,
    letterSpacing: 0,
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
    paddingTop: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    color: Color.deepskyblue_300,
    marginLeft: 10,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
  top: {
    height: 98,
    width: 428,
  },
  toHcTp1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ToHcTp;
