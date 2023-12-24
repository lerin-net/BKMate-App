import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import Card from '@/components/Card';
import NavigationBar from '@/components/NavigationBar';
import GoBackButton from '@/components/GoBackButton';
import BaseLayout from '@/layouts/BaseLayout';

const buildingsList = [
  {
    image: require('@/assets/lythuyet.jpg'),
    name: 'Phòng học lý thuyết',
    link: 'LocationDetail'
  },
  {
    image: require('@/assets/thuchanh.jpg'),
    name: 'Phòng thực hành',
    link: 'LocationDetail'
  },
  {
    image: require('@/assets/thinghiem.jpg'),
    name: 'Phòng thí nghiệm',
    link: 'LocationDetail'
  },
  {
    image: require('@/assets/tuhoc.jpg'),
    name: 'Khu tự học',
    link: 'LocationDetail'
  },
  {
    image: require('@/assets/thietbi.jpg'),
    name: 'Phòng thiết bị',
    link: 'FeatureBuilding'
  }
];

const Location = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Tòa nhà học tập" />
        <Text style={styles.title}>Địa điểm</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {buildingsList.map((building, index) => (
            <Card
              key={index}
              name={building.name}
              image={building.image}
              link={building.link}
            />
          ))}
        </View>
      </ScrollView>
    </BaseLayout>
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
    padding: 20,
    rowGap: 20
  }
});

export default Location;
