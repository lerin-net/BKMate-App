import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import BuildingCard from '@/components/BuildingCard';
import NavigationBar from '@/components/NavigationBar';
import GoBackButton from '@/components/GoBackButton';

const buildingsList = [
  {
    image: require('@/assets/image.png'),
    name: 'Tòa H1',
    link: 'Location'
  },
  {
    image: require('@/assets/image1.png'),
    name: 'Tòa H2',
    link: 'Location'
  },
  {
    image: require('@/assets/image2.png'),
    name: 'Tòa H3',
    link: 'Location'
  },
  {
    image: require('@/assets/image3.png'),
    name: 'Tòa H6',
    link: 'Location'
  }
];

const StudyBuilding = () => {
  return (
    <View style={[styles.screen]}>
      <View style={styles.header}>
        <GoBackButton toPage="Khuôn viên" />
        <Text style={styles.title}>Tòa nhà học tập</Text>
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
    height: Dimensions.get('window').height
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

export default StudyBuilding;
