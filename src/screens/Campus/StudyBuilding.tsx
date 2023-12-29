import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import Card from '@/components/Card';
import NavigationBar from '@/components/NavigationBar';
import GoBackButton from '@/components/GoBackButton';
import BaseLayout from '@/layouts/BaseLayout';

const buildingsList = [
  {
    id: 'h1',
    image: require('@/assets/image.png'),
    name: 'Tòa H1',
    link: 'Location'
  },
  {
    id: 'h2',
    image: require('@/assets/image1.png'),
    name: 'Tòa H2',
    link: 'Location'
  },
  {
    id: 'h3',
    image: require('@/assets/image2.png'),
    name: 'Tòa H3',
    link: 'Location'
  },
  {
    id: 'h6',
    image: require('@/assets/image3.png'),
    name: 'Tòa H6',
    link: 'Location'
  }
];

const StudyBuilding = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Khuôn viên" />
        <Text style={styles.title}>Tòa nhà học tập</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {buildingsList.map((building, index) => (
            <Card
              key={index}
              name={building.name}
              image={building.image}
              link={building.link}
              buildingName={building.id}
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

export default StudyBuilding;
