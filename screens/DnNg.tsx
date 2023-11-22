import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const DnNg = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dnNg}>
      <View style={[styles.mapWrapper, styles.topPosition]}>
        <View style={[styles.map, styles.mapPosition1]}>
          <Image
            style={[styles.mapIcon, styles.mapPosition1]}
            contentFit="cover"
            source={require("../assets/map.png")}
          />
          <View style={[styles.ngI, styles.ngIShadowBox]}>
            <Image
              style={styles.ngIChild}
              contentFit="cover"
              source={require("../assets/vector-91.png")}
            />
            <View style={[styles.imKtThc2, styles.topPosition]}>
              <View style={styles.imKtThcInner}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-77.png")}
                />
              </View>
            </View>
            <Image
              style={styles.locationIcon}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
            <Image
              style={styles.imBtU2}
              contentFit="cover"
              source={require("../assets/im-bt-u.png")}
            />
          </View>
          <View style={[styles.chN, styles.barFlexBox]}>
            <Text style={styles.chN1}>Đích đến</Text>
          </View>
          <View style={[styles.hinTi, styles.barFlexBox]}>
            <Text style={styles.chN1}>{`Hiện tại `}</Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.thngTin, styles.backFlexBox]}
        locations={[0, 1]}
        colors={["#0d0b24", "#212040"]}
      >
        <Text style={[styles.imN, styles.imNTypo]}>Điểm đến</Text>
        <View style={[styles.thngTin1, styles.barFlexBox]}>
          <Image
            style={styles.thngLayout}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
          <Text style={[styles.khongCch1, styles.btUTypo]}>
            Khoảng cách – thời gian
          </Text>
          <View style={styles.vectorParent}>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/vector-2.png")}
            />
            <View style={[styles.mapPinParent, styles.mapPosition]}>
              <Image
                style={[styles.mapPinIcon2, styles.mapPosition]}
                contentFit="cover"
                source={require("../assets/mappin.png")}
              />
              <Text style={[styles.imBtU3, styles.backLayout]}>
                Điểm bắt đầu
              </Text>
            </View>
            <View style={[styles.mapPinGroup, styles.mapPosition]}>
              <Image
                style={[styles.mapPinIcon2, styles.mapPosition]}
                contentFit="cover"
                source={require("../assets/mappin1.png")}
              />
              <Text style={[styles.imKtThc3, styles.backLayout]}>
                Điểm kết thúc
              </Text>
            </View>
          </View>
          <Image
            style={[styles.thngTinItem, styles.thngLayout]}
            contentFit="cover"
            source={require("../assets/vector-24.png")}
          />
          <View style={[styles.buttonStartEnd, styles.barFlexBox]}>
            <Text style={[styles.btU, styles.btUTypo]}>Bắt đầu</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={[styles.navBar, styles.barFlexBox]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.thngBo, styles.imNTypo]}>Thông báo</Text>
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
          <Text style={[styles.thngBo, styles.imNTypo]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile3.png")}
          />
          <Text style={[styles.thngBo, styles.imNTypo]}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.top, styles.topPosition]}>
        <View style={[styles.statusBar, styles.barFlexBox]}>
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
          style={[styles.back, styles.backLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backChild}
            contentFit="cover"
            source={require("../assets/vector-9.png")}
          />
          <Text style={[styles.back1, styles.time1Typo]}>Quay về</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  mapPosition1: {
    left: "50%",
    position: "absolute",
  },
  ngIShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4.6,
    },
  },
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  backFlexBox: {
    alignItems: "center",
    width: 428,
    left: 0,
  },
  imNTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  btUTypo: {
    textTransform: "uppercase",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  mapPosition: {
    height: 39,
    left: 0,
    position: "absolute",
  },
  backLayout: {
    height: 31,
    position: "absolute",
  },
  thngLayout: {
    height: 1,
    width: 339,
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  time1Typo: {
    letterSpacing: 0,
    fontFamily: FontFamily.roboto,
  },
  mapIcon: {
    marginLeft: -235,
    top: 1,
    width: 642,
    height: 491,
  },
  ngIChild: {
    top: 31,
    left: 21,
    borderRadius: 422,
    width: 201,
    height: 244,
    position: "absolute",
  },
  frameChild: {
    width: 17,
    height: 17,
    borderRadius: 21,
  },
  imKtThcInner: {
    backgroundColor: "rgba(254, 185, 122, 0.4)",
    padding: 8,
    borderRadius: 21,
    flexDirection: "row",
  },
  imKtThc2: {
    borderRadius: 39,
    backgroundColor: "rgba(255, 210, 170, 0.2)",
    width: 44,
    height: 44,
    padding: 13,
    flexDirection: "row",
  },
  locationIcon: {
    top: 157,
    left: 191,
    width: 55,
    height: 56,
    position: "absolute",
  },
  imBtU2: {
    top: 264,
    left: 211,
    width: 13,
    height: 13,
    borderRadius: 21,
    position: "absolute",
  },
  ngI: {
    top: 117,
    left: 138,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 235,
    height: 277,
    elevation: 34.21,
    shadowRadius: 34.21,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4.6,
    },
    position: "absolute",
  },
  chN1: {
    letterSpacing: 0.5,
    fontFamily: FontFamily.poppins,
    color: Color.darkslategray_200,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  chN: {
    top: 164,
    left: 168,
    borderRadius: 33,
    padding: 11,
    height: 30,
    width: 90,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    elevation: 6.84,
    shadowRadius: 6.84,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    borderStyle: "solid",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4.6,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  hinTi: {
    top: 401,
    left: 286,
    borderRadius: 27,
    padding: 11,
    height: 30,
    width: 90,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    elevation: 6.84,
    shadowRadius: 6.84,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    borderStyle: "solid",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4.6,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  map: {
    marginLeft: -234,
    width: 510,
    height: 468,
    top: 0,
  },
  mapWrapper: {
    height: 1004,
    width: 428,
  },
  imN: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    color: Color.white,
    textAlign: "left",
  },
  khongCch1: {
    marginTop: 22,
    color: Color.colorsBlack,
    textAlign: "left",
  },
  groupChild: {
    height: "37.93%",
    width: "1.47%",
    top: "30.99%",
    right: "94.69%",
    bottom: "31.08%",
    left: "3.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mapPinIcon2: {
    width: 33,
    top: 0,
    overflow: "hidden",
  },
  imBtU3: {
    top: 4,
    width: 311,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 49,
    height: 31,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  mapPinParent: {
    width: 360,
    top: 0,
  },
  imKtThc3: {
    top: 6,
    width: 248,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 49,
    height: 31,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  mapPinGroup: {
    top: 67,
    width: 296,
  },
  vectorParent: {
    height: 105,
    width: 360,
    marginTop: 22,
  },
  thngTinItem: {
    marginTop: 22,
  },
  btU: {
    width: 188,
    textAlign: "center",
    color: Color.white,
  },
  buttonStartEnd: {
    borderRadius: Border.br_base,
    backgroundColor: "#50bae6",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 4,
    elevation: 4,
    height: 59,
    paddingHorizontal: 30,
    paddingVertical: Padding.p_mini,
    marginTop: 22,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4.6,
    },
    justifyContent: "center",
  },
  thngTin1: {
    borderTopLeftRadius: Border.br_16xl,
    borderTopRightRadius: Border.br_16xl,
    height: 332,
    paddingHorizontal: 40,
    paddingTop: Padding.p_xl,
    paddingBottom: 25,
    marginTop: 17,
    width: 428,
    backgroundColor: Color.white,
  },
  thngTin: {
    top: 486,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 400,
    paddingTop: 18,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4.6,
    },
    elevation: 34.21,
    shadowRadius: 34.21,
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
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
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
    top: "50%",
    width: 54,
    textAlign: "center",
    color: Color.colorsBlack,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    fontWeight: "500",
    color: Color.deepskyblue_300,
    marginLeft: 10,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  back: {
    top: 58,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
    alignItems: "center",
    width: 428,
    left: 0,
    flexDirection: "row",
  },
  top: {
    height: 89,
    width: 428,
  },
  dnNg: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default DnNg;
