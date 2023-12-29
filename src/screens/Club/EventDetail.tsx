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

const EventDetail = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Câu lạc bộ" />
      </View>
      <ScrollView>
        <Card
          image={require('@/assets/image-17.png')}
          cardStyle={styles.cardStyle}
        />
        <View style={styles.content}>
          <Text style={styles.contentTitle}>
            eCSE CUP - Giải đấu Thể thao Điện tử đã quay trở lại Level up,
            conquer the Cup!
          </Text>
          <Text style={styles.contentText}>
            Tháng 11 này, sự trở lại của giải đấu thể thao điện tử đã sẵn sàng
            đốt lên ngọn lửa tình yêu của các gamers tại trường ĐH Bách khoa -
            ĐHQG-HCM!!! {'\n'}
            Đây chính là nơi để các bạn khám phá và thử thách giới hạn của bản
            thân.{'\n'}
            Các chiến binh sẽ phải kề vai sát cánh bên những người đồng đội cùng
            vượt qua những thử thách và chinh phục vị trí cao nhất của giải đấu.
            {'\n'}
            Liệu bạn có đang nghĩ tới Game nào không? Hãy cùng đoán xem đâu sẽ
            là sàn đấu để so tài kỹ năng nha Hãy nhanh chóng tìm cho mình những
            người đồng đội đáng tin và sẵn sàng cùng nhau tiến tới đỉnh cao thôi
            các bạn ơi!!{'\n'}
            Thời gian mở form: 12/11/2023-24/11/2023 {'\n'}
            Link đăng ký: http://bit.ly/3QtIhAl {'\n'}
            (Lưu ý: đăng ký bằng domain là @hcmut.edu.vn) {'\n'}
            Thể lệ và hình thức: https://bit.ly/46bxIHQ {'\n'}
            Luật bảo chứng: https://bit.ly/4759nVz {'\n'}
            Cổng đăng ký sẽ đóng lại ngay khi có đủ 24 đội hợp lệ được ghi danh
            trong giải đấu nhé các tuyển thủ ơi
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
export default EventDetail;
