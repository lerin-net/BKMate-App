import React, { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, Pressable } from 'react-native';
import { FontFamily, Color, FontSize, Border } from '@/theme/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

export default function GoBackButton(props) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.backFlexBox, props?.style && props.style]}
      onPress={() => navigation.goBack()}
    >
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require('@/assets/vector-92.png')}
      />
      <Text style={styles.prevPage}>{props?.toPage && props.toPage}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  backIcon: {
    width: 10,
    height: 17
  },
  prevPage: {
    color: Color.deepskyblue_300,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto
  }
});
