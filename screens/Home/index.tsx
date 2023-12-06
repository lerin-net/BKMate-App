import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";
import NavigationBar from "../../components/NavigationBar";
const Home = () => {
  const navigation = useNavigation();
  const [inputSearch, setInputSearch] = useState('')
  return (
    <View style={styles.homeScreen}>
      <LinearGradient
        style={styles.header}
        locations={[0.03, 0.61]}
        colors={["#7bd6f1", "#f0f9ff"]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={[styles.logo]}
            contentFit="cover"
            source={require("../../assets/01-logobachkhoasang-11.png")}
          />
          <Text style={[styles.bkmate]}>BKMate</Text>
        </View>
        <Text style={[styles.slogan]}>Đồng hành cùng thanh xuân của bạn</Text>

        <View style={styles.searchField}>
          <View style={[styles.inputBox]}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require("../../assets/search1.png")}
            />
            <TextInput placeholder="Tìm kiếm" value={inputSearch} onChangeText={(val) => setInputSearch(val)} />
          </View>

          <Pressable style={[styles.searchButton]}>
            <Text style={[styles.searchText]}>Tìm kiếm</Text>
            <Image
              style={styles.arrowRight}
              contentFit="cover"
              source={require("../../assets/arrow--right1.png")}
            />
          </Pressable>
        </View>
      </LinearGradient>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={[styles.content]}>
          <View style={styles.featureRows}>
            <Pressable
              style={styles.iconButton}
              onPress={() => navigation.navigate("GiiThiu")}
            >
              <Image
                style={[styles.iconLayout]}
                contentFit="cover"
                source={require("../../assets/icon.png")}
              />
              <Text style={[styles.iconText]}>Giới thiệu</Text>
            </Pressable>
            <Pressable
              style={[styles.iconButton]}
              onPress={() => navigation.navigate("KhunVin")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/icon1.png")}
              />
              <Text style={[styles.iconText]}>Khuôn viên</Text>
            </Pressable>
            <Pressable
              style={[styles.iconButton]}
              onPress={() => navigation.navigate("CuLcBSKin")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/icon2.png")}
              />
              <Text style={[styles.iconText]}>Sự kiện</Text>
            </Pressable>
          </View>
          <View style={styles.featureRows}>
            <Pressable
              style={[styles.iconButton]}
              onPress={() => navigation.navigate("HngNghip")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/icon3.png")}
              />
              <Text style={[styles.iconText]}>Hướng nghiệp</Text>
            </Pressable>
            <Pressable
              style={[styles.iconButton]}
              onPress={() => navigation.navigate("QutMQR")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/icon4.png")}
              />
              <Text style={[styles.iconText]}>Quét mã QR</Text>
            </Pressable>
            <Pressable
              style={[styles.iconButton]}
              onPress={() => navigation.navigate("ThngTinCNhn")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/icon5.png")}
              />
              <Text style={[styles.iconText]}>Tài khoản</Text>
            </Pressable>
          </View>
          <View style={styles.featureRows}>
            <Pressable
              style={[styles.iconButton]}
              onPress={() => navigation.navigate("BoLiGp")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/icon6.png")}
              />
              <Text style={[styles.iconText]}>Báo lỗi</Text>
            </Pressable>
          </View>
        </View>

        {/* <View style={[styles.navbar]}>
          <Pressable
            style={styles.navbarIconBox}
            onPress={() => navigation.navigate("ThngBo")}
          >
            <Image
              style={styles.navbarIcon}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
            <Text style={[styles.navbarIconText]}>Thông báo</Text>
          </Pressable>
          <Pressable
            style={[styles.navbarIconBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.navbarIcon}
              contentFit="cover"
              source={require("../../assets/iconlyboldhome1.png")}
            />
            <Text style={[styles.navbarActiveIcon, styles.navbarIconText]}>
              Trang chủ
            </Text>
          </Pressable>
          <Pressable
            style={[styles.navbarIconBox]}
            onPress={() => navigation.navigate("ThngTinCNhn")}
          >
            <Image
              style={styles.navbarIcon}
              contentFit="cover"
              source={require("../../assets/iconlylightprofile5.png")}
            />
            <Text style={[styles.navbarIconText]}>Tài khoản</Text>
          </Pressable>
        </View> */}
        <NavigationBar />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: Color.white,
  },
  header: {
    paddingBottom: 10,
    paddingTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    rowGap: 10,
  },

  bkmate: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppins,
    color: "#2ea4dd",
    fontWeight: "700",
  },
  logo: {
    width: 106,
    height: 96,
  },
  searchIcon: {
    height: "56%",
    width: "7.91%",
  },
  slogan: {
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_base,
  },
  inputBox: {
    width: 354,
    height: 50,
    borderColor: "#d5dfe9",
    borderWidth: 1,
    borderRadius: Border.br_sm_7,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    paddingHorizontal: 10,
  },
  searchText: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_base,
  },
  arrowRight: {
    width: 28,
    height: 28,
    marginLeft: 14,
    overflow: "hidden",
  },
  searchButton: {
    backgroundColor: Color.gray_300,
    width: 200,
    paddingHorizontal: 18,
    paddingVertical: 11,
    marginTop: 30,
    borderRadius: Border.br_sm_7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchField: {
    height: 168,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: 60,
    justifyContent: "center",
    paddingHorizontal: 35,
    rowGap: 40,
    height: 280,
  },
  featureRows: {
    flexDirection: "row",
    columnGap: 15,
  },
  iconButton: {
    width: Dimensions.get("window").width / 4,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    width: 50,
    height: 50,
  },
  iconText: {
    marginTop: 15,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorsBlack,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserrat,
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    height: 57,
    borderColor: "#57bfe7",
    borderTopWidth: 1,
    backgroundColor: Color.white,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
  },
  navbarIconBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  navbarIcon: {
    width: 24,
    height: 24,
  },
  navbarIconText: {
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  navbarActiveIcon: {
    color: Color.deepskyblue_100,
  },
});

export default Home;
