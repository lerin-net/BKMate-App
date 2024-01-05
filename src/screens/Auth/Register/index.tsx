import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert
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
import LoginMethod from '../LoginMethod';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://bkmate-service.onrender.com/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        }
      );

      const result = await response.json();

      if (response.status === 200) {
        // Successful login, redirect to homepage
        navigation.navigate('Home' as never);
      } else {
        // Unsuccessful login, show an error message
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors here
    }
  };

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Password does not match');
      } else {
        const response = await fetch(
          'https://bkmate-service.onrender.com/users',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          }
        );

        if (response.status === 201) {
          // Successful login, redirect to homepage
          handleLogin();
        } else {
          // Unsuccessful login, show an error message
          const error = JSON.parse(await response.text());
          Alert.alert('Error', error.message);
        }
      }
    } catch (error) {
      console.error('Error during register:', error);
      // Handle other errors here
    }
  };

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
              autoCapitalize="none"
              value={email}
              onChangeText={(val) => setEmail(val)}
            />
            <TextInput
              style={[styles.inputSpaceBlock]}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
            <TextInput
              style={[styles.inputSpaceBlock]}
              placeholder="Confirm password"
              autoCapitalize="none"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(val) => setConfirmPassword(val)}
            />
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleRegister}
              >
                <Text style={[styles.loginText]}>Đăng kí</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login' as never)}
                style={[styles.loginButton, { backgroundColor: '#F8EDFF' }]}
              >
                <Text style={[styles.linkText]}>Đã có tài khoản ?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <LoginMethod />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.white,
    height: Dimensions.get('window').height + (StatusBar.currentHeight ?? 0)
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
    fontFamily: FontFamily.montserratBold,
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
    rowGap: 20,
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
