import * as React from 'react';
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import {
  Border,
  FontFamily,
  FontSize,
  Color,
  Padding
} from '@/theme/GlobalStyles';
import GoBackButton from '@/components/GoBackButton';
import Card from '@/components/Card';
import BaseLayout from '@/layouts/BaseLayout';

const CareerDetail = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Hướng nghiệp" />
      </View>
      <ScrollView>
        <Card
          image={require('@/assets/image-171.png')}
          cardStyle={styles.cardStyle}
        />
        <View style={styles.content}>
          <Text style={styles.contentTitle}>
            CƠ HỘI TRẢI NGHIỆM VNG - CÔNG TY CÔNG NGHỆ HÀNG ĐẦU VIỆT NAM
          </Text>
          <Text style={styles.contentText}>
            VNG University Week là tuần lễ kết nối sinh viên với chuỗi hoạt động
            và thử thách đa dạng, trải nghiệm thực tế về sản phẩm và môi trường
            của VNG. {'\n'}
            Với đợt trở lại thứ 2 trong năm 2023, VNG Campus hứa hẹn là nơi giúp
            các bạn sinh viên có cái nhìn cận cảnh về tính ứng dụng của công
            nghệ, tiếp cận gần gũi kiến thức chuyên môn, và từ đó hình dung rõ
            nét về định hướng sự nghiệp tương lai của mình. {'\n'}
            Các bạn còn chần chừ gì khi đăng ký ngay để có được những cơ hội
            tiếp xúc và trải nghiệm tuyệt vời sắp tới tại VNG!! {'\n'}
            Thời gian: 07g30-12g00 ngày 27/11/2023 {'\n'}
            Địa điểm: VNG Campus. (Sẽ tập trung ở Trường ĐH Bách khoa - ĐHQG-HCM
            cơ sở Dĩ An lúc 7g30). {'\n'}
            Đối tượng tham gia: Sinh viên trường Đại học Bách khoa - ĐHQG-HCM
            Link đăng ký: https://forms.gle/gngbFUmqzCrXEbuA8.
          </Text>
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
  cardStyle: {
    marginHorizontal: 20,
    height: Dimensions.get('window').height * 0.35
  },
  content: {
    backgroundColor: Color.whitesmoke_100,
    paddingHorizontal: 20,
    paddingVertical: 40,
    rowGap: 20,
    marginHorizontal: 20,
    marginVertical: 10
  },
  contentTitle: {
    fontFamily: FontFamily.montserratBold,
    letterSpacing: 0.5,
    color: Color.slateblue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  contentText: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    lineHeight: 20
  },
  startButton: {
    borderRadius: Border.br_base,
    backgroundColor: Color.deepskyblue_200,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
    marginVertical: 10
  },
  buttonText: {
    textTransform: 'uppercase',
    color: Color.white,
    fontSize: FontSize.size_xl,
    textAlign: 'center'
  }
});
export default CareerDetail;
