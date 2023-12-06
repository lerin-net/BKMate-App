import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { Input } from '@rneui/themed';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginScreen}>
      <Image
        style={[styles.background]}
        contentFit="cover"
        source={require("../../assets/objects.png")}
      />

      <View style={styles.form}>
        <Text style={[styles.title]}>Đăng nhập</Text>
        <TextInput style={[styles.inputSpaceBlock]} placeholder="Email" value={email} onChangeText={(val) => setEmail(val)} />
        <TextInput style={[styles.inputSpaceBlock]} placeholder="Password" secureTextEntry value={password} onChangeText={(val) => setPassword(val)} />
        <Text style={[styles.linkText, styles.forgot]}>
          Quên mật khẩu?
        </Text>
        <View style={styles.actions}>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.loginText]}>Đăng nhập</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={[styles.linkText]}>
              Tạo tài khoản
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.loginMethod}>
        <Text style={[styles.linkText, { fontWeight: "700" }]}>
          Hoặc đăng nhập với
        </Text>
        <View style={styles.socialMedia}>
          <View style={styles.media}>
            <Image
              style={styles.mediaIcon}
              contentFit="cover"
              source={require("../../assets/frame-1.png")}
            />
          </View>
          <View style={[styles.media]}>
            <Image
              style={[styles.mediaIcon]}
              contentFit="cover"
              source={require("../../assets/wrapper.png")}
            />
          </View>
          <View style={[styles.media]}>
            <Image
              style={styles.mediaIcon}
              contentFit="cover"
              source={require("../../assets/frame-11.png")}
            />
          </View>
        </View>
        <Text style={[styles.linkText]}>
          Tiếp tục mà không đăng nhập
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
    paddingHorizontal: 20,
    paddingVertical: 80,
    height: "100%",
    justifyContent: 'space-between'
  },
  background: {
    top: 0,
    left: 0,
    width: 635,
    height: 635,
    position: "absolute",
  },
  title: {
    fontWeight: "700",
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_11xl,
    color: Color.deepskyblue_200,
    marginBottom: 70,
  },
  form: {
    // top: 97,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 30,
  },
  inputSpaceBlock: {
    paddingBottom: Padding.p_xl,
    paddingRight: Padding.p_16xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_xl,
    width: "100%",
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_3xs,
  },
  linkText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserrat,
    color: Color.darkslategray_100,
    textAlign: "center",
  },
  forgot: {
    textAlign: 'right',
    color: Color.deepskyblue_200,
    fontWeight: "700",
    width: "100%",
  },
  loginText: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    fontWeight: "700",
  },
  loginButton: {
    backgroundColor: Color.lightskyblue_100,
    shadowColor: "#cbd6ff",
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowRadius: 200,
    elevation: 20,
    shadowOpacity: 1,
    paddingVertical: Padding.p_mini,
    width: 357,
    borderRadius: Border.br_3xs,
  },
  actions: {
    rowGap: 30,
    alignItems: 'center',
  },
  loginMethod: {
    alignItems: "center",
    rowGap: 20,
    // paddingVertical: 20,
    // top: 150,
  },
  socialMedia: {
    flexDirection: "row",
    columnGap: 10,
  },
  media: {
    width: 60,
    height: 40,
    backgroundColor: Color.whitesmoke_600,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  mediaIcon: {
    height: 24,
    width: 24,
  },
});

export default LoginScreen;