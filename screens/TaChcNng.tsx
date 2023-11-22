import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const TaChcNng = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.taChcNng1}>
      <View style={styles.content}>
        <Text style={styles.taNhChc1}>Tòa nhà chức năng</Text>
        <View style={styles.cardShadowBox}>
          <Pressable
            style={[styles.image5, styles.imagePosition]}
            onPress={() => navigation.navigate("ThngTinAIm")}
          >
            <Image
              style={[styles.icon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/image4.png")}
            />
          </Pressable>
          <Text style={[styles.aIm, styles.aImTypo]}>Thư viện</Text>
        </View>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("ThngTinAIm")}
        >
          <Image
            style={[styles.imageIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/image5.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Căn tin</Text>
        </Pressable>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("ThngTinAIm")}
        >
          <Image
            style={[styles.imageIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Nhà thể thao</Text>
        </Pressable>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("ThngTinAIm")}
        >
          <Image
            style={[styles.imageIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/image7.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Tiệm photo</Text>
        </Pressable>
        <Pressable
          style={styles.cardShadowBox}
          onPress={() => navigation.navigate("ThngTinAIm")}
        >
          <Image
            style={[styles.imageIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/image8.png")}
          />
          <Text style={[styles.aIm, styles.aImTypo]}>Nhà xe</Text>
        </Pressable>
      </View>
      <View style={styles.top}>
        <View style={[styles.statusBar, styles.barFlexBox]}>
          <View style={styles.statusBar1}>
            <Image
              style={styles.uiIcon}
              contentFit="cover"
              source={require("../assets/ui.png")}
            />
            <View style={styles.time}>
              <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
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
            source={require("../assets/vector-9.png")}
          />
          <Text style={[styles.back1, styles.aImTypo]}>Khuôn viên</Text>
        </Pressable>
      </View>
      <View style={[styles.navBar, styles.backFlexBox]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon2}
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
            source={require("../assets/iconlylightprofile5.png")}
          />
          <Text style={[styles.thngBo, styles.time1Clr]}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    top: "50%",
    position: "absolute",
  },
  iconSpaceBlock: {
    marginLeft: -191,
    marginTop: -72,
  },
  aImTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  barFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  time1Clr: {
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
  },
  backFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    width: 428,
    position: "absolute",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  taNhChc1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.gray_200,
    textAlign: "left",
    fontWeight: "700",
  },
  icon: {
    height: "100%",
    width: "100%",
    marginLeft: -191,
    marginTop: -72,
  },
  image5: {
    left: "50%",
    top: "50%",
    height: 144,
    width: 383,
  },
  aIm: {
    top: 99,
    left: 12,
    letterSpacing: 0.6,
    color: Color.white,
    position: "absolute",
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
    backgroundColor: Color.white,
  },
  imageIcon: {
    top: "50%",
    position: "absolute",
    left: "50%",
    height: 144,
    width: 383,
  },
  content: {
    top: 108,
    left: 23,
    height: 767,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
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
    textAlign: "center",
    width: 54,
    letterSpacing: 0,
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
    paddingTop: Padding.p_mini,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -214,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    color: Color.deepskyblue_300,
    marginLeft: 10,
    letterSpacing: 0,
  },
  back: {
    top: 67,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
    marginLeft: -214,
    flexDirection: "row",
    left: "50%",
  },
  top: {
    height: 98,
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
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
    justifyContent: "center",
    backgroundColor: Color.white,
    left: 0,
  },
  taChcNng1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default TaChcNng;
