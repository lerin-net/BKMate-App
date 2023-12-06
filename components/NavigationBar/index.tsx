import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";

const NavigationBar = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.navbar]}>
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
                    source={require("../../assets/iconlyboldhome.png")}
                />
                <Text style={[styles.navbarIconText]}>
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
        </View>
    )
}

export default NavigationBar;

const styles = StyleSheet.create({
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
});