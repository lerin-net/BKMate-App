// import * as React from 'react';
// import { Text, StyleSheet, View, Pressable } from 'react-native';
// import { Image } from 'expo-image';
// import { useNavigation } from '@react-navigation/native';
// import {
//   FontFamily,
//   Color,
//   FontSize,
//   Padding,
//   Border
// } from '@/theme/GlobalStyles';
// import BaseLayout from '@/layouts/BaseLayout';

// const Setting = () => {
//   const navigation = useNavigation();

//   return (
//     <BaseLayout>
//       <View style={styles.ciTVBoMt1}>
//         <View style={[styles.menuBar, styles.menuBarPosition]}>
//           <Text style={styles.ciT}>Cài đặt</Text>
//         </View>
//         <Pressable
//           style={[styles.profilePicture, styles.menuBarPosition]}
//           onPress={() => navigation.navigate('Account')}
//         >
//           <Image
//             style={styles.icon}
//             contentFit="cover"
//             source={require('@/assets/profile-picture1.png')}
//           />
//         </Pressable>
//         <View style={[styles.accountSetting]}>
//           <Image
//             style={[styles.image40Icon, styles.iconPosition]}
//             contentFit="cover"
//             source={require('@/assets/lr4-Account.png')}
//           />
//           <Text style={[styles.tiKhon, styles.khcTypo]}>Tài khoản</Text>
//           <Text style={[styles.chnhSaH1, styles.chNn1Typo]}>
//             Chỉnh sửa hồ sơ
//           </Text>
//           <Text style={[styles.quynRingT1, styles.chNn1Typo]}>
//             Quyền riêng tư
//           </Text>
//           <Text style={[styles.thayIMt1, styles.chNn1Typo]}>
//             Thay đổi mật khẩu
//           </Text>
//         </View>
//         <View style={[styles.notificationSetting, styles.settingPosition]}>
//           <Image
//             style={[styles.image41Icon, styles.iconPosition]}
//             contentFit="cover"
//             source={require('@/assets/lr4-Notifi.png')}
//           />
//           <View style={[styles.thngBo, styles.thngPosition]}>
//             <Text style={[styles.thngBo1, styles.chNn1Typo]}>Thông báo</Text>
//             <Image
//               style={[styles.image42Icon, styles.iconLayout]}
//               contentFit="cover"
//               source={require('@/assets/lr4-switch.png')}
//             />
//           </View>
//             <Text style={[styles.thngBo3, styles.khcTypo]}>Thông báo</Text>
//           <View style={[styles.thngBo2, styles.thngPosition]}>
//             <Text style={[styles.thngBo1, styles.chNn1Typo]}>Cập nhật</Text>
//             <Image
//               style={[styles.image42Icon, styles.iconLayout]}
//               contentFit="cover"
//               source={require('@/assets/lr4-switch2.png')}
//             />
//           </View>
//         </View>
//         <View style={[styles.otherSetting, styles.settingPosition]}>
//           <Image
//             style={styles.image44Icon}
//             contentFit="cover"
//             source={require('@/assets/lr4-Other.png')}
//           />
//           <Text style={[styles.khc, styles.khcTypo]}>Khác</Text>
//           <View style={[styles.darkMode, styles.menuBarPosition]}>
//             <Text style={[styles.chNn1, styles.chNn1Typo]}>Chế độ nền tối</Text>
//             <Image
//               style={[styles.image45Icon, styles.iconLayout]}
//               contentFit="cover"
//               source={require('@/assets/lr4-switch2.png')}
//             />
//           </View>
//           <View style={[styles.language, styles.regionPosition]}>
//             <Text style={[styles.ngnNg, styles.ngnNgPosition]}>Ngôn ngữ</Text>
//             <View style={[styles.upcomingEvents, styles.upcomingLayout]}>
//               <Text style={styles.button}>Tiếng Việt</Text>
//             </View>
//           </View>
//           <View style={[styles.region, styles.regionPosition]}>
//             <Text style={[styles.vngKhuVc1, styles.ngnNgPosition]}>
//               Vùng/ Khu vực
//             </Text>
//             <View style={[styles.upcomingEvents1, styles.upcomingLayout]}>
//               <Text style={styles.button}>Vietnam</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </BaseLayout>
//   );
// };

