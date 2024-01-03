import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Color, FontFamily, FontSize } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import Card from '@/components/Card';
import { REACT_APP_BASE_URL } from '../../../env';

const ClubDetail = () => {
  const [clubEvents, setClubEvents] = React.useState([]);

  React.useEffect(() => {
    const getClubEvents = async () => {
      try {
        const response = await fetch(`${REACT_APP_BASE_URL}/club-events`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setClubEvents(data);
      } catch (error) {
        // console.log(error);
      }
    };
    getClubEvents();
  }, []);

  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Câu lạc bộ" />
        <Text style={styles.title}>Câu lạc bộ</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Card
          image={require('@/assets/image-15.png')}
          cardStyle={styles.coverImage}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
          }}
        >
          <Card
            image={require('@/assets/image-161.png')}
            cardStyle={[styles.subImage]}
          />
          <Card
            image={require('@/assets/image-16.png')}
            cardStyle={[styles.subImage]}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>
            Đến với CEAC, các bạn sẽ có cơ hội:{'\n'}
            Có thêm môi trường học tập, rèn luyện lành mạnh, bổ ích.{'\n'}• Gặp
            gỡ, giao lưu với những người bạn có cùng niềm yêu thích với ngành Kỹ
            thuật Máy tính.{'\n'}• Được hướng dẫn, hỗ trợ về kiến thức và kỹ
            năng từ các mentor có chuyên môn theo kế hoạch hoạt động của Câu lạc
            bộ.{'\n'}• Được tham gia tổ chức các cuộc thi, các sự kiện do câu
            lạc bộ triển khai.{'\n'}
            Tham gia ngay: bit.ly/CEAC_tuyenquan2023_form
          </Text>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    marginBottom: 20
  },
  coverImage: {
    height: height * 0.25,
    borderRadius: 15
  },
  content: {
    backgroundColor: 'rgba(184, 184, 184, 0.11)',
    marginTop: 20,
    padding: 10
  },
  subImage: {
    borderRadius: 15,
    width: '48%',
    height: height * 0.3
  },
  description: {
    lineHeight: 22,
    fontSize: FontSize.size_mini
  }
});

export default ClubDetail;
