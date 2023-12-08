import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import BuildingCard from '@/components/BuildingCard';
import NavigationBar from '@/components/NavigationBar';
import GoBackButton from '@/components/GoBackButton';

const buildingsList = [
  {
    image: require('@/assets/lythuyet.jpg'),
    name: 'Phòng học lý thuyết',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/thuchanh.jpg'),
    name: 'Phòng thực hành',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/thinghiem.jpg'),
    name: 'Phòng thí nghiệm',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/tuhoc.jpg'),
    name: 'Khu tự học',
    link: 'ThngTinAIm'
  },
  {
    image: require('@/assets/thietbi.jpg'),
    name: 'Phòng thiết bị',
    link: 'FeatureBuilding'
  }
];

const Location = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <GoBackButton toPage="Tòa nhà học tập" />
        <Text style={styles.title}>Địa điểm</Text>
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

export default Location;
