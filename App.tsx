const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding from '@/screens/Onboardings';
import Login from '@/screens/Auth/Login';
import Register from '@/screens/Auth/Register';
import Welcome from '@/screens/Welcome';
import Home from '@/screens/Home';
import Introduce from '@/screens/Introduction';
import AboutSchool from '@/screens/Introduction/AboutSchool';
import StudyProgram from '@/screens/Introduction/StudyProgram';
import Announce from '@/screens/Announce';
import Campus from '@/screens/Campus';
import StudyBuilding from '@/screens/Campus/StudyBuilding';
import FeatureBuilding from '@/screens/Campus/FeatureBuilding';
import Location from '@/screens/Campus/Location';
import LocationDetail from '@/screens/Campus/LocationDetail';
import Career from '@/screens/CareerEvent';
import CareerDetail from '@/screens/CareerEvent/CareerDetail';
import ScanQR from '@/screens/ScanQR';
import Club from '@/screens/Club';
import ClubDetail from '@/screens/Club/ClubDetail';
import EventDetail from '@/screens/Club/EventDetail';

import TrungTmHTr from '@/screens/TrungTmHTr';
import CiTVBoMt from '@/screens/CiTVBoMt';
import SKinLu from '@/screens/SKinLu';
import ThngTinTiKhon from '@/screens/ThngTinTiKhon';
import DirectRoute from '@/screens/Campus/DirectRoute';
import CmNBoLiGp from '@/screens/CmNBoLiGp';
import NiDungBoLiGp from '@/screens/NiDungBoLiGp';
import BoLiGp from '@/screens/BoLiGp';
import ThngTinCNhn from '@/screens/ThngTinCNhn';

import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratBoldItalic: require('./assets/fonts/Montserrat-BoldItalic.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoMono: require('./assets/fonts/RobotoMono-Regular.ttf'),
    RobotoMonoBold: require('./assets/fonts/RobotoMono-Bold.ttf'),
    RobotoFlex: require('./assets/fonts/RobotoFlex-Regular.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    DancingScript: require('./assets/fonts/DancingScript-Regular.ttf'),
    DancingScriptBold: require('./assets/fonts/DancingScript-Bold.ttf')
  });
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState<
    boolean | null
  >(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData === null) {
        setIsAppFirstLaunched(true);
        await AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };

    fetchData();
  }, []);

  if (!fontsLoaded || isAppFirstLaunched === null) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator initialRouteName="Onboarding">
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ClubDetail"
                component={ClubDetail}
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
                name="EventDetail"
                component={EventDetail}
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
                name="AboutSchool"
                component={AboutSchool}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StudyProgram"
                component={StudyProgram}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Introduce"
                component={Introduce}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StudyBuilding"
                component={StudyBuilding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Location"
                component={Location}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DirectRoute"
                component={DirectRoute}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LocationDetail"
                component={LocationDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FeatureBuilding"
                component={FeatureBuilding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Campus"
                component={Campus}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CareerDetail"
                component={CareerDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Career"
                component={Career}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ScanQR"
                component={ScanQR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Announce"
                component={Announce}
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
                name="Club"
                component={Club}
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
