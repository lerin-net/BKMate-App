import NavigationBar from '@/components/NavigationBar';
import { Color } from '@/theme/GlobalStyles';
import React from 'react';
import { Dimensions, StyleSheet, View, StatusBar } from 'react-native';

export default function BaseLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const screenHeight =
    Dimensions.get('window').height - (StatusBar.currentHeight ?? 0);

  return (
    <View style={styles.screen}>
      {children}
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'space-between'
  }
});
