import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ChngTrnhOTo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chngTrnhOTo1}>
      <View style={styles.content}>
        <View style={styles.thnhTu}>
          <View style={styles.content1FlexBox}>
            <Text style={[styles.niDung, styles.niDungTypo]}>KHOA CƠ KHÍ</Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA KỸ THUẬT ĐỊA CHẤT VÀ DẦU KHÍ
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA ĐIỆN - ĐIỆN TỬ
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA KỸ THUẬT GIAO THÔNG
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA KỸ THUẬT HÓA HỌC
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA MÔI TRƯỜNG VÀ TÀI NGUYÊN
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA QUẢN LÝ CÔNG NGHIỆP
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA KHOA HỌC ỨNG DỤNG
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA CÔNG NGHỆ VẬT LIỆU
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              KHOA KỸ THUẬT XÂY DỰNG
            </Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>VIỆT PHÁP</Text>
          </View>
          <View style={[styles.content2, styles.navBarBorder]}>
            <Text style={[styles.niDung, styles.niDungTypo]}>
              CHƯƠNG TRÌNH TIÊN TIẾN
            </Text>
          </View>
        </View>
        <View style={[styles.top, styles.topPosition]}>
          <Text style={styles.chngTrnhO1}>{`Chương trình đào tạo `}</Text>
          <Image
            style={styles.phngHcLThuyt1}
            contentFit="cover"
            source={require("../assets/phng-hc-l-thuyt1.png")}
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
          <Text style={[styles.thngBo, styles.niDungTypo]}>Thông báo</Text>
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
          <Text style={[styles.thngBo, styles.niDungTypo]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile4.png")}
          />
          <Text style={[styles.thngBo, styles.niDungTypo]}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  niDungTypo: {
    fontFamily: FontFamily.roboto,
    color: Color.colorsBlack,
  },
  navBarBorder: {
    borderTopWidth: 1,
    justifyContent: "center",
    borderStyle: "solid",
  },
  topPosition: {
    top: 0,
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
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  niDung: {
    letterSpacing: 0.5,
    lineHeight: 20,
    display: "flex",
    width: 359,
    height: 46,
    textAlign: "left",
    color: Color.colorsBlack,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    alignItems: "center",
  },
  content1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  content2: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  thnhTu: {
    top: 233,
    borderRadius: Border.br_mini,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    borderStyle: "solid",
    backgroundColor: Color.gray_600,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  chngTrnhO1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.gray_200,
    fontWeight: "700",
    textAlign: "left",
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
    paddingVertical: Padding.p_3xs,
  },
  content: {
    top: 106,
    left: 23,
    width: 383,
    height: 761,
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
    textAlign: "center",
    width: 54,
    color: Color.colorsBlack,
    fontSize: FontSize.size_mini,
    left: 0,
    letterSpacing: 0,
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
    backgroundColor: Color.gray_600,
    top: 0,
    overflow: "hidden",
  },
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    fontSize: FontSize.size_xl,
    color: Color.deepskyblue_300,
    marginLeft: 10,
    textAlign: "left",
    fontWeight: "500",
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
    bottom: 1,
    borderColor: "#57bfe7",
    height: 57,
    borderTopWidth: 1,
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  chngTrnhOTo1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ChngTrnhOTo;
