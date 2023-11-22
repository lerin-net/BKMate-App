import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Linking, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ChiTitHngNghip = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chiTitHngNghip1}>
      <View style={[styles.content, styles.chiTitLayout1]}>
        <View style={[styles.nhSKin1, styles.nhSKin1Layout]}>
          <Image
            style={[styles.image17Icon, styles.nhSKin1Layout]}
            contentFit="cover"
            source={require("../assets/image-171.png")}
          />
        </View>
        <View style={[styles.sKin1, styles.timePosition]} />
        <View style={[styles.chiTit, styles.chiTitLayout]}>
          <Text style={styles.niDung}>
            {`VNG University Week là tuần lễ kết nối sinh viên với chuỗi hoạt động và thử thách đa dạng, trải nghiệm thực tế về sản phẩm và môi trường của VNG. 

Với đợt trở lại thứ 2 trong năm 2023, VNG Campus hứa hẹn là nơi giúp các bạn sinh viên có cái nhìn cận cảnh về tính ứng dụng của công nghệ, tiếp cận gần gũi kiến thức chuyên môn, và từ đó hình dung rõ nét về định hướng sự nghiệp tương lai của mình.

Các bạn còn chần chừ gì khi đăng ký ngay để có được những cơ hội tiếp xúc và trải nghiệm tuyệt vời sắp tới tại VNG!!

Thời gian: 07g30-12g00 ngày 27/11/2023 
Địa điểm: VNG Campus. (Sẽ tập trung ở Trường ĐH Bách khoa - ĐHQG-HCM cơ sở Dĩ An lúc 7g30).
Đối tượng tham gia: Sinh viên trường Đại học Bách khoa - ĐHQG-HCM Link đăng ký: `}
            <Text style={styles.httpsformsglegngbfumqzcrx}>
              https://forms.gle/gngbFUmqzCrXEbuA8
            </Text>
          </Text>
          <Text style={[styles.title, styles.titleTypo]}>
            CƠ HỘI TRẢI NGHIỆM VNG - CÔNG TY CÔNG NGHỆ HÀNG ĐẦU VIỆT NAM
          </Text>
        </View>
      </View>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backChild}
          contentFit="cover"
          source={require("../assets/vector-9.png")}
        />
        <Text style={[styles.back1, styles.back1Typo]}>Hướng nghiệp</Text>
      </Pressable>
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
          <Text style={[styles.thngBo, styles.titleTypo1]}>Thông báo</Text>
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
          <Text style={[styles.thngBo, styles.titleTypo1]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate("ThngTinCNhn")}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require("../assets/iconlylightprofile6.png")}
          />
          <Text style={[styles.thngBo, styles.titleTypo1]}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.barFlexBox]}>
        <View style={styles.statusBar1}>
          <Image
            style={styles.uiIcon}
            contentFit="cover"
            source={require("../assets/ui.png")}
          />
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.time1, styles.back1Typo]}>9:27</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chiTitLayout1: {
    width: 383,
    position: "absolute",
  },
  nhSKin1Layout: {
    height: 294,
    top: 0,
    width: 383,
    position: "absolute",
  },
  timePosition: {
    top: 5,
    position: "absolute",
  },
  chiTitLayout: {
    borderRadius: Border.br_3xs,
    left: 1,
    overflow: "hidden",
  },
  titleTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  back1Typo: {
    letterSpacing: 0,
    fontFamily: FontFamily.roboto,
  },
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  titleTypo1: {
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  image17Icon: {
    left: 0,
  },
  nhSKin1: {
    borderRadius: Border.br_3xs,
    left: 1,
    overflow: "hidden",
  },
  sKin1: {
    height: 38,
    left: 1,
    top: 5,
    width: 383,
    overflow: "hidden",
  },
  httpsformsglegngbfumqzcrx: {
    textDecoration: "underline",
  },
  niDung: {
    top: 62,
    left: 12,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    width: 369,
    height: 368,
    textAlign: "left",
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  title: {
    top: 15,
    left: 11,
    letterSpacing: 0.5,
    color: Color.slateblue,
    width: 359,
    height: 37,
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  chiTit: {
    top: 308,
    backgroundColor: Color.whitesmoke_100,
    height: 463,
    width: 383,
    position: "absolute",
  },
  content: {
    top: 108,
    left: 23,
    height: 771,
    backgroundColor: Color.white,
    width: 383,
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
    top: 889,
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 57,
    flexDirection: "row",
    justifyContent: "center",
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
    width: 54,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
    color: Color.colorsBlack,
    left: 0,
  },
  time: {
    left: 16,
    width: 56,
    height: 23,
  },
  statusBar1: {
    height: 42,
    width: 428,
  },
  statusBar: {
    backgroundColor: Color.gray_600,
    paddingTop: Padding.p_mini,
    justifyContent: "center",
    top: 0,
    overflow: "hidden",
  },
  chiTitHngNghip1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 946,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ChiTitHngNghip;
