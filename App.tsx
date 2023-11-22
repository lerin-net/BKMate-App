const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ChiTitCuLcB from "./screens/ChiTitCuLcB";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import TrungTmHTr from "./screens/TrungTmHTr";
import CiTVBoMt from "./screens/CiTVBoMt";
import ChiTitSKin from "./screens/ChiTitSKin";
import SKinLu from "./screens/SKinLu";
import ThngTinTiKhon from "./screens/ThngTinTiKhon";
import ThngTinVTrng from "./screens/ThngTinVTrng";
import ChngTrnhOTo from "./screens/ChngTrnhOTo";
import GiiThiu from "./screens/GiiThiu";
import ToHcTp from "./screens/ToHcTp";
import DnNg from "./screens/DnNg";
import ThngTinAIm from "./screens/ThngTinAIm";
import TaChcNng from "./screens/TaChcNng";
import KhunVin from "./screens/KhunVin";
import ChiTitHngNghip from "./screens/ChiTitHngNghip";
import HngNghip from "./screens/HngNghip";
import QutMQR from "./screens/QutMQR";
import ThngBo from "./screens/ThngBo";
import CmNBoLiGp from "./screens/CmNBoLiGp";
import NiDungBoLiGp from "./screens/NiDungBoLiGp";
import BoLiGp from "./screens/BoLiGp";
import Home from "./screens/Home";
import ThngTinCNhn from "./screens/ThngTinCNhn";
import CuLcBSKin from "./screens/CuLcBSKin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="WelcomeScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="ChiTitCuLcB"
                component={ChiTitCuLcB}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrungTmHTr"
                component={TrungTmHTr}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CiTVBoMt"
                component={CiTVBoMt}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChiTitSKin"
                component={ChiTitSKin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SKinLu"
                component={SKinLu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ThngTinTiKhon"
                component={ThngTinTiKhon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ThngTinVTrng"
                component={ThngTinVTrng}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChngTrnhOTo"
                component={ChngTrnhOTo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GiiThiu"
                component={GiiThiu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ToHcTp"
                component={ToHcTp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DnNg"
                component={DnNg}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ThngTinAIm"
                component={ThngTinAIm}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TaChcNng"
                component={TaChcNng}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="KhunVin"
                component={KhunVin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChiTitHngNghip"
                component={ChiTitHngNghip}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HngNghip"
                component={HngNghip}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="QutMQR"
                component={QutMQR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ThngBo"
                component={ThngBo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CmNBoLiGp"
                component={CmNBoLiGp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NiDungBoLiGp"
                component={NiDungBoLiGp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BoLiGp"
                component={BoLiGp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ThngTinCNhn"
                component={ThngTinCNhn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CuLcBSKin"
                component={CuLcBSKin}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
