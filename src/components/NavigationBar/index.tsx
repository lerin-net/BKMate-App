import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, FontSize, Color } from '@/theme/GlobalStyles';

const NavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.navbar]}>
      <TouchableOpacity
        style={styles.navbarIconBox}
        onPress={() => navigation.navigate('Announce')}
      >
        <Image
          style={styles.navbarIcon}
          contentFit="cover"
          source={require('@/assets/vector.png')}
        />
        <Text style={[styles.navbarIconText]}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navbarIconBox]}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          style={styles.navbarIcon}
          contentFit="cover"
          source={require('@/assets/iconlyboldhome.png')}
        />
        <Text style={[styles.navbarIconText]}>Trang chủ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navbarIconBox]}
        onPress={() => navigation.navigate('Account')}
      >
        <Image
          style={styles.navbarIcon}
          contentFit="cover"
          source={require('@/assets/iconlylightprofile5.png')}
        />
        <Text style={[styles.navbarIconText]}>Tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  navbar: {
    zIndex: 1,
    bottom: 0,
    paddingVertical: 10,
    borderColor: '#B6BBC4',
    borderTopWidth: 0.4,
    backgroundColor: Color.white,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 30
  },
  navbarIconBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarIcon: {
    width: 24,
    height: 24
  },
  navbarIconText: {
    marginTop: 4,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.roboto,
    fontWeight: '900'
  }
});
