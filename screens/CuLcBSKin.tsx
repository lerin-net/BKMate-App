import * as React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CuLcBSKin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cuLcBSKin1}>
      <View style={styles.content}>
        <View style={[styles.sKin7, styles.sKin7Position]}>
          <View style={[styles.frameSKin1, styles.frameSKin1Position]}>
            <View style={[styles.sKin61, styles.kinLayout1]}>
              <View style={styles.tmTtSKin16}>
                <Text style={[styles.ecseCup, styles.ecseTypo]}>eCSE CUP</Text>
                <Image
                  style={[styles.tmTtSKin1Child, styles.frameSKin1Position]}
                  contentFit="cover"
                  source={require("../assets/line-4.png")}
                />
                <Text
                  style={[styles.bcNhyKhng6, styles.back1Typo1]}
                >{`Bước nhảy không gian cùng AOV
`}</Text>
                <Text style={[styles.thiGianNg6, styles.bcNhyKhng6Typo]}>
                  Thời gian đăng ký: 12/11 - 24/11
                </Text>
              </View>
              <View style={[styles.nhSKin16, styles.kinLayout1]}>
                <ImageBackground
                  style={[styles.image14Icon, styles.kinLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image14.png")}
                />
              </View>
            </View>
            <Pressable
              style={[styles.sKin51, styles.kinLayout]}
              onPress={() => navigation.navigate("ChiTitSKin")}
            >
              <View style={styles.tmTtSKin16}>
                <Text style={[styles.ecseCup, styles.ecseTypo]}>eCSE CUP</Text>
                <Image
                  style={[styles.tmTtSKin1Child, styles.frameSKin1Position]}
                  contentFit="cover"
                  source={require("../assets/line-41.png")}
                />
                <Text
                  style={[styles.bcNhyKhng6, styles.back1Typo1]}
                >{`Bước nhảy không gian cùng AOV
`}</Text>
                <Text style={[styles.thiGianNg6, styles.bcNhyKhng6Typo]}>
                  Thời gian đăng ký: 12/11 - 24/11
                </Text>
              </View>
              <View style={[styles.nhSKin16, styles.kinLayout1]}>
                <ImageBackground
                  style={[styles.image14Icon, styles.kinLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image141.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={[styles.sKin41, styles.kinLayout]}
              onPress={() => navigation.navigate("ChiTitSKin")}
            >
              <View style={styles.tmTtSKin16}>
                <Text style={[styles.ecseCup, styles.ecseTypo]}>eCSE CUP</Text>
                <Image
                  style={[styles.tmTtSKin1Child, styles.frameSKin1Position]}
                  contentFit="cover"
                  source={require("../assets/line-4.png")}
                />
                <Text
                  style={[styles.bcNhyKhng6, styles.back1Typo1]}
                >{`Bước nhảy không gian cùng AOV
`}</Text>
                <Text style={[styles.thiGianNg6, styles.bcNhyKhng6Typo]}>
                  Thời gian đăng ký: 12/11 - 24/11
                </Text>
              </View>
              <View style={[styles.nhSKin16, styles.kinLayout1]}>
                <ImageBackground
                  style={[styles.image14Icon, styles.kinLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image14.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={[styles.sKin31, styles.kinLayout]}
              onPress={() => navigation.navigate("ChiTitSKin")}
            >
              <View style={styles.tmTtSKin16}>
                <Text style={[styles.ecseCup, styles.ecseTypo]}>eCSE CUP</Text>
                <Image
                  style={[styles.tmTtSKin1Child, styles.frameSKin1Position]}
                  contentFit="cover"
                  source={require("../assets/line-4.png")}
                />
                <Text
                  style={[styles.bcNhyKhng6, styles.back1Typo1]}
                >{`Bước nhảy không gian cùng AOV
`}</Text>
                <Text style={[styles.thiGianNg6, styles.bcNhyKhng6Typo]}>
                  Thời gian đăng ký: 12/11 - 24/11
                </Text>
              </View>
              <View style={[styles.nhSKin16, styles.kinLayout1]}>
                <ImageBackground
                  style={[styles.image14Icon, styles.kinLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image14.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={[styles.sKin21, styles.kinLayout]}
              onPress={() => navigation.navigate("ChiTitSKin")}
            >
              <View style={styles.tmTtSKin16}>
                <Text style={[styles.ecseCup, styles.ecseTypo]}>eCSE CUP</Text>
                <Image
                  style={[styles.tmTtSKin1Child, styles.frameSKin1Position]}
                  contentFit="cover"
                  source={require("../assets/line-4.png")}
                />
                <Text
                  style={[styles.bcNhyKhng6, styles.back1Typo1]}
                >{`Bước nhảy không gian cùng AOV
`}</Text>
                <Text style={[styles.thiGianNg6, styles.bcNhyKhng6Typo]}>
                  Thời gian đăng ký: 12/11 - 24/11
                </Text>
              </View>
              <View style={[styles.nhSKin16, styles.kinLayout1]}>
                <ImageBackground
                  style={[styles.image14Icon, styles.kinLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image14.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={[styles.sKin11, styles.kinLayout]}
              onPress={() => navigation.navigate("ChiTitSKin")}
            >
              <View style={styles.tmTtSKin16}>
                <Text style={[styles.ecseCup5, styles.ecseTypo]}>eCSE CUP</Text>
                <Image
                  style={[styles.tmTtSKin1Child, styles.frameSKin1Position]}
                  contentFit="cover"
                  source={require("../assets/line-4.png")}
                />
                <Text
                  style={[styles.bcNhyKhng6, styles.back1Typo1]}
                >{`Bước nhảy không gian cùng AOV
`}</Text>
                <Text style={[styles.thiGianNg6, styles.bcNhyKhng6Typo]}>
                  Thời gian đăng ký: 12/11 - 24/11
                </Text>
              </View>
              <View style={[styles.nhSKin16, styles.kinLayout1]}>
                <ImageBackground
                  style={[styles.image14Icon, styles.kinLayout1]}
                  resizeMode="cover"
                  source={require("../assets/image14.png")}
                />
              </View>
            </Pressable>
          </View>
          <Text style={[styles.sKin8, styles.sKin8Typo]}>Sự kiện</Text>
        </View>
        <View style={[styles.cuLcB6, styles.timePosition]}>
          <View style={styles.ccCuLcB1}>
            <View style={[styles.cuLcB41, styles.cuLcB41Layout]}>
              <ImageBackground
                style={[styles.image12Icon, styles.cuLcB41Layout]}
                resizeMode="cover"
                source={require("../assets/image12.png")}
              />
              <Text style={[styles.bigDataClub2, styles.clubTypo]}>
                Big Data Club
              </Text>
            </View>
            <Pressable
              style={[styles.cuLcB31, styles.cuLcB41Layout]}
              onPress={() => navigation.navigate("ChiTitCuLcB")}
            >
              <ImageBackground
                style={[styles.image12Icon, styles.cuLcB41Layout]}
                resizeMode="cover"
                source={require("../assets/image13.png")}
              />
              <Text style={[styles.atttClub, styles.clubTypo]}>GDSC</Text>
            </Pressable>
            <Pressable
              style={[styles.cuLcB21, styles.cuLcB41Layout]}
              onPress={() => navigation.navigate("ChiTitCuLcB")}
            >
              <ImageBackground
                style={[styles.image12Icon, styles.cuLcB41Layout]}
                resizeMode="cover"
                source={require("../assets/image12.png")}
              />
              <Text style={[styles.bigDataClub2, styles.clubTypo]}>
                Big Data Club
              </Text>
            </Pressable>
            <Pressable
              style={[styles.cuLcB11, styles.cuLcB41Layout]}
              onPress={() => navigation.navigate("ChiTitCuLcB")}
            >
              <ImageBackground
                style={[styles.image12Icon, styles.cuLcB41Layout]}
                resizeMode="cover"
                source={require("../assets/image11.png")}
              />
              <Text style={[styles.ceac, styles.clubTypo]}>CEAC</Text>
            </Pressable>
          </View>
          <Text style={[styles.cuLcB7, styles.sKin8Typo]}>Câu lạc bộ</Text>
        </View>
      </View>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backChild}
          contentFit="cover"
          source={require("../assets/vector-9.png")}
        />
        <Text style={[styles.back1, styles.back1Typo]}>Trang chủ</Text>
      </Pressable>
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
            source={require("../assets/iconlylightprofile.png")}
          />
          <Text style={styles.thngBo}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sKin7Position: {
    left: 1,
    width: 383,
    overflow: "hidden",
  },
  frameSKin1Position: {
    left: 4,
    position: "absolute",
  },
  kinLayout1: {
    height: 115,
    position: "absolute",
  },
  ecseTypo: {
    color: Color.colorsBlack,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    letterSpacing: 0.9,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    left: 0,
    width: 253,
    top: 0,
    position: "absolute",
  },
  back1Typo1: {
    fontWeight: "500",
    textAlign: "left",
  },
  bcNhyKhng6Typo: {
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    color: Color.colorsBlack,
    fontFamily: FontFamily.montserrat,
    left: 0,
    position: "absolute",
  },
  kinLayout: {
    left: -4,
    height: 115,
    backgroundColor: Color.whitesmoke_400,
    borderRadius: Border.br_3xs,
    width: 383,
    position: "absolute",
    overflow: "hidden",
  },
  sKin8Typo: {
    color: Color.deepskyblue_100,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    letterSpacing: 0.9,
    fontSize: FontSize.size_11xl,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    top: 5,
    position: "absolute",
  },
  cuLcB41Layout: {
    width: 148,
    height: 144,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  clubTypo: {
    color: Color.white,
    letterSpacing: 0.5,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
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
  homeFlexBox: {
    width: 67,
    justifyContent: "center",
    alignItems: "center",
  },
  ecseCup: {
    height: 28,
    textAlign: "left",
  },
  tmTtSKin1Child: {
    top: 35,
    width: 241,
    height: 1,
  },
  bcNhyKhng6: {
    top: 40,
    width: 237,
    height: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.size_smi,
    color: Color.colorsBlack,
    fontFamily: FontFamily.montserrat,
    left: 0,
    position: "absolute",
  },
  thiGianNg6: {
    top: 85,
    width: 235,
    height: 19,
    textAlign: "left",
  },
  tmTtSKin16: {
    left: 130,
    width: 253,
    top: 0,
    height: 115,
    position: "absolute",
    overflow: "hidden",
  },
  image14Icon: {
    width: 119,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    height: 115,
  },
  nhSKin16: {
    width: 130,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  sKin61: {
    top: 599,
    left: -5,
    backgroundColor: Color.whitesmoke_400,
    height: 115,
    borderRadius: Border.br_3xs,
    width: 383,
    overflow: "hidden",
  },
  sKin51: {
    top: 479,
  },
  sKin41: {
    top: 359,
  },
  sKin31: {
    top: 239,
  },
  sKin21: {
    top: 119,
  },
  ecseCup5: {
    height: 34,
    textAlign: "left",
  },
  sKin11: {
    top: -1,
  },
  frameSKin1: {
    top: 50,
    width: 380,
    height: 489,
  },
  sKin8: {
    top: 8,
    width: 139,
    height: 36,
  },
  sKin7: {
    top: 220,
    height: 541,
    position: "absolute",
  },
  image12Icon: {
    left: 0,
  },
  bigDataClub2: {
    left: 15,
    width: 118,
    top: 126,
    letterSpacing: 0.5,
    height: 19,
  },
  cuLcB41: {
    left: 470,
    overflow: "hidden",
  },
  atttClub: {
    top: 122,
    left: 26,
    width: 90,
    height: 15,
  },
  cuLcB31: {
    left: 312,
    overflow: "hidden",
  },
  cuLcB21: {
    left: 154,
    overflow: "hidden",
  },
  ceac: {
    left: 51,
    width: 46,
    top: 126,
    letterSpacing: 0.5,
    height: 18,
  },
  cuLcB11: {
    left: 0,
    overflow: "hidden",
  },
  ccCuLcB1: {
    top: 60,
    height: 144,
    left: 0,
    width: 383,
    position: "absolute",
  },
  cuLcB7: {
    width: 353,
    height: 38,
    top: 0,
  },
  cuLcB6: {
    height: 205,
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
  backChild: {
    width: 10,
    height: 17,
  },
  back1: {
    fontSize: FontSize.size_xl,
    color: Color.deepskyblue_300,
    marginLeft: 10,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
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
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    color: Color.colorsBlack,
    left: 0,
    position: "absolute",
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
    top: 0,
    overflow: "hidden",
  },
  vectorIcon2: {
    width: 26,
    height: 26,
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    marginTop: 4,
    fontFamily: FontFamily.roboto,
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
    top: 889,
    borderStyle: "solid",
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    height: 53,
    flexDirection: "row",
    justifyContent: "center",
    width: 428,
    backgroundColor: Color.white,
  },
  cuLcBSKin1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 943,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default CuLcBSKin;
