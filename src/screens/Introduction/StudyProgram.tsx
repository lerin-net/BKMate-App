import * as React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, FontSize } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import Card from '@/components/Card';

const studyList = [
  'KHOA CƠ KHÍ',
  'KHOA KỸ THUẬT ĐỊA CHẤT VÀ DẦU KHÍ',
  'KHOA ĐIỆN - ĐIỆN TỬ',
  'KHOA KỸ THUẬT GIAO THÔNG',
  'KHOA KỸ THUẬT HÓA HỌC',
  'KHOA MÔI TRƯỜNG VÀ TÀI NGUYÊN',
  'KHOA KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH',
  'KHOA QUẢN LÝ CÔNG NGHIỆP',
  'KHOA KHOA HỌC ỨNG DỤNG',
  'KHOA CÔNG NGHỆ VẬT LIỆU',
  'KHOA KỸ THUẬT XÂY DỰNG',
  'CHƯƠNG TRÌNH TIÊN TIẾN'
];

const Item = ({ item }) => {
  return (
    <View style={styles.itemBox}>
      <Text style={styles.courseName}>{item}</Text>
    </View>
  );
};

const StudyProgram = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Giới thiệu" />
        <Text style={styles.title}>Chương trình đào tạo</Text>
        <Card image={require('@/assets/phng-hc-l-thuyt1.png')} />
      </View>
      <FlatList
        data={studyList}
        renderItem={Item}
        keyExtractor={(item) => item}
        style={styles.content}
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
    fontFamily: FontFamily.montserratBold
  },
  content: {
    paddingHorizontal: 20,
    marginVertical: 20
  },
  itemBox: {
    padding: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  courseName: {
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    fontWeight: '700'
  }
});

export default StudyProgram;
