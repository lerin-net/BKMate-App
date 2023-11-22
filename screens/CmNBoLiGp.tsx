import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CmNBoLiGp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cmNBoLiGp1}>
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
            style={styles.vectorIcon1}
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
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/iconlylightprofile.png")}
          />
          <Text style={[styles.thngBo, styles.time1Clr]}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.barFlexBox]}>
        <View style={styles.statusBar1}>
          <Image
            style={styles.uiIcon}
            contentFit="cover"
            source={require("../assets/ui1.png")}
          />
          <View style={styles.time}>
            <Text style={[styles.time1, styles.time1FlexBox]}>9:27</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.text2, styles.textTypo]}></Text>
      <Text style={[styles.xinChnThnhContainer, styles.time1FlexBox]}>
        <Text style={styles.xinChnThnhCmNGpC}>
          <Text style={styles.xinChnThnh1}>{`Xin chân thành cảm ơn 
góp ý của bạn! 
`}</Text>
        </Text>
        <Text style={styles.gpCaBnSCXemXt}>
          <Text style={styles.xinChnThnhCmNGpC}>{`


`}</Text>
          <Text
            style={styles.gpCa}
          >{`Góp ý của bạn sẽ được xem xét bởi Bộ phận CSKH và Trung tâm hỗ trợ, và được sử dụng để cải thiện trải nghiệm của bạn trong lần tới! `}</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.text4, styles.textTypo]}></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
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
  time1FlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    letterSpacing: 0,
  },
  vectorIcon1: {
    width: 24,
    height: 24,
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    marginTop: 4,
    fontWeight: "700",
  },
  home: {
    marginLeft: 8,
  },
  navBar: {
    top: 875,
    borderStyle: "solid",
    borderColor: "rgba(26, 145, 255, 0.3)",
    borderTopWidth: 1,
    height: 57,
    flexDirection: "row",
    display: "none",
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
    width: 54,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    left: 0,
    textAlign: "center",
    letterSpacing: 0,
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
    top: 0,
    backgroundColor: Color.gray_600,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    overflow: "hidden",
  },
  text2: {
    top: 284,
    left: 182,
    fontSize: FontSize.size_45xl,
    position: "absolute",
  },
  xinChnThnh1: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "700",
  },
  xinChnThnhCmNGpC: {
    fontSize: FontSize.size_5xl,
  },
  gpCa: {
    fontSize: FontSize.size_xl,
  },
  gpCaBnSCXemXt: {
    fontWeight: "300",
    color: "#585858",
    fontFamily: FontFamily.robotoFlex,
  },
  xinChnThnhContainer: {
    top: 366,
    left: 67,
    width: 303,
    height: 289,
  },
  text4: {
    fontSize: FontSize.size_17xl,
    color: Color.dodgerblue,
  },
  pressable: {
    left: 369,
    top: 72,
    position: "absolute",
  },
  cmNBoLiGp1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default CmNBoLiGp;
