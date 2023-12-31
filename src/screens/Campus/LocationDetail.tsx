import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { useRoute } from '@react-navigation/native';

const LocationDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //@ts-ignore
  const { buildingName, locationName, locationImage } = route.params;

  return (
    <BaseLayout>
      <View style={styles.header}>
        <GoBackButton toPage="Trở về" />
        <Text style={styles.title}>{locationName.toString()}</Text>
        <Card
          image={
            locationImage
              ? locationImage
              : require('@/assets/phng-hc-l-thuyt2.png')
          }
        />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>
            {locationName.toString().toUpperCase()} TRƯỜNG ĐH BÁCH KHOA
          </Text>
          <Text style={styles.contentText}>
            {locationName.toString()} Trường ĐH Bách khoa có lịch sử lâu đời:
            thành lập vào năm 1977 trên cơ sở sáp nhập Thư viện Trung tâm Quốc
            gia kỹ thuật Phú Thọ, Thư viện Bách khoa trung cấp, và Thư viện Cao
            đẳng hóa học. Đây là một trong những thư viện ĐH lớn nhất quốc gia
            với hơn 22.371 tựa sách, 17.782 luận văn tiến sĩ/ thạc sĩ/ khóa
            luận, 1.704 tài liệu báo cáo khoa học, cùng hàng trăm ngàn đơn vị dữ
            liệu phát minh/ sáng chế, sách/ báo/ tạp chí khoa học, bài giảng
            điện tử…, được cập nhật thường xuyên, hỗ trợ việc học từ bậc ĐH đến
            Sau ĐH.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() =>
            navigation.navigate('DirectRoute', { buildingName: buildingName })
          }
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText]}>Dẫn Đường</Text>
        </TouchableOpacity>
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
  content: {
    backgroundColor: Color.whitesmoke_100,
    paddingHorizontal: 20,
    paddingVertical: 20,
    rowGap: 20,
    marginHorizontal: 20,
    marginVertical: 10
  },
  contentTitle: {
    fontFamily: FontFamily.montserratBold,
    fontSize: 20,
    letterSpacing: 0.5,
    color: Color.lightskyblue_100,
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
export default LocationDetail;
