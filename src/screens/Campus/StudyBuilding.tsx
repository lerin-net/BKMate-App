import * as React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { FontSize, Color, FontFamily } from '@/theme/GlobalStyles';
import Card from '@/components/Card';
import GoBackButton from '@/components/GoBackButton';
import BaseLayout from '@/layouts/BaseLayout';
import { buildings } from '@/constant/building';

const StudyBuilding = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Khuôn viên" />
        <Text style={styles.title}>Tòa nhà học tập</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {buildings.map((building, index) => (
            <Card
              key={index}
              name={building.name}
              image={building.image}
              buildingName={building.id}
              link="Location"
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
