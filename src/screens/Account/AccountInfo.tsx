import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import { UserProfile } from '.';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountInfo = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <View style={styles.menuContainer}>
        <LinearGradient
          style={styles.menuBar}
          locations={[0.25, 1]}
          colors={['#2da3dd', 'rgba(6, 113, 211, 0)']}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <Image
                style={styles.icon}
                source={require('@/assets/lr2-menu.png')}
              />
            </TouchableOpacity>
            <Text style={styles.menuText}>Tài khoản</Text>
            <TouchableOpacity>
              <Image
                style={styles.menuButton}
                source={require('@/assets/lr2-edit.png')}
              />
            </TouchableOpacity>
          </View>
          <UserProfile />
        </LinearGradient>
      </View>

      {/* Thong Tin Tài Khoản */}
      <ScrollView
        style={{ marginTop: 100 }}
        contentContainerStyle={{ rowGap: 20, paddingHorizontal: 40 }}
      >
        <View style={styles.infoContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.icon}
              source={require('@/assets/lr2-phone.png')}
            />
            <Text style={styles.text}>+ 84 999999999</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.icon}
              source={require('@/assets/lr2-mail.png')}
            />
            <Text style={styles.text}>rin.lerin@hcmut.edu.vn</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.icon}
              source={require('@/assets/lr2-studentID.png')}
            />
            <Text style={styles.text}>2333014</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.icon}
              source={require('@/assets/lr2-major.png')}
            />
            <Text style={styles.text}>Khoa học Máy tính</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.icon}
              source={require('@/assets/lr2-faculty.png')}
            />
            <Text style={styles.text}>Khoa Khoa học và Kỹ thuật Máy tính</Text>
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
    overflow: 'hidden'
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    rowGap: 20
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10
  },
  text: {
    color: Color.colorsBlack,
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.size_base
  },
  menuContainer: {
    flexDirection: 'row',
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'transparent'
  },
  infoContainer: {
    padding: 20,
    rowGap: 10
  },
  menuBar: {
    flex: 1,
    paddingTop: 40
  },
  menuButton: {
    width: 32,
    height: 32,
    marginVertical: 8,
    marginRight: 16
  },
  menuText: {
    fontSize: FontSize.size_5xl,
    color: Color.white
  }
});

export default AccountInfo;
