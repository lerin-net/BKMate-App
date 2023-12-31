import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Thankyou = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
          })
        }
        style={{
          alignSelf: 'flex-end',
          padding: 40
        }}
      >
        <Text
          style={{
            fontWeight: '700',
            color: '#2898ff',
            fontSize: 20,
            width: '100%',
            textAlign: 'right'
          }}
        >
          X
        </Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 50,
          flex: 1
        }}
      >
        <Image
          style={styles.image62Icon}
          contentFit="cover"
          source={require('@/assets/lr6-goodFeedback.png')}
        />
        <Text
          style={{
            fontWeight: '700',
            color: '#a6eefa',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 30
          }}
        >
          Xin chân thành cảm ơn góp ý của bạn!
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
          Góp ý của bạn sẽ được xem xét bởi Bộ phận CSKH và Trung tâm hỗ trợ, và
          được sử dụng để cải thiện trải nghiệm của bạn trong lần tới!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#52bce7',
            width: Dimensions.get('window').width * 0.8,
            padding: 15,
            borderRadius: 10,
            marginTop: 40
          }}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }]
            });
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
              color: 'white'
            }}
          >
            Trở về trang chủ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  barFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute'
  },
  time1Clr: {
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto
  },
  homeFlexBox: {
    width: 67,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time1FlexBox: {
    textAlign: 'center',
    letterSpacing: 0,
    position: 'absolute'
  },
  textTypo: {
    fontFamily: FontFamily.roboto,
    textAlign: 'center',
    letterSpacing: 0
  },
  vectorIcon1: {
    width: 24,
    height: 24
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: 'right',
    marginTop: 4,
    fontWeight: '700'
  },
  home: {
    marginLeft: 8
  },
  navBar: {
    top: 875,
    borderStyle: 'solid',
    borderColor: 'rgba(26, 145, 255, 0.3)',
    borderTopWidth: 1,
    height: 57,
    flexDirection: 'row',
    display: 'none',
    width: 428,
    backgroundColor: Color.white
  },
  uiIcon: {
    top: 12,
    right: 15,
    width: 68,
    height: 16,
    position: 'absolute'
  },
  time1: {
    marginTop: -5.5,
    top: '50%',
    fontSize: FontSize.size_mini,
    width: 54,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    left: 0,
    textAlign: 'center',
    letterSpacing: 0
  },
  time: {
    top: 5,
    left: 16,
    width: 56,
    height: 23,
    position: 'absolute'
  },
  statusBar1: {
    height: 42,
    width: 428
  },
  statusBar: {
    top: 0,
    backgroundColor: Color.gray_600,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    overflow: 'hidden'
  },
  text2: {
    top: 284,
    left: 182,
    fontSize: FontSize.size_45xl,
    position: 'absolute'
  },
  xinChnThnh1: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: '700'
  },
  xinChnThnhCmNGpC: {
    fontSize: FontSize.size_5xl
  },
  gpCa: {
    fontSize: FontSize.size_xl
  },
  gpCaBnSCXemXt: {
    fontWeight: '300',
    color: '#585858',
    fontFamily: FontFamily.robotoFlex
  },
  xinChnThnhContainer: {
    top: 366,
    left: 67,
    width: 303,
    height: 289
  },
  text4: {
    fontSize: FontSize.size_17xl,
    color: Color.dodgerblue
  },
  pressable: {
    left: 369,
    top: 72,
    position: 'absolute'
  },
  cmNBoLiGp1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    backgroundColor: Color.white
  },
  timeLayout: {
    height: 23,
    position: 'absolute'
  },
  image62Icon: {
    width: 64,
    height: 64
    // position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  image63: {
    left: 369,
    top: 72,
    width: 24
  }
});

export default Thankyou;
