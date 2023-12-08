import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import BuildingCard from '@/components/BuildingCard';
import NavigationBar from '@/components/NavigationBar';
import GoBackButton from '@/components/GoBackButton';

const buildingsList = [
  {
    image: require('@/assets/image4.png'),
    name: 'Thư viện',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/image5.png'),
    name: 'Căn tin',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/image6.png'),
    name: 'Nhà thể thao',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/image7.png'),
    name: 'Tiệm in',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/image8.png'),
    name: 'Nhà xe',
    link: 'ThngTinAIm'
  }
];

const FeatureBuilding = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <GoBackButton toPage="Khuôn viên" />
        <Text style={styles.title}>Tòa nhà chức năng</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {buildingsList.map((building, index) => (
            <BuildingCard
              key={index}
              name={building.name}
              image={building.image}
              link={building.link}
            />
          ))}
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    backgroundColor: Color.white
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    rowGap: 20
  },
  title: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserratBold,
    color: Color.gray_200
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    rowGap: 20
  }
});

export default FeatureBuilding;
