import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  FontFamily,
  Padding,
  Border,
  FontSize,
  Color
} from '@/theme/GlobalStyles';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeScreen}>
      <Image
        style={[styles.background, styles.welcomeChildPosition]}
        contentFit="cover"
        source={require('@/assets/ellipse-1.png')}
      />

      <View style={styles.content}>
        <Image
          style={styles.bklogo}
          contentFit="cover"
          source={require('@/assets/01-logobachkhoasang-1.png')}
        />
        <Text style={styles.slogan}>Đồng hành cùng thanh xuân của bạn</Text>
      </View>
      <View style={styles.actionButtons}>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.button1, styles.buttonTypo]}>Đăng nhập</Text>
        </Pressable>
        <Pressable
          style={[styles.button2, styles.buttonFlexBox]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.button3, styles.buttonTypo]}>Đăng kí</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeChildPosition: {
    top: 0,
    position: 'absolute'
  },
  buttonFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_3xs,
    flexDirection: 'row'
  },
  buttonTypo: {
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_xl,
    textAlign: 'center'
  },
  welcomeScreenChild: {
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.47)',
    width: 428,
    height: 926
  },
  background: {
    left: 148,
    width: 635,
    height: 635
  },
  button1: {
    color: Color.white
  },
  button: {
    backgroundColor: Color.lightskyblue_100,
    shadowColor: '#cbd6ff',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1
  },
  button3: {
    color: Color.gray_400
  },
  button2: {
    marginLeft: 30,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    width: 160,
    borderRadius: Border.br_3xs
  },
  actionButtons: {
    bottom: 50,
    flexDirection: 'row'
  },
  bklogo: {
    width: 244,
    height: 208
  },
  slogan: {
    fontFamily: FontFamily.dancingScriptBold,
    color: '#2ca2dc',
    textAlign: 'center',
    fontSize: FontSize.size_16xl
  },
  welcomeScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 20,
    backgroundColor: Color.white,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Welcome;
