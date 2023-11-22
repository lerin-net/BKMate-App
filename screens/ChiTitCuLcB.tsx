import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Linking, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const ChiTitCuLcB = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chiTitCuLcB1}>
      <View style={styles.statusBar}>
        <View style={styles.statusBar1}>
          <Image
            style={[styles.uiIcon, styles.uiIconPosition]}
            contentFit="cover"
            source={require("../assets/ui.png")}
          />
          <View style={styles.time}>
            <Text style={[styles.time1, styles.time1Clr]}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.chiTit}>
          <View style={[styles.nhCuLcB2, styles.nhCuLcB2Position]}>
            <View style={[styles.nh2, styles.nh2Layout]}>
              <Image
                style={[styles.image16Icon, styles.nhCuLcB2Position]}
                contentFit="cover"
                source={require("../assets/image-16.png")}
              />
            </View>
            <View style={[styles.nh1, styles.nh2Layout]}>
              <Image
                style={[styles.image16Icon, styles.nhCuLcB2Position]}
                contentFit="cover"
                source={require("../assets/image-161.png")}
              />
            </View>
          </View>
          <View style={[styles.thngTinChiTit1, styles.nhCuLcB2Layout]}>
            <Text style={[styles.nViCeacContainer, styles.time1Clr]}>
              {`Đến với CEAC, các bạn sẽ có cơ hội:
Có thêm môi trường học tập, rèn luyện lành mạnh, bổ ích.
Gặp gỡ, giao lưu với những người bạn có cùng niềm yêu thích với ngành Kỹ thuật Máy tính.
Được hướng dẫn, hỗ trợ về kiến thức và kỹ năng từ các mentor có chuyên môn theo kế hoạch hoạt động của Câu lạc bộ.
Được tham gia tổ chức các cuộc thi, các sự kiện do câu lạc bộ triển khai.
Tham gia ngay: `}
              <Text style={styles.bitlyceacTuyenquan2023Form}>
                bit.ly/CEAC_tuyenquan2023_form
              </Text>
            </Text>
          </View>
        </View>
        <View style={[styles.cuLcB2, styles.uiIconPosition]}>
          <Text style={styles.cuLcB3}>Câu lạc bộ</Text>
          <View style={[styles.nhCuLcB3, styles.nhCuLcB3Position]}>
            <Image
              style={[styles.image15Icon, styles.nhCuLcB3Position]}
              contentFit="cover"
              source={require("../assets/image-15.png")}
            />
          </View>
        </View>
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
            source={require("../assets/iconlylightprofile.png")}
          />
          <Text style={[styles.thngBo, styles.time1Clr]}>Tài khoản</Text>
        </Pressable>
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
        <Text style={styles.back1}>Trang chủ</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  uiIconPosition: {
    top: 12,
    position: "absolute",
  },
  time1Clr: {
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
  },
  nhCuLcB2Position: {
    height: 260,
    top: 0,
    position: "absolute",
  },
  nh2Layout: {
    width: 182,
    height: 260,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  nhCuLcB2Layout: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  nhCuLcB3Position: {
    height: 213,
    left: 0,
    position: "absolute",
  },
  backFlexBox: {
    flexDirection: "row",
    width: 428,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  uiIcon: {
    right: 15,
    width: 68,
    height: 16,
  },
  time1: {
    marginTop: -5.5,
    top: "50%",
    textAlign: "center",
    width: 54,
    letterSpacing: 0,
    color: Color.colorsBlack,
    fontSize: FontSize.size_mini,
    left: 0,
    position: "absolute",
  },
  time: {
    left: 16,
    width: 56,
    height: 23,
    top: 5,
    position: "absolute",
  },
  statusBar1: {
    height: 42,
    width: 428,
  },
  statusBar: {
    backgroundColor: Color.gray_600,
    paddingTop: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  image16Icon: {
    width: 211,
    left: 0,
  },
  nh2: {
    left: 191,
  },
  nh1: {
    left: 0,
  },
  nhCuLcB2: {
    width: 381,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    left: 1,
  },
  bitlyceacTuyenquan2023Form: {
    textDecoration: "underline",
  },
  nViCeacContainer: {
    left: 4,
    letterSpacing: 0.5,
    height: 215,
    textAlign: "left",
    width: 383,
    fontSize: FontSize.size_mini,
    color: Color.colorsBlack,
    top: 5,
    position: "absolute",
  },
  thngTinChiTit1: {
    top: 277,
    backgroundColor: "rgba(184, 184, 184, 0.11)",
    height: 217,
    width: 382,
    left: 0,
    position: "absolute",
  },
  chiTit: {
    top: 287,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 494,
    width: 383,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cuLcB3: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.deepskyblue_100,
    width: 353,
    height: 38,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  image15Icon: {
    width: 382,
    top: 0,
  },
  nhCuLcB3: {
    top: 51,
    borderRadius: Border.br_mini,
    width: 383,
    overflow: "hidden",
  },
  cuLcB2: {
    height: 264,
    left: 1,
    width: 383,
    overflow: "hidden",
  },
  content: {
    top: 108,
    left: 23,
    height: 771,
    width: 383,
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
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.deepskyblue_300,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    letterSpacing: 0,
  },
  back: {
    top: 67,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
  },
  chiTitCuLcB1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 943,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ChiTitCuLcB;
