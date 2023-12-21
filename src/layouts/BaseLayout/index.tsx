import NavigationBar from '@/components/NavigationBar';
import { Color } from '@/theme/GlobalStyles';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export default function BaseLayout({ children }) {
  return (
    <View style={styles.screen}>
      {children}
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: Color.white,
    justifyContent: 'space-between'
  }
});
