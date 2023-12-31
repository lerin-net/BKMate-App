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
import DirectRoute from '@/screens/Campus/DirectRoute';
import Career from '@/screens/CareerEvent';
import CareerDetail from '@/screens/CareerEvent/CareerDetail';
import ScanQR from '@/screens/ScanQR';
import Club from '@/screens/Club';
import ClubDetail from '@/screens/Club/ClubDetail';
import EventDetail from '@/screens/Club/EventDetail';
import Account from '@/screens/Account';
import AccountInfo from '@/screens/Account/AccountInfo';
import Center from '@/screens/Account/Center';
import Setting from '@/screens/Account/Setting';
import MyEvent from '@/screens/Account/MyEvent';
import Review from '@/screens/Review';
import Feedback from '@/screens/Review/Feedback';
import Thankyou from '@/screens/Review/Thankyou';

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
              {isAppFirstLaunched && (
                <Stack.Screen
                  name="Onboarding"
                  component={Onboarding}
                  options={{ headerShown: false }}
                />
              )}
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
                name="Center"
                component={Center}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EventDetail"
                component={EventDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyEvent"
                component={MyEvent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountInfo"
                component={AccountInfo}
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
                name="Thankyou"
                component={Thankyou}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Feedback"
                component={Feedback}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Review"
                component={Review}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Account"
                component={Account}
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
