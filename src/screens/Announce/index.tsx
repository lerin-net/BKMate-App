import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, FontSize, Color } from '@/theme/GlobalStyles';
import NavigationBar from '@/components/NavigationBar';
import BaseLayout from '@/layouts/BaseLayout';

const announcementList = [
  {
    type: 'Khuôn viên',
    content: 'Căn tin tòa H1 tạm dừng hoạt động động'
  },
  {
    type: 'Sự kiện',
    content: 'eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại'
  },
  {
    type: 'Hướng nghiệp',
    content: 'Cơ hội trải nghiệm VNG - Công ty công nghệ hàng đầu Việt Nam'
  },
  {
    type: 'Tài khoản',
    content: 'Thay đổi chính sách sử dụng'
  },
  {
    type: 'Khuôn viên',
    content: 'Bãi giữ xe tạm dừng hoạt động'
  },
  {
    type: 'Khuôn viên',
    content: 'Căn tin tòa H1 tạm dừng hoạt động động'
  },
  {
    type: 'Khuôn viên',
    content: 'Căn tin ra mắt món ăn món!'
  }
];

const Announce = () => {
  return (
    <BaseLayout>
      <LinearGradient
        style={styles.header}
        locations={[0.03, 0.61]}
        colors={['#bae6fd', '#f0f9ff']}
      >
        <Image
          style={styles.coverImage}
          contentFit="cover"
          source={require('@/assets/image-21.png')}
        />
        <Text style={styles.title}>Thông báo</Text>
      </LinearGradient>

      <ScrollView>
        {announcementList.map((announce, index) => (
          <View key={index} style={styles.announceBox}>
            <View style={styles.announceType}>
              <Image
                style={styles.announceIconPosition}
                contentFit="cover"
                source={require('@/assets/announce.png')}
              />
              <Text style={styles.typeText}>{announce.type}</Text>
            </View>
            <Text style={styles.announceContent}>{announce.content}</Text>
            <Text style={styles.time}>2 ngày trước</Text>
          </View>
        ))}
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.white,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coverImage: {
    height: '100%',
    width: '100%'
  },
  title: {
    marginTop: -18,
    marginLeft: -88,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    top: '50%',
    left: '50%',
    position: 'absolute'
  },
  announceBox: {
    borderColor: 'rgba(188, 186, 186, 0.7)',
    borderBottomWidth: 1,
    padding: 20,
    rowGap: 7
  },
  announceType: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10
  },
  announceIconPosition: {
    height: 20,
    width: 19
  },
  announceContent: {
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_lg
  },
  typeText: {
    color: Color.darkgray_400,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_mini,
    flex: 1
  },
  time: {
    color: Color.darkgray_400,
    fontSize: FontSize.size_mini
  }
});

export default Announce;
