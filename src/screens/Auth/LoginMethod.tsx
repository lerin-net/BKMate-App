import { Border, Color, FontFamily, FontSize } from '@/theme/GlobalStyles';
import { useNavigation } from '@react-navigation/core';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginMethod() {
  return (
    <View style={styles.loginMethod}>
      <Text style={styles.another}>Hoặc đăng nhập với</Text>
      <View style={styles.socialMedia}>
        <TouchableOpacity style={styles.media}>
          <Image
            style={styles.mediaIcon}
            contentFit="cover"
            source={require('@/assets/frame-1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.media}>
          <Image
            style={styles.mediaIcon}
            contentFit="cover"
            source={require('@/assets/wrapper.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.media]}>
          <Image
            style={styles.mediaIcon}
            contentFit="cover"
            source={require('@/assets/frame-11.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
