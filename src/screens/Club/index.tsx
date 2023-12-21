import * as React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList
} from 'react-native';
import Carousel from 'react-native-reanimated';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';

const clubList = [
  {
    name: 'CLAC',
    link: 'ClubDetail',
    image: require('@/assets/image11.png')
  },
  {
    name: 'Big Data Club',
    link: 'ClubDetail',
    image: require('@/assets/image12.png')
  },
  {
    name: 'GDCS',
    link: 'ClubDetail',
    image: require('@/assets/image13.png')
  },
  {
    name: 'CLAC',
    link: 'ClubDetail',
    image: require('@/assets/image11.png')
  }
];

const eventList = [
  {
    image: require('@/assets/image14.png'),
    name: 'eCSE CUP',
    content: 'Bước nhảy không gian cùng AOV',
    registerDate: '12/11 - 24/11'
  },
  {
    image: require('@/assets/image14.png'),
    name: 'eCSE CUP',
    content: 'Bước nhảy không gian cùng AOV',
    registerDate: '12/11 - 24/11'
  },
  {
    image: require('@/assets/image14.png'),
    name: 'eCSE CUP',
    content: 'Bước nhảy không gian cùng AOV',
    registerDate: '12/11 - 24/11'
  },
  {
    image: require('@/assets/image14.png'),
    name: 'eCSE CUP',
    content: 'Bước nhảy không gian cùng AOV',
    registerDate: '12/11 - 24/11'
  }
];

const CuLcBSKin = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Trang chủ" />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={[styles.title]}>Câu lạc bộ</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.clubList}>
          {clubList.map((club, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate(club?.link)}
            >
              <Image style={[styles.clubBox]} source={club?.image} />
              <Text style={[styles.clubName]}>{club?.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <Text style={[styles.title, { paddingHorizontal: 20 }]}>Sự kiện</Text>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        contentContainerStyle={{ gap: 10 }}
        data={eventList}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.eventBox]}
            onPress={() => navigation.navigate('EventDetail')}
          >
            <Image style={[styles.eventIcon]} source={item?.image} />
            <View>
              <Text style={[styles.eventTitle]}>{item?.name}</Text>
              <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: StyleSheet.hairlineWidth
                }}
              />
              <Text style={[styles.eventContent]}>
                {item?.content} {'\n'}
                Thời gian đăng ký: {item?.registerDate}
              </Text>
            </View>
          </Pressable>
        )}
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
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_11xl,
    color: Color.deepskyblue_100,
    marginVertical: 20
  },
  clubList: {
    gap: 10
  },
  clubBox: {
    width: Dimensions.get('window').width * 0.33,
    height: Dimensions.get('window').width * 0.33
  },
  clubName: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width * 0.33,
    textAlign: 'center'
  },
  eventBox: {
    backgroundColor: Color.whitesmoke_400,
    borderRadius: Border.br_3xs,
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    columnGap: 15
  },
  eventIcon: {
    width: Dimensions.get('window').width * 0.3,
    borderRadius: Border.br_3xs
  },
  eventTitle: {
    fontWeight: '700',
    letterSpacing: 1.5,
    fontSize: FontSize.size_11xl
  },
  eventContent: {
    lineHeight: 30
  }
});

export default CuLcBSKin;