// const styles = StyleSheet.create({
//   menuBarPosition: {
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   settingPosition: {
//     left: 32,
//     position: 'absolute'
//   },
//   otherTypo: {
//     fontFamily: FontFamily.roboto,
//     top: 0,
//     textAlign: 'left',
//     color: Color.deepskyblue_100,
//     fontSize: FontSize.size_5xl,
//     position: 'absolute'
//   },
//   khcTypo: {
//     display: 'flex',
//     fontSize: FontSize.size_xl,
//     alignItems: 'center',
//     textAlign: 'left',
//     color: Color.deepskyblue_100,
//     fontFamily: FontFamily.robotoFlex,
//     fontWeight: '700',
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   chNn1Typo: {
//     width: 170,
//     // height: 20,
//     display: 'flex',
//     fontSize: FontSize.size_xl,
//     color: Color.colorsBlack,
//     alignItems: 'center',
//     textAlign: 'left',
//     fontFamily: FontFamily.robotoFlex,
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   thngPosition: {
//     width: 359,
//     marginLeft: -179,
//     height: 24,
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   textTypo: {
//     color: Color.gainsboro_100,
//     width: 30,
//     display: 'flex',
//     fontFamily: FontFamily.roboto,
//     alignItems: 'center',
//     top: 0,
//     textAlign: 'left',
//     fontSize: FontSize.size_5xl,
//     position: 'absolute'
//   },
//   regionPosition: {
//     height: 33,
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   ngnNgPosition: {
//     marginTop: -9.5,
//     width: 170,
//     display: 'flex',
//     fontSize: FontSize.size_xl,
//     color: Color.colorsBlack,
//     alignItems: 'center',
//     textAlign: 'left',
//     fontFamily: FontFamily.robotoFlex,
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   upcomingLayout: {
//     paddingHorizontal: Padding.p_xl,
//     width: 93,
//     borderWidth: 1,
//     borderColor: 'rgba(69, 69, 69, 0.5)',
//     backgroundColor: Color.whitesmoke_300,
//     flexDirection: 'row',
//     borderStyle: 'solid',
//     height: 33,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: Padding.p_mini,
//     top: 0,
//     position: 'absolute',
//     overflow: 'hidden'
//   },
//   navLayout: {
//     height: 57,
//     backgroundColor: Color.white
//   },
//   thngBo4Typo: {
//     marginTop: 4,
//     textAlign: 'right',
//     fontSize: FontSize.size_3xs,
//     fontFamily: FontFamily.roboto,
//     fontWeight: '700'
//   },
//   homeFlexBox: {
//     width: 67,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   ciT: {
//     marginTop: 67.55,
//     marginLeft: -182,
//     width: 219,
//     textAlign: 'left',
//     fontWeight: '700',
//     fontSize: FontSize.size_5xl,
//     color: Color.deepskyblue_100,
//     fontFamily: FontFamily.robotoFlex,
//     left: '50%',
//     top: '50%',
//     position: 'absolute'
//   },
//   uiIcon: {
//     top: 12,
//     right: 15,
//     width: 68,
//     height: 16,
//     position: 'absolute'
//   },
//   time1: {
//     marginTop: -5.5,
//     fontSize: FontSize.size_mini,
//     letterSpacing: 0,
//     width: 54,
//     textAlign: 'center',
//     color: Color.colorsBlack,
//     fontFamily: FontFamily.roboto,
//     left: 0,
//     top: '50%',
//     position: 'absolute'
//   },
//   time: {
//     top: 5,
//     left: 16,
//     width: 56,
//     height: 23,
//     position: 'absolute'
//   },
//   statusBar1: {
//     height: 42,
//     width: 428
//   },
//   statusBar: {
//     backgroundColor: Color.gray_600,
//     paddingHorizontal: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: Padding.p_mini,
//     top: 0,
//     left: 0,
//     position: 'absolute',
//     overflow: 'hidden'
//   },
//   menuBar: {
//     marginTop: -410,
//     marginLeft: -215,
//     height: 191,
//     width: 428
//   },
//   icon: {
//     marginTop: -350,
//     marginLeft: -183,
//     height: '100%',
//     width: '100%'
//   },
//   profilePicture: {
//     width: 70,
//     height: 70
//   },
//   account: {
//     left: 0
//   },
//   tiKhon: {
//     marginTop: -68,
//     marginLeft: -48.5
//   },
//   chnhSaH1: {
//     marginTop: -26,
//     marginLeft: -91.5,
//     width: 170
//   },
//   quynRingT1: {
//     marginTop: 52,
//     marginLeft: -90.5
//   },
//   thayIMt1: {
//     marginTop: 13,
//     marginLeft: -91.5,
//     width: 170
//   },
//   accountSetting: {
//     top: 228,
//     width: 183,
//     height: 144,
//     left: 32,
//     position: 'absolute'
//   },
//   thngBo1: {
//     marginTop: -10,
//     marginLeft: -179.5
//   },
//   text3: {
//     width: 30,
//     left: 329,
//     display: 'flex',
//     fontFamily: FontFamily.roboto,
//     alignItems: 'center',
//     top: 0,
//     textAlign: 'left',
//     color: Color.deepskyblue_100,
//     fontSize: FontSize.size_5xl,
//     position: 'absolute'
//   },
//   thngBo: {
//     marginTop: -8.5,
//     height: 24
//   },
//   text4: {
//     left: 329,
//     color: Color.gainsboro_100
//   },
//   thngBo2: {
//     marginTop: 31.5,
//     height: 24
//   },
//   thngBo3: {
//     marginTop: -51.5,
//     marginLeft: -137
//   },
//   notificationSetting: {
//     top: 442,
//     height: 111,
//     width: 360
//   },
//   other: {
//     left: 1
//   },
//   khc: {
//     marginTop: -77.5,
//     marginLeft: -134.5
//   },
//   chNn1: {
//     marginTop: -8,
//     marginLeft: -180
//   },
//   text5: {
//     left: 330
//   },
//   darkMode: {
//     marginTop: -33.5,
//     marginLeft: -180.5,
//     height: 24,
//     width: 360
//   },
//   ngnNg: {
//     marginLeft: -180
//   },
//   button: {
//     fontSize: FontSize.size_base,
//     color: Color.darkgray_100,
//     textAlign: 'center',
//     fontFamily: FontFamily.robotoFlex
//   },
//   upcomingEvents: {
//     left: 267
//   },
//   language: {
//     marginTop: 4.5,
//     marginLeft: -179.5,
//     width: 360
//   },
//   vngKhuVc1: {
//     marginLeft: -180.5
//   },
//   upcomingEvents1: {
//     left: 268
//   },
//   region: {
//     marginTop: 46.5,
//     marginLeft: -180.5,
//     width: 361
//   },
//   otherSetting: {
//     top: 630,
//     height: 159,
//     width: 361
//   },
//   vectorIcon1: {
//     width: 26,
//     height: 26
//   },
//   thngBo4: {
//     color: Color.colorsBlack
//   },
//   iconlyboldhome: {
//     width: 24,
//     height: 24
//   },
//   home: {
//     marginLeft: 8
//   },
//   tiKhon1: {
//     color: Color.deepskyblue_100,
//     marginTop: 4,
//     textAlign: 'right',
//     fontSize: FontSize.size_3xs
//   },
//   navBar1: {
//     borderColor: '#57bfe7',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     borderStyle: 'solid',
//     height: 57,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 428
//   },
//   navBar: {
//     bottom: 0,
//     justifyContent: 'space-between',
//     left: 0,
//     position: 'absolute'
//   },
//   ciTVBoMt1: {
//     flex: 1,
//     // height: 932,
//     overflow: 'hidden',
//     backgroundColor: Color.white
//     // width: '100%'
//     // padding: 20
//   },
//   iconPosition: {
//     left: 0,
//     position: 'absolute'
//   },
//   image40Icon: {
//     width: 24,
//     height: 24,
//     top: 0
//   },
//   image41Icon: {
//     width: 23,
//     height: 24,
//     top: 0
//   },
//   image42Icon: {
//     top: 1,
//     left: 329
//   },
//   image44Icon: {
//     left: 1,
//     width: 30,
//     height: 24,
//     top: 0,
//     position: 'absolute'
//   },
//   image45Icon: {
//     left: 330,
//     top: 0
//   },
//   iconLayout: {
//     height: 18,
//     width: 27,
//     position: 'absolute'
//   }
// });

// export default Setting;

import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import { ScrollView, Switch } from 'react-native-gesture-handler';

const Setting = () => {
  const navigation = useNavigation();

  const navigateToGeneral = () => {
    navigation.navigate('Account');
  };

  return (
    <BaseLayout>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 32 }}>
          <GoBackButton />
          <Image
            style={{ width: 70, height: 70, borderRadius: 35, marginTop: 20 }}
            source={require('@/assets/profile-picture1.png')}
          />

          <View style={{ paddingTop: 20 }}>
            <Text
              style={{
                fontSize: FontSize.size_5xl,
                fontWeight: '700',
                color: Color.deepskyblue_100
              }}
            >
              Cài đặt
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 32 }}>
          {/* Ảnh và tên tài khoản */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 24, height: 24, marginRight: 8 }}
              source={require('@/assets/lr4-Account.png')}
            />
            <Text style={{ fontSize: FontSize.size_xl, fontWeight: '700' }}>
              Tài khoản
            </Text>
          </View>

          {/* Các mục cài đặt liên quan đến tài khoản */}
          <View style={{ marginLeft: 32, marginTop: 10, rowGap: 10 }}>
            <Text style={{ fontSize: FontSize.size_xl }}>Chỉnh sửa hồ sơ</Text>
            <Text style={{ fontSize: FontSize.size_xl }}>Quyền riêng tư</Text>
            <Text style={{ fontSize: FontSize.size_xl }}>
              Thay đổi mật khẩu
            </Text>
          </View>

          {/* Phần cài đặt thông báo */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30
            }}
          >
            <Image
              style={{ width: 23, height: 24, marginRight: 8 }}
              source={require('@/assets/lr4-Notifi.png')}
            />
            <Text style={{ fontSize: FontSize.size_xl, fontWeight: '700' }}>
              Thông báo
            </Text>
          </View>

          {/* Các mục cài đặt liên quan đến thông báo */}
          <View style={{ marginLeft: 32, marginTop: 10, rowGap: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: FontSize.size_xl }}>Thông báo</Text>
              <Switch style={{ width: 27, height: 18, marginLeft: 'auto' }} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.size_xl,
                  color: Color.colorsBlack
                }}
              >
                Cập nhật
              </Text>
              <Switch style={{ width: 27, height: 18, marginLeft: 'auto' }} />
            </View>
          </View>

          {/* Phần cài đặt khác */}
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ width: 30, height: 24, marginRight: 8 }}
                source={require('@/assets/lr4-Other.png')}
              />
              <Text style={{ fontSize: FontSize.size_xl, fontWeight: '700' }}>
                Khác
              </Text>
            </View>

            {/* Các mục cài đặt liên quan đến chế độ nền tối và ngôn ngữ */}
            <View style={{ marginLeft: 32, marginTop: 10, rowGap: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: FontSize.size_xl,
                    color: Color.colorsBlack
                  }}
                >
                  Chế độ nền tối
                </Text>
                <Switch style={{ width: 27, height: 18, marginLeft: 'auto' }} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: FontSize.size_xl,
                    color: Color.colorsBlack
                  }}
                >
                  Ngôn ngữ
                </Text>
                <View style={[styles.upcomingLayout, { marginLeft: 'auto' }]}>
                  <Text
                    style={{
                      fontSize: FontSize.size_base,
                      color: Color.darkgray_100
                    }}
                  >
                    Tiếng Việt
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default Setting;

const styles = StyleSheet.create({});
