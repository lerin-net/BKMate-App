import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions
} from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import { ScrollView } from 'react-native-gesture-handler';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            style={[styles.background]}
            contentFit="cover"
            source={require('@/assets/objects1.png')}
          />
          <View style={styles.form}>
            <View
              style={{
                alignItems: 'center',
                rowGap: 14,
                marginBottom: 30
              }}
            >
              <Text style={[styles.title]}>Tạo tài khoản</Text>
              <Text style={[styles.description]}>
                Tạo tài khoản giúp bạn có những trải nghiệm đầy đủ về ứng dụng
                và trường
              </Text>
            </View>
            <TextInput
              style={[styles.inputSpaceBlock]}
              placeholder="Email"
              value={email}
              onChangeText={(val) => setEmail(val)}
            />
            <TextInput
              style={[styles.inputSpaceBlock]}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
            <TextInput
              style={[styles.inputSpaceBlock]}
              placeholder="Confirm password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(val) => setConfirmPassword(val)}
            />
            <View style={styles.actions}>
              <Pressable
                style={styles.loginButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={[styles.loginText]}>Đăng kí</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.linkText]}>Đã có tài khoản ?</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.loginMethod}>
            <Text style={[styles.another]}>Hoặc tiếp tục với</Text>
            <View style={styles.socialMedia}>
              <View style={styles.media}>
                <Image
                  style={styles.mediaIcon}
                  contentFit="cover"
                  source={require('@/assets/frame-1.png')}
                />
              </View>
              <View style={[styles.media]}>
                <Image
                  style={[styles.mediaIcon]}
                  contentFit="cover"
                  source={require('@/assets/wrapper.png')}
                />
              </View>
              <View style={[styles.media]}>
                <Image
                  style={styles.mediaIcon}
                  contentFit="cover"
                  source={require('@/assets/frame-11.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.white,
    height: Dimensions.get('window').height
  },
  content: {
    padding: 20
  },
  background: {
    top: 0,
    left: 0,
    width: 635,
    height: 500,
    position: 'absolute'
  },
  title: {
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_11xl,
    color: Color.deepskyblue_200,
    marginTop: 40
  },
  description: {
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.montserrat
  },
  inputSpaceBlock: {
    padding: Padding.p_xl,
    width: '100%',
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_3xs
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 30
  },
  linkText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserrat,
    color: Color.darkslategray_100,
    textAlign: 'center'
  },
  loginText: {
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: Color.lightskyblue_100,
    shadowColor: '#cbd6ff',
    shadowOffset: {
      width: 100,
      height: 100
    },
    shadowRadius: 200,
    elevation: 20,
    shadowOpacity: 1,
    paddingVertical: Padding.p_mini,
    width: '100%',
    borderRadius: Border.br_3xs
  },
  actions: {
    rowGap: 30,
    alignItems: 'center',
    width: '100%'
  },
  another: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratBold,
    color: Color.deepskyblue_100
  },
  loginMethod: {
    alignItems: 'center',
    rowGap: 15,
    marginTop: 20,
    paddingVertical: 20
  },
  socialMedia: {
    flexDirection: 'row',
    columnGap: 10
  },
  media: {
    width: 60,
    height: 40,
    backgroundColor: Color.whitesmoke_600,
    borderRadius: Border.br_3xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mediaIcon: {
    height: 24,
    width: 24
  }
});

export default Register;
