import * as React from 'react';
import { Text, StyleSheet, View,  ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  Padding,
  Border,
  FontFamily,
  FontSize
} from '@/theme/GlobalStyles';
import GoBackButton from '@/components/GoBackButton';
import Card from '@/components/Card';
import BaseLayout from '@/layouts/BaseLayout';

const AboutSchool = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Giới thiệu" />
        <Text style={styles.title}>Thông tin về trường</Text>
        <Card image={require('@/assets/phng-hc-l-thuyt.png')} />
      </View>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <View style={styles.infoCard}>
          <View>
            <Text style={styles.subtitle}>LỊCH SỬ</Text>
          </View>
          <Text style={styles.describe}>
            Trường Đại học Bách khoa - ĐHQG-HCM là một trường thành viên của hệ
            thống Đại học Quốc gia TP. Hồ Chí Minh. Trường được thành lập vào
            năm 1957 với tiền thân là Trung tâm Quốc gia Kỹ thuật. Hiện nay,
            Trường ĐH Bách Khoa là trung tâm đào tạo, nghiên cứu khoa học và
            chuyển giao công nghệ lớn nhất các tỉnh phía Nam và là trường đại
            học kỹ thuật quan trọng của cả nước.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <View>
            <Text style={styles.subtitle}>THÀNH TỰU</Text>
          </View>
          <Text style={styles.describe}>
            ĐHQG - HCM đạt vị trí 179 trên bảng xếp hạng Quacquarelli Symnds
            (QS) ASIA năm 2022
          </Text>
          <Image
            style={styles.achieveImg}
            contentFit="cover"
            source={require('@/assets/asia-uni.png')}
          />

          <Text style={styles.describe}>
            ĐHQG-HCM thuộc top 401-500 trên bảng xếp hạng Times Higher Education
            (THE) năm 2022
          </Text>
          <Image
            style={styles.achieveImg}
            contentFit="cover"
            source={require('@/assets/asia-uni1.png')}
          />
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
    fontFamily: FontFamily.montserratBold
  },
  infoCard: {
    paddingHorizontal: Padding.p_xs,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderStyle: 'solid',
    borderRadius: Border.br_mini,
    marginVertical: 20
  },
  describe: {
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    paddingVertical: 10
  },
  achieveImg: {
    height: 90,
    marginBottom: 20
  },
  subtitle: {
    display: 'flex',
    fontWeight: '700',
    paddingVertical: 15,
    fontSize: FontSize.size_xl,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
});

export default AboutSchool;
