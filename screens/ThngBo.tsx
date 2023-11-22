import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ThngBo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.thngBo}>
      <View style={[styles.content, styles.topPosition]}>
        <View style={styles.thngBo1}>
          <View style={[styles.announcement, styles.announcementFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.announceIcon6, styles.announceIconPosition]}
                contentFit="cover"
                source={require("../assets/announce.png")}
              />
            </View>
            <Text style={styles.khunVinTrng1}>{`Khuôn viên trường `}</Text>
          </View>
          <Text style={[styles.cnTinTa1, styles.ngyTypo]}>
            Căn tin tòa H1 tạm dừng hoạt động động
          </Text>
          <Text style={[styles.ngyTrc, styles.ngyTypo]}>2 ngày trước</Text>
        </View>
        <View style={styles.thngBo1}>
          <View style={[styles.announcement1, styles.announcementFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.announceIcon7, styles.announceIconPosition]}
                contentFit="cover"
                source={require("../assets/announce.png")}
              />
            </View>
            <Text style={styles.khunVinTrng1}>Sự kiện</Text>
          </View>
          <Text style={[styles.cnTinTa1, styles.ngyTypo]}>
            eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại
          </Text>
          <Text style={[styles.ngyTrc, styles.ngyTypo]}>3 ngày trước</Text>
        </View>
        <View style={styles.thngBo1}>
          <View style={[styles.announcement, styles.announcementFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.announceIcon6, styles.announceIconPosition]}
                contentFit="cover"
                source={require("../assets/announce.png")}
              />
            </View>
            <Text style={styles.khunVinTrng1}>{`Hướng nghiệp `}</Text>
          </View>
          <Text style={[styles.cnTinTa1, styles.ngyTypo]}>
            Cơ hội trải nghiệm VNG - Công ty công nghệ hàng đầu Việt Nam
          </Text>
          <Text style={[styles.ngyTrc, styles.ngyTypo]}>7 ngày trước</Text>
        </View>
        <View style={styles.thngBo1}>
          <View style={[styles.announcement, styles.announcementFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.announceIcon6, styles.announceIconPosition]}
                contentFit="cover"
                source={require("../assets/announce.png")}
              />
            </View>
            <Text style={styles.khunVinTrng1}>{`Tài khoản `}</Text>
          </View>
          <Text
            style={[styles.cnTinTa1, styles.ngyTypo]}
          >{`Thay đổi chính sách sử dụng `}</Text>
          <Text style={[styles.ngyTrc3, styles.ngyTypo]}>10 ngày trước</Text>
        </View>
        <View style={styles.thngBo1}>
          <View style={[styles.announcement, styles.announcementFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.announceIcon6, styles.announceIconPosition]}
                contentFit="cover"
                source={require("../assets/announce.png")}
              />
            </View>
            <Text style={styles.khunVinTrng1}>{`Khuôn viên `}</Text>
          </View>
          <Text
            style={[styles.cnTinTa1, styles.ngyTypo]}
          >{`Bãi giữ xe tạm dừng hoạt động `}</Text>
          <Text style={[styles.ngyTrc3, styles.ngyTypo]}>15 ngày trước</Text>
        </View>
        <View style={styles.thngBo1}>
          <View style={[styles.announcement, styles.announcementFlexBox]}>
            <View style={styles.icon}>
              <Image
                style={[styles.announceIcon6, styles.announceIconPosition]}
                contentFit="cover"
                source={require("../assets/announce.png")}
              />
            </View>
            <Text style={styles.khunVinTrng1}>{`Khuôn viên `}</Text>
          </View>
          <Text style={[styles.cnTinTa1, styles.ngyTypo]}>
            Căn tin ra mắt món ăn món!
          </Text>
          <Text style={[styles.ngyTrc, styles.ngyTypo]}>15 ngày trước</Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.top, styles.topLayout]}
        locations={[0.03, 0.61]}
        colors={["#bae6fd", "#f0f9ff"]}
      >
        <Image
          style={[styles.image21Icon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
        <View style={[styles.statusBar, styles.barPosition]}>
          <View style={styles.statusBar1}>
            <Image
              style={styles.uiIcon}
              contentFit="cover"
              source={require("../assets/ui.png")}
            />
            <View style={styles.time}>
              <Text style={[styles.time1, styles.barPosition]}>9:27</Text>
            </View>
          </View>
        </View>
        <Text style={styles.thngBo7}>Thông báo</Text>
      </LinearGradient>
      <View style={[styles.navBar, styles.barPosition]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate("ThngBo")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.thngBo8, styles.thngBo8Typo]}>Thông báo</Text>
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
          <Text style={[styles.trangCh, styles.thngBo8Typo]}>Trang chủ</Text>
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
          <Text style={[styles.trangCh, styles.thngBo8Typo]}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: "50%",
    position: "absolute",
  },
  announcementFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  announceIconPosition: {
    height: 20,
    width: 19,
    top: "50%",
    marginLeft: -9,
    left: "50%",
    position: "absolute",
  },
  ngyTypo: {
    marginTop: 6,
    width: 353,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    letterSpacing: 0.5,
  },
  topLayout: {
    height: 210,
    width: 428,
    top: 0,
  },
  barPosition: {
    left: 0,
    position: "absolute",
  },
  thngBo8Typo: {
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
  announceIcon6: {
    marginTop: -9.5,
  },
  icon: {
    width: 30,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  khunVinTrng1: {
    marginLeft: 10,
    textAlign: "left",
    letterSpacing: 0.5,
    color: Color.darkgray_400,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_mini,
    flex: 1,
  },
  announcement: {
    height: 35,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cnTinTa1: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    color: Color.colorsBlack,
  },
  ngyTrc: {
    color: Color.darkgray_400,
    width: 353,
    fontSize: FontSize.size_mini,
  },
  thngBo1: {
    borderColor: "rgba(188, 186, 186, 0.7)",
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_xl,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  announceIcon7: {
    marginTop: -9,
  },
  announcement1: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  ngyTrc3: {
    color: Color.darkgray_200,
    fontSize: FontSize.size_mini,
    width: 353,
  },
  content: {
    marginLeft: -191,
    top: 210,
    width: 383,
    height: 643,
  },
  image21Icon: {
    height: 210,
    width: 428,
    top: 0,
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
    letterSpacing: 0,
    textAlign: "center",
    width: 54,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    left: 0,
    fontSize: FontSize.size_mini,
    top: "50%",
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
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  thngBo7: {
    marginTop: -18,
    marginLeft: -88,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.white,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  top: {
    marginLeft: -214,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_16xl,
    borderBottomLeftRadius: Border.br_16xl,
    backgroundColor: "transparent",
    left: "50%",
    position: "absolute",
  },
  vectorIcon1: {
    width: 26,
    height: 26,
  },
  thngBo8: {
    color: Color.dodgerblue,
  },
  iconlyboldhome: {
    width: 24,
    height: 24,
  },
  trangCh: {
    color: Color.colorsBlack,
  },
  home: {
    marginLeft: 8,
  },
  navBar: {
    bottom: 0,
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 57,
    width: 428,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 0,
  },
  thngBo: {
    borderRadius: Border.br_31xl,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ThngBo;
