import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, FontSize, Padding, Border } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';

const Introduce = () => {
  const navigation = useNavigation();
  return (
    <BaseLayout>
      <LinearGradient
        style={styles.linearContainer}
        locations={[0.03, 0.61]}
        colors={['#bae6fd', '#f0f9ff']}
      >
        <View style={{ position: 'absolute', top: 45, left: 20 }}>
          <GoBackButton toPage="Trang chủ" />
        </View>
        <View style={styles.top}>
          <Text style={styles.titleText}>{`Giới thiệu `}</Text>
          <Image
            style={styles.titleIcon}
            contentFit="cover"
            source={require('@/assets/image-28.png')}
          />
        </View>
      </LinearGradient>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.optionCard}
          onPress={() => navigation.navigate('AboutSchool')}
        >
          <Text style={styles.cardContent}>{`Thông tin về trường `}</Text>
          <Image
            style={styles.optionIcon}
            contentFit="cover"
            source={require('@/assets/image-26.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.optionCard}
          onPress={() => navigation.navigate('StudyProgram')}
        >
          <Text style={styles.cardContent}>{`Chương trình đào tạo `}</Text>
          <Image
            style={styles.optionIcon}
            contentFit="cover"
            source={require('@/assets/image-25.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  linearContainer: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_16xl,
    borderBottomLeftRadius: Border.br_16xl,
    backgroundColor: 'transparent',
    height: '30%',
    width: '100%',
    justifyContent: 'center'
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleText: {
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_16xl
  },
  titleIcon: {
    width: 89,
    height: 89,
    marginLeft: 8
  },
  optionCard: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: 30,
    height: 130,
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: Border.br_mini,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 50
  },
  cardContent: {
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xl,
    fontWeight: '700'
  },
  optionIcon: {
    height: 65,
    width: 65
  }
});

export default Introduce;
