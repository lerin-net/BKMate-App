import * as React from 'react';
import { Image } from 'expo-image';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontSize,
  Border,
  Padding,
  FontFamily
} from '@/theme/GlobalStyles';

const Feedback = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={{ flex: 1 }}
    >
      <LinearGradient
        style={styles.container}
        locations={[0, 1]}
        colors={['#a5f3fc', '#2aa1dc']}
      >
        <Text style={styles.xinLiV1}>
          Xin lỗi vì bạn đã có trải nghiệm không tốt.
        </Text>
        <Text
          style={{
            fontFamily: FontFamily.robotoFlex,
            color: 'white',
            fontSize: 22,
            textAlign: 'center'
          }}
        >
          Có điều gì mà chúng tôi nên cải thiện?
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 50,
            marginBottom: 20,
            fontSize: 18
          }}
        >
          Chọn chủ đề
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10
          }}
        >
          <TouchableOpacity style={[styles.subjectButton]}>
            <Text style={[styles.buttonText]}>Tính năng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.subjectButton, { backgroundColor: 'white' }]}
          >
            <Text style={[styles.buttonText, { color: 'black' }]}>
              Nội dung
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subjectButton]}>
            <Text style={[styles.buttonText]}>Dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subjectButton]}>
            <Text style={[styles.buttonText]}>Trung tâm hỗ trợ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subjectButton]}>
            <Text style={[styles.buttonText]}>Khác</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={9}
          style={{
            backgroundColor: Color.gray_500,
            borderRadius: 15,
            marginVertical: 50,
            padding: 5
          }}
          placeholder="Hãy cho chúng tôi biết trải nghiệm và suy nghĩ của bạn..."
          value={value}
          onChangeText={(val) => setValue(val)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: '100%',
            padding: 15,
            borderRadius: 10
          }}
          onPress={() => {
            navigation.navigate('Thankyou');
          }}
        >
          <Text
            style={{ textAlign: 'center', fontWeight: '700', fontSize: 18 }}
          >
            Gửi
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  subjectButton: {
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: Color.white,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontSize.size_base
  },
  homeFlexBox: {
    width: 67,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  image64: {
    left: 369,
    top: 72,
    width: 24
  },
  timeLayout: {
    height: 23,
    position: 'absolute'
  },
  chnCh1Layout: {
    width: 303,
    color: Color.whitesmoke_200,
    textAlign: 'center',
    letterSpacing: 0
  },
  chnCh1Typo: {
    fontSize: FontSize.size_base,
    position: 'absolute'
  },
  paragraphLayout: {
    height: 186,
    width: 338,
    position: 'absolute'
  },
  buttonTypo: {
    color: Color.gray_400,
    fontWeight: '500',
    fontSize: FontSize.size_base,
    textAlign: 'center'
  },
  dchVLayout: {
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  tnhFlexBox: {
    width: 120,
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gray_500,
    paddingVertical: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  vectorIcon1: {
    width: 24,
    height: 24
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: 'right',
    marginTop: 4,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    fontWeight: '700'
  },
  home: {
    marginLeft: 8
  },
  navBar: {
    top: 875,
    borderStyle: 'solid',
    borderColor: 'rgba(28, 121, 242, 0.3)',
    borderTopWidth: 1,
    height: 57,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    left: 0,
    width: 428,
    backgroundColor: Color.white,
    position: 'absolute'
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
    textAlign: 'center',
    letterSpacing: 0,
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    left: 0,
    position: 'absolute'
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
    backgroundColor: Color.gray_600,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  xinLiV1: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: '700',
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  cIuG: {
    fontWeight: '300',
    fontFamily: FontFamily.robotoFlex
  },
  xinLiVContainer: {
    top: 158,
    left: 57,
    fontSize: FontSize.size_5xl,
    height: 115,
    position: 'absolute'
  },
  chnCh1: {
    top: 335,
    left: 59,
    height: 31,
    fontFamily: FontFamily.robotoMono,
    fontWeight: '300',
    width: 303,
    color: Color.whitesmoke_200,
    textAlign: 'center',
    letterSpacing: 0
  },
  paragraphBoxChild: {
    borderRadius: 20,
    backgroundColor: Color.gray_500,
    height: 186,
    width: 338,
    top: 0,
    left: 0
  },
  hyChoChng1: {
    top: 17,
    left: 19,
    fontWeight: '100',
    color: '#2b2b2b',
    textAlign: 'left',
    fontFamily: FontFamily.robotoFlex
  },
  paragraphBox: {
    top: 530,
    left: 46,
    height: 186,
    width: 338
  },
  button: {
    fontFamily: FontFamily.robotoMono
  },
  send: {
    top: 809,
    borderRadius: Border.br_3xs,
    width: 337,
    paddingHorizontal: Padding.p_xl,
    left: 46,
    paddingVertical: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.white,
    position: 'absolute'
  },
  button1: {
    fontFamily: FontFamily.robotoFlex
  },
  niDung: {
    left: 166,
    backgroundColor: Color.white,
    width: 93,
    borderRadius: Border.br_26xl,
    top: 366
  },
  button2: {
    fontWeight: '500',
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoFlex
  },

  tnhNng1: {
    left: 97,
    width: 150
  },
  tnhNng2: {
    left: 255,
    width: 62
  },
  dchV: {
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.gray_500,
    paddingVertical: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text1: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.roboto,
    color: Color.white,
    letterSpacing: 0
  },
  pressable: {
    left: 369,
    top: 72,
    position: 'absolute'
  },
  niDungBoLiGp1: {
    borderRadius: 50,
    flex: 1,
    height: 932,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    width: '100%'
  }
});

export default Feedback;
