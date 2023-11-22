import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const ThngTinAIm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.thngTinAIm1}>
      <View style={[styles.content, styles.chiTitPosition]}>
        <Text style={styles.thVin}>{`Thư viện `}</Text>
        <Image
          style={[styles.phngHcLThuyt1, styles.chiTitLayout]}
          contentFit="cover"
          source={require("../assets/phng-hc-l-thuyt2.png")}
        />
      </View>
      <View style={[styles.chiTit, styles.chiTitLayout]}>
        <Text
          style={[styles.niDung, styles.titlePosition]}
        >{`Thư viện Trường ĐH Bách khoa có lịch sử lâu đời: thành lập vào năm 1977 trên cơ sở sáp nhập Thư viện Trung tâm Quốc gia kỹ thuật Phú Thọ, Thư viện Bách khoa trung cấp, và Thư viện Cao đẳng hóa học. Đây là một trong những thư viện ĐH lớn nhất quốc gia với hơn 22.371 tựa sách, 17.782 luận văn tiến sĩ/ thạc sĩ/ khóa luận, 1.704 tài liệu báo cáo khoa học, cùng hàng trăm ngàn đơn vị dữ liệu phát minh/ sáng chế, sách/ báo/ tạp chí khoa học, bài giảng điện tử…, được cập nhật thường xuyên, hỗ trợ việc học từ bậc ĐH đến Sau ĐH. Thư viện này nằm tại Nhà A2, Cơ sở 1 (268 Lý Thường Kiệt, Q.10).
Bên cạnh đó, Trường ĐH Bách khoa còn có thư viện tại Cơ sở 2 (Nhà H1, Dĩ An, Bình Dương) và Thư viện Ký túc xá Bách khoa (497 Hòa Hảo, Q.10).`}</Text>
        <Text style={[styles.title, styles.titleTypo]}>
          THƯ VIỆN TRƯỜNG ĐH BÁCH KHOA
        </Text>
      </View>
      <Pressable
        style={styles.dnNg}
        onPress={() => navigation.navigate("DnNg")}
      >
        <Text style={[styles.dnNg1, styles.dnNg1Typo]}>{`Dẫn Đường `}</Text>
      </Pressable>
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
        <Pressable
          style={[styles.back, styles.backFlexBox]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backChild}
            contentFit="cover"
            source={require("../assets/vector-9.png")}
          />
          <Text style={[styles.back1, styles.time1Typo]}>{`Địa điểm `}</Text>
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
          <Text style={[styles.thngBo, styles.dnNg1Typo]}>Thông báo</Text>
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
          <Text style={[styles.thngBo, styles.dnNg1Typo]}>Trang chủ</Text>
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
          <Text style={[styles.thngBo, styles.dnNg1Typo]}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chiTitPosition: {
    left: 23,
    position: "absolute",
  },
  chiTitLayout: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  titlePosition: {
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.roboto,
    left: "50%",
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  dnNg1Typo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
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
  thVin: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserrat,
    color: Color.gray_200,
    textAlign: "left",
    fontWeight: "700",
  },
  phngHcLThuyt1: {
    width: 391,
    height: 152,
    marginTop: 25,
  },
  content: {
    top: 106,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  niDung: {
    marginTop: -134,
    marginLeft: -186,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 371,
    height: 312,
    alignItems: "center",
    color: Color.colorsBlack,
    top: "50%",
    textAlign: "left",
  },
  title: {
    marginLeft: -180,
    top: 19,
    letterSpacing: 0.5,
    color: Color.lightskyblue_100,
    width: 359,
    height: 37,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.roboto,
    left: "50%",
    position: "absolute",
    fontWeight: "700",
  },
  chiTit: {
    top: 341,
    backgroundColor: Color.whitesmoke_100,
    width: 383,
    height: 380,
    left: 23,
    position: "absolute",
  },
  dnNg1: {
    textTransform: "uppercase",
    color: Color.white,
    width: 150,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  dnNg: {
    marginLeft: -95,
    bottom: 139,
    borderRadius: Border.br_base,
    backgroundColor: Color.deepskyblue_200,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
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
    width: 54,
    left: 0,
    position: "absolute",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorsBlack,
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
    top: 66,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
  },
  top: {
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
  },
  thngTinAIm1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ThngTinAIm;
