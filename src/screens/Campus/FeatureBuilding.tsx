import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import Card from '@/components/Card';
import NavigationBar from '@/components/NavigationBar';
import GoBackButton from '@/components/GoBackButton';
import BaseLayout from '@/layouts/BaseLayout';

const buildingsList = [
  {
    insideBuilding: 'h1',
    image: require('@/assets/image4.png'),
    name: 'Thư viện',
    link: 'LocationDetail'
  },
  {
    insideBuilding: 'h1',
    image: require('@/assets/image5.png'),
    name: 'Căn tin',
    link: 'LocationDetail'
  },
  {
    insideBuilding: 'tdtt',
    image: require('@/assets/image6.png'),
    name: 'Nhà thể thao',
    link: 'LocationDetail'
  },
  {
    insideBuilding: 'h1',
    image: require('@/assets/image7.png'),
    name: 'Tiệm in',
    link: 'LocationDetail'
  },
  {
    insideBuilding: 'h6',
    image: require('@/assets/image8.png'),
    name: 'Nhà xe',
    link: 'LocationDetail'
  }
];

const FeatureBuilding = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Khuôn viên" />
        <Text style={styles.title}>Tòa nhà chức năng</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {buildingsList.map((building, index) => (
            <Card
              key={index}
              name={building.name}
              image={building.image}
              link={building.link}
              buildingName={building.insideBuilding}
              locationName={building.name}
              locationImage={building.image}
            />
          ))}
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
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

export default FeatureBuilding;
