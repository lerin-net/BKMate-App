import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ThngTinVTrng = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.thngTinVTrng1}>
      <View style={styles.content}>
        <View style={[styles.thnhTu, styles.lchSBorder]}>
          <Text style={[styles.thnhTu3, styles.titleTypo]}>THÀNH TỰU</Text>
          <View style={styles.content1FlexBox}>
            <View style={styles.thnhLayout}>
              <Text style={[styles.niDung, styles.dungTypo]}>
                ĐHQG - HCM đạt vị trí 179 trên bảng xếp hạng Quacquarelli Symnds
                (QS) ASIA năm 2022
              </Text>
              <Image
                style={styles.asiaUniIcon}
                contentFit="cover"
                source={require("../assets/asia-uni.png")}
              />
            </View>
            <View style={[styles.thnhTu21, styles.thnhLayout]}>
              <Text style={[styles.niDung, styles.dungTypo]}>
                ĐHQG-HCM thuộc top 401-500 trên bảng xếp hạng Times Higher
                Education (THE) năm 2022
              </Text>
              <Image
                style={styles.asiaUniIcon}
                contentFit="cover"
                source={require("../assets/asia-uni1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.lchS, styles.lchSBorder]}>
          <View style={styles.lchS1}>
            <Text style={[styles.title, styles.topPosition]}>LỊCH SỬ</Text>
          </View>
          <Text style={[styles.niDung2, styles.dungTypo]}>
            Trường Đại học Bách khoa - ĐHQG-HCM là một trường thành viên của hệ
            thống Đại học Quốc gia TP. Hồ Chí Minh. Trường được thành lập vào
            năm 1957 với tiền thân là Trung tâm Quốc gia Kỹ thuật. Hiện nay,
            Trường ĐH Bách Khoa là trung tâm đào tạo, nghiên cứu khoa học và
            chuyển giao công nghệ lớn nhất các tỉnh phía Nam và là trường đại
            học kỹ thuật quan trọng của cả nước.
          </Text>
        </View>
        <View style={[styles.top, styles.topPosition]}>
          <Text style={styles.thngTinV1}>{`Thông tin về trường `}</Text>
          <Image
            style={styles.phngHcLThuyt1}
            contentFit="cover"
            source={require("../assets/phng-hc-l-thuyt.png")}
          />
        </View>
      </View>
      <View style={[styles.top1, styles.topPosition]}>
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
        <Pressable
          style={[styles.back, styles.backFlexBox]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backChild}
            contentFit="cover"
            source={require("../assets/vector-9.png")}
          />
          <Text style={[styles.back1, styles.time1Typo]}>{`Giới thiệu `}</Text>
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
            source={require("../assets/iconlylightprofile3.png")}
          />
          <Text style={styles.thngBo}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lchSBorder: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 1,
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    width: 359,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.6,
    height: 46,
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  dungTypo: {
    lineHeight: 20,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    width: 359,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
  },
  thnhLayout: {
    height: 145,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: 359,
    borderStyle: "solid",
  },
  topPosition: {
    left: 0,
    position: "absolute",
  },
  time1Typo: {
    letterSpacing: 0,
    fontFamily: FontFamily.roboto,
  },
  backFlexBox: {
    flexDirection: "row",
    width: 428,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  thnhTu3: {
    height: 46,
  },
  niDung: {
    left: 0,
    position: "absolute",
    top: 0,
    height: 46,
  },
  asiaUniIcon: {
    marginLeft: -163.5,
    top: 46,
    left: "50%",
    width: 328,
    height: 90,
    position: "absolute",
  },
  thnhTu21: {
    marginTop: 25,
  },
  content1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  thnhTu: {
    top: 454,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.gray_600,
  },
  title: {
    top: 0,
    left: 0,
    height: 46,
    width: 359,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.6,
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  lchS1: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 46,
    width: 359,
    borderStyle: "solid",
  },
  niDung2: {
    height: 147,
  },
  lchS: {
    top: 235,
    paddingVertical: 2,
    backgroundColor: Color.white,
  },
  thngTinV1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.gray_200,
    textAlign: "left",
    fontWeight: "700",
  },
  phngHcLThuyt1: {
    borderRadius: Border.br_3xs,
    width: 391,
    height: 152,
    marginTop: 25,
    overflow: "hidden",
  },
  top: {
    paddingHorizontal: 0,
    top: 0,
    left: 0,
    paddingVertical: Padding.p_3xs,
  },
  content: {
    top: 106,
    left: 23,
    width: 383,
    height: 769,
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
    top: "50%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    width: 54,
    left: 0,
    position: "absolute",
    color: Color.colorsBlack,
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
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.gray_600,
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
    textAlign: "left",
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
  },
  back: {
    top: 66,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
  },
  top1: {
    height: 97,
    width: 428,
    top: 0,
    left: 0,
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
    borderColor: "#57bfe7",
    height: 57,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  thngTinVTrng1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ThngTinVTrng;
