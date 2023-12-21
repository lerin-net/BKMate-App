import React, { useState } from 'react';
import { Image } from 'expo-image';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import NavigationBar from '@/components/NavigationBar';
import BaseLayout from '@/layouts/BaseLayout';

const iconButtonList = [
  {
    image: require('@/assets/icon.png'),
    text: 'Giới thiệu',
    link: 'Introduce'
  },
  {
    image: require('@/assets/icon1.png'),
    text: 'Khuôn viên',
    link: 'Campus'
  },
  {
    image: require('@/assets/icon2.png'),
    text: 'Sự kiện',
    link: 'CuLcBSKin'
  },
  {
    image: require('@/assets/icon3.png'),
    text: 'Hướng nghiệp',
    link: 'Career'
  },
  {
    image: require('@/assets/icon4.png'),
    text: 'Quét mã QR',
    link: 'ScanQR'
  },
  {
    image: require('@/assets/icon5.png'),
    text: 'Tài khoản',
    link: 'ThngTinCNhn'
  },
  {
    image: require('@/assets/icon6.png'),
    text: 'Báo lỗi',
    link: 'BoLiGp'
  }
];

const Home = () => {
  const navigation = useNavigation();
  const [inputSearch, setInputSearch] = useState('');
  return (
    <BaseLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{ flex: 1 }}
      >
        <LinearGradient
          style={styles.header}
          locations={[0.03, 0.61]}
          colors={['#7bd6f1', '#f0f9ff']}
        >
          <View style={styles.titleFiled}>
            <Image
              style={[styles.logo]}
              contentFit="cover"
              source={require('@/assets/01-logobachkhoasang-11.png')}
            />
            <Text style={[styles.bkmateText]}>BKMate</Text>
          </View>

          <Text style={[styles.slogan]}>Đồng hành cùng thanh xuân của bạn</Text>

          <View style={[styles.inputBox]}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require('@/assets/search1.png')}
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
              source={require('@/assets/arrow--right1.png')}
            />
          </Pressable>
        </LinearGradient>
        <ScrollView>
          <View style={[styles.content]}>
            <View style={styles.featureRows}>
              {iconButtonList.map((button, index) => (
                <Pressable
                  key={index}
                  style={[styles.iconButton]}
                  onPress={() => navigation.navigate(button.link)}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={button.image}
                  />
                  <Text style={[styles.iconText]}>{button.text}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //   height: Dimensions.get('window').height,
  //   backgroundColor: Color.white
  // },
  header: {
    paddingBottom: 10,
    paddingTop: 65,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 30
  },
  titleFiled: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bkmateText: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    color: '#2ea4dd'
  },
  logo: {
    width: 106,
    height: 75
  },
  slogan: {
    fontFamily: FontFamily.montserratBoldItalic,
    fontSize: FontSize.size_base
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
    marginLeft: 14
  },
  searchButton: {
    backgroundColor: Color.gray_300,
    width: 200,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: Border.br_sm_7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  featureRows: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 15,
    rowGap: 30,
    alignItems: 'center'
  },
  iconButton: {
    width: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLayout: {
    width: 50,
    height: 50
  },
  iconText: {
    marginTop: 15,
    textAlign: 'center',
    color: Color.colorsBlack,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratBold
  }
});

export default Home;
