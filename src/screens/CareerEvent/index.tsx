import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import Card from '@/components/Card';

const careerEventtList = [
  {
    id: '1',
    name: 'VNG University week',
    image: require('@/assets/image-18.png'),
    link: 'CareerDetail'
  },
  {
    id: '2',
    name: 'VNG University week',
    image: require('@/assets/image-18.png'),
    link: 'CareerDetail'
  },
  {
    id: '3',
    name: 'VNG University week',
    image: require('@/assets/image-18.png'),
    link: 'CareerDetail'
  },
  {
    id: '4',
    name: 'VNG University week',
    image: require('@/assets/image-18.png'),
    link: 'CareerDetail'
  },
  {
    id: '5',
    name: 'VNG University week',
    image: require('@/assets/image-18.png'),
    link: 'CareerDetail'
  }
];

const Career = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Địa điểm" />
        <Text style={styles.title}>Hướng nghiệp</Text>
      </View>
      <FlatList
        contentContainerStyle={{ rowGap: 20, padding: 20 }}
        data={careerEventtList}
        renderItem={({ item }) => (
          <Card
            name={item?.name}
            image={item?.image}
            link={'CareerDetail'}
            color={Color.colorsBlack}
            textStyle={styles.eventName}
            imageStyle={styles.imageLayout}
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
    color: Color.deepskyblue_300,
    fontFamily: FontFamily.montserratBold
  },
  imageLayout: {
    height: 383
  },
  eventName: {
    color: Color.colorsBlack
  }
});

export default Career;
