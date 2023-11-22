import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Padding, Color, FontSize } from "../GlobalStyles";

const QutMQR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qutMQr}>
      <View style={styles.content}>
        <View style={[styles.qr, styles.qrLayout]}>
          <View style={[styles.qrPic, styles.qrPicLayout]}>
            <Image
              style={[styles.icons8QrCode801, styles.qrPicLayout]}
              contentFit="cover"
              source={require("../assets/icons8qrcode80-1.png")}
            />
          </View>
          <View style={[styles.scanAria, styles.qrLayout]}>
            <View style={styles.frame}>
              <View style={[styles.frameChild, styles.framePosition]} />
              <View style={[styles.frameItem, styles.frameItemPosition]} />
              <View style={[styles.frameInner, styles.frameInnerPosition]} />
              <View style={[styles.rectangleView, styles.frameInnerPosition]} />
            </View>
          </View>
        </View>
        <Text style={[styles.qutMQr1, styles.time1Typo]}>
          Quét mã QR hoặc chọn ảnh từ thiết bị
        </Text>
        <View style={[styles.pictureChosen, styles.statusBarFlexBox]}>
          <Image
            style={styles.mediaImage011}
            contentFit="cover"
            source={require("../assets/media--image-01.png")}
          />
        </View>
        <View style={[styles.pictureChosen1, styles.pictureShadowBox]}>
          <Image
            style={styles.liveSun1}
            contentFit="cover"
            source={require("../assets/live--sun.png")}
          />
        </View>
        <Pressable
          style={[styles.pictureChosen2, styles.pictureShadowBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.pictureChosenChild}
            contentFit="cover"
            source={require("../assets/vector-7.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  qrLayout: {
    height: 299,
    width: 299,
    position: "absolute",
  },
  qrPicLayout: {
    height: 250,
    width: 250,
    left: "50%",
    position: "absolute",
  },
  framePosition: {
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderColor: "#2ea3dd",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    bottom: "71.17%",
    width: "28.83%",
    height: "28.83%",
    top: "0%",
    position: "absolute",
  },
  frameItemPosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: "100%",
    right: "-28.83%",
  },
  frameInnerPosition: {
    bottom: "-28.83%",
    top: "100%",
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderColor: "#2ea3dd",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    width: "28.83%",
    height: "28.83%",
    position: "absolute",
  },
  time1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  statusBarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  pictureShadowBox: {
    top: "92.48%",
    width: "15.14%",
    height: "7.52%",
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_mid,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.deepskyblue_200,
    borderRadius: Border.br_48xl,
    bottom: "0%",
    position: "absolute",
  },
  icons8QrCode801: {
    marginLeft: -125,
    top: 0,
  },
  qrPic: {
    marginLeft: -124.5,
    top: 25,
  },
  frameChild: {
    right: "71.17%",
    left: "0%",
  },
  frameItem: {
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderColor: "#2ea3dd",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    bottom: "71.17%",
    width: "28.83%",
    height: "28.83%",
    top: "0%",
    position: "absolute",
  },
  frameInner: {
    right: "71.17%",
    left: "0%",
  },
  rectangleView: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: "100%",
    right: "-28.83%",
  },
  frame: {
    height: "100%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  scanAria: {
    left: 0,
    top: 0,
  },
  qr: {
    marginLeft: -146,
    top: 164,
    left: "50%",
    height: 299,
    width: 299,
  },
  qutMQr1: {
    top: 32,
    left: 1,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.deepskyblue_200,
    height: 85,
    width: 383,
  },
  mediaImage011: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  pictureChosen: {
    height: "10.64%",
    width: "21.41%",
    top: "89.23%",
    right: "39.3%",
    bottom: "0.13%",
    left: "39.3%",
    padding: Padding.p_mid,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.deepskyblue_200,
    borderRadius: Border.br_48xl,
    alignItems: "center",
  },
  liveSun1: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  pictureChosen1: {
    right: "72.98%",
    left: "11.88%",
  },
  pictureChosenChild: {
    borderRadius: 2,
    width: 10,
    height: 17,
  },
  pictureChosen2: {
    right: "11.88%",
    left: "72.98%",
  },
  content: {
    top: 67,
    left: 23,
    height: 771,
    width: 383,
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    color: Color.colorsBlack,
    width: 54,
    left: 0,
  },
  time: {
    top: 5,
    left: 16,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBar1: {
    width: 428,
    height: 42,
  },
  statusBar: {
    backgroundColor: Color.gray_600,
    paddingTop: Padding.p_mini,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  qutMQr: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 943,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default QutMQR;
