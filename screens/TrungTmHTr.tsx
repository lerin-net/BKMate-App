import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const TrungTmHTr = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trungTmHTr2}>
      <View style={[styles.menuBar, styles.menuBarPosition]}>
        <Text style={styles.trungTmH1}>Trung Tâm Hỗ Trợ</Text>
        <View style={styles.statusBar}>
          <View style={styles.statusBar1}>
            <Image
              style={styles.uiIcon}
              contentFit="cover"
              source={require("../assets/ui1.png")}
            />
            <View style={styles.time}>
              <Text style={styles.time1}>9:27</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.profilePicture, styles.menuBarPosition]}
        onPress={() => navigation.navigate("ThngTinTiKhon")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/profile-picture.png")}
        />
      </Pressable>
      <View style={[styles.search, styles.searchLayout]}>
        <Pressable
          style={styles.menuBar1}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Text style={styles.editTypo}></Text>
        </Pressable>
        <Text style={[styles.edit, styles.editTypo]}></Text>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={styles.button1}></Text>
        </View>
        <Text style={styles.tmKim}>Tìm kiếm</Text>
      </View>
      <View style={[styles.gpBoLi3, styles.gpBoLi3Layout]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.text11, styles.textTypo3]}></Text>
        <Text style={[styles.thamQuanO1, styles.tmHiuV1Typo]}>
          Tham quan ảo 3D/360
        </Text>
      </View>
      <View style={[styles.gpBoLi4, styles.gpBoLi4Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.text12, styles.textTypo2]}></Text>
        <Text style={[styles.tmHiuV1, styles.tmHiuV1Typo]}>
          Tìm hiểu về trường
        </Text>
      </View>
      <View style={[styles.gpBoLi5, styles.gpBoLi4Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.text13, styles.textTypo3]}></Text>
        <Text style={[styles.ngnhVChuyn1, styles.tmHiuV1Typo]}>
          Ngành và chuyên ngành
        </Text>
      </View>
      <View style={[styles.trungTmHTr3, styles.gpBoLi3Layout]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.text14, styles.textTypo1]}></Text>
        <Text
          style={[styles.nghinCu1, styles.tmHiuV1Typo]}
        >{`Nghiên cứu & Hợp tác`}</Text>
      </View>
      <Pressable
        style={[styles.ciTBoMt1, styles.ciTBoMt1Position]}
        onPress={() => navigation.navigate("CiTVBoMt")}
      >
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.text15, styles.textTypo1]}></Text>
        <Text style={[styles.kTcX1, styles.mybkPosition]}>Ký túc xá</Text>
      </Pressable>
      <View style={[styles.cHiNghNghip1, styles.ciTBoMt1Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.text16, styles.textTypo2]}></Text>
        <Text style={[styles.mybk, styles.mybkLayout]}>MyBK</Text>
      </View>
      <View style={[styles.sKinLu2, styles.sKinLu2Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.bnTinSinh1, styles.phngOTo1Position]}>
          Bản tin Sinh viên
        </Text>
        <Text style={[styles.text17, styles.textTypo]}></Text>
      </View>
      <View style={[styles.thngTinTiKhon2, styles.sKinLu2Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={styles.text18}></Text>
        <Text style={[styles.phngOTo1, styles.phngOTo1Position]}>
          Phòng Đào tạo
        </Text>
      </View>
      <View style={[styles.sKinLu3, styles.sKinLu3Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={[styles.cngTcTuyn1, styles.phngOTo1Position]}>
          Công tác tuyển sinh
        </Text>
        <Text style={[styles.text19, styles.textTypo]}></Text>
      </View>
      <View style={[styles.thngTinTiKhon3, styles.sKinLu3Position]}>
        <View style={styles.itemChildShadowBox} />
        <Text style={styles.text18}></Text>
        <Text style={[styles.phngOTo1, styles.phngOTo1Position]}>
          Tài khoản
        </Text>
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
              source={require("../assets/iconlylightprofile1.png")}
            />
            <Text style={[styles.tiKhon1, styles.thngBoTypo]}>Tài khoản</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBarPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  searchLayout: {
    width: 379,
    position: "absolute",
  },
  editTypo: {
    color: Color.darkgray_300,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  gpBoLi3Layout: {
    height: 90,
    width: 165,
    top: 618,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.fontAwesome6Free,
    top: 13,
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  tmHiuV1Typo: {
    height: 20,
    fontSize: FontSize.size_base,
    display: "flex",
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorsBlack,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  gpBoLi4Position: {
    top: 734,
    height: 90,
    width: 165,
    position: "absolute",
  },
  textTypo2: {
    left: 72,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  textTypo1: {
    left: 66,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  ciTBoMt1Position: {
    top: 502,
    height: 90,
    width: 165,
    position: "absolute",
  },
  mybkPosition: {
    marginTop: 12,
    height: 20,
    display: "flex",
    fontSize: FontSize.size_base,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorsBlack,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  mybkLayout: {
    width: 140,
    marginLeft: -71.5,
  },
  sKinLu2Position: {
    top: 386,
    height: 90,
    width: 165,
    position: "absolute",
  },
  phngOTo1Position: {
    marginTop: 14,
    height: 20,
    display: "flex",
    fontSize: FontSize.size_base,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorsBlack,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    top: 22,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  sKinLu3Position: {
    top: 270,
    height: 90,
    width: 165,
    position: "absolute",
  },
  navLayout: {
    height: 57,
    backgroundColor: Color.white,
  },
  thngBoTypo: {
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  trungTmH1: {
    marginTop: 56.05,
    marginLeft: -188,
    width: 219,
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.deepskyblue_100,
    left: "50%",
    top: "50%",
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
    letterSpacing: 0,
    width: 54,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    color: Color.colorsBlack,
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
    backgroundColor: Color.gray_600,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  menuBar: {
    marginTop: -466.1,
    marginLeft: -215,
    height: 168,
    width: 428,
  },
  icon: {
    marginTop: -403,
    marginLeft: 139,
    height: "100%",
    width: "100%",
  },
  profilePicture: {
    width: 50,
    height: 52,
  },
  menuBar1: {
    left: 13,
    top: 0,
    position: "absolute",
  },
  edit: {
    top: 4,
    left: 278,
    position: "absolute",
  },
  button1: {
    color: "#7d7d7d",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "left",
  },
  button: {
    top: 105,
    borderRadius: Border.br_21xl,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: Padding.p_xl,
    width: 379,
    position: "absolute",
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
    left: 0,
  },
  tmKim: {
    top: 120,
    left: 52,
    color: "#acacac",
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
    position: "absolute",
  },
  search: {
    top: 73,
    left: 29,
    height: 155,
  },
  itemChildShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    height: 90,
    width: 165,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text11: {
    left: 70,
    top: 13,
  },
  thamQuanO1: {
    width: 121,
    marginLeft: -58.5,
    marginTop: 5,
    fontSize: FontSize.size_base,
  },
  gpBoLi3: {
    left: 235,
  },
  text12: {
    top: 13,
  },
  tmHiuV1: {
    marginTop: 2,
    marginLeft: -67.5,
    width: 137,
  },
  gpBoLi4: {
    left: 34,
  },
  text13: {
    left: 73,
    top: 13,
  },
  ngnhVChuyn1: {
    marginTop: 6,
    marginLeft: -53.5,
    width: 117,
  },
  gpBoLi5: {
    left: 235,
  },
  text14: {
    top: 13,
  },
  nghinCu1: {
    marginLeft: -62.5,
    width: 121,
    marginTop: 5,
    fontSize: FontSize.size_base,
  },
  trungTmHTr3: {
    left: 34,
  },
  text15: {
    top: 24,
  },
  kTcX1: {
    marginLeft: -63.5,
    width: 132,
  },
  ciTBoMt1: {
    left: 235,
  },
  text16: {
    top: 21,
  },
  mybk: {
    marginTop: 12,
    height: 20,
    display: "flex",
    fontSize: FontSize.size_base,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorsBlack,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.robotoFlex,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cHiNghNghip1: {
    left: 34,
  },
  bnTinSinh1: {
    width: 121,
    marginLeft: -58.5,
  },
  text17: {
    left: 70,
  },
  sKinLu2: {
    left: 237,
  },
  text18: {
    top: 11,
    left: 57,
    width: 48,
    height: 44,
    display: "flex",
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: Color.deepskyblue_100,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  phngOTo1: {
    width: 140,
    marginLeft: -71.5,
  },
  thngTinTiKhon2: {
    left: 34,
  },
  cngTcTuyn1: {
    marginLeft: -70.5,
    width: 141,
  },
  text19: {
    left: 65,
  },
  sKinLu3: {
    left: 235,
  },
  thngTinTiKhon3: {
    left: 32,
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
  tiKhon1: {
    marginTop: 4,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    color: Color.deepskyblue_100,
  },
  navBar1: {
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 428,
  },
  navBar: {
    bottom: 0,
    justifyContent: "space-between",
    left: 0,
    height: 57,
    position: "absolute",
  },
  trungTmHTr2: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default TrungTmHTr;
