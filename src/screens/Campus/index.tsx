import React, { useState } from 'react';
import { Image } from 'expo-image';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color, FontSize, Border } from '@/theme/GlobalStyles';
import NavigationBar from '@/components/NavigationBar';
import Card from '@/components/Card';
import GoBackButton from '@/components/GoBackButton';
import BaseLayout from '@/layouts/BaseLayout';

const buildingsList = [
  {
    image: require('@/assets/image9.png'),
    name: 'Tòa nhà học tập',
    link: 'StudyBuilding'
  },
  {
    image: require('@/assets/image10.png'),
    name: 'Tòa nhà chức năng',
    link: 'FeatureBuilding'
  }
];

const Campus = () => {
  const navigation = useNavigation();
  const [inputSearch, setInputSearch] = useState('');

  return (
    <BaseLayout>
      <LinearGradient
        style={styles.header}
        locations={[0.03, 0.61]}
        colors={['#bae6fd', '#f0f9ff']}
      >
        <GoBackButton toPage="Trang chủ" />

        <View style={styles.titleFiled}>
          <Text style={styles.titleText}>Khuôn viên</Text>
          <Image
            style={styles.mapIcon}
            contentFit="contain"
            source={require('@/assets/vector1.png')}
          />
        </View>
        <View style={[styles.inputBox]}>
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require('@/assets/search.png')}
          />
          <TextInput
            style={{ width: '100%' }}
            placeholder="Tìm kiếm"
            value={inputSearch}
            onChangeText={(val) => setInputSearch(val)}
          />
        </View>
        <Pressable style={[styles.searchButton]}>
          <Text style={[styles.searchText]}>Tìm kiếm</Text>
          <Image
            style={styles.arrowRight}
            contentFit="cover"
            source={require('@/assets/arrow--right.png')}
          />
        </Pressable>
      </LinearGradient>

      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.areaText}>Khu vực</Text>
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
  header: {
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'center',
    rowGap: 20
  },
  titleFiled: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 35,
    fontFamily: FontFamily.montserratBold
  },
  mapIcon: {
    width: 100,
    height: 70
  },
  inputBox: {
    width: '100%',
    height: 50,
    borderColor: '#d5dfe9',
    borderWidth: 1,
    borderRadius: Border.br_sm_7,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    paddingHorizontal: 20
  },
  searchIcon: {
    height: '50%',
    width: '8.2%'
  },
  searchText: {
    color: Color.white,
    textAlign: 'left',
    fontFamily: FontFamily.montserrat,
    fontSize: FontSize.size_base
  },
  arrowRight: {
    width: 28,
    height: 28,
    marginLeft: 14,
    overflow: 'hidden'
  },
  searchButton: {
    backgroundColor: Color.gray_300,
    width: 200,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: Border.br_sm_7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    rowGap: Dimensions.get('window').height * 0.015
  },
  areaText: {
    fontSize: FontSize.size_11xl,
    color: Color.gray_200,
    fontFamily: FontFamily.montserratBold
  }
});

export default Campus;
