import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import { ScrollView, Switch } from 'react-native-gesture-handler';

const Setting = () => {
  const [notify, setNotify] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <BaseLayout>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 32 }}>
          <GoBackButton />
          <Image
            style={{ width: 70, height: 70, borderRadius: 35, marginTop: 20 }}
            source={require('@/assets/profile-picture1.png')}
          />

          <View style={{ paddingTop: 20 }}>
            <Text
              style={{
                fontSize: FontSize.size_5xl,
                fontWeight: '700',
                color: Color.deepskyblue_100
              }}
            >
              Cài đặt
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 32 }}>
          {/* Ảnh và tên tài khoản */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 24, height: 24, marginRight: 8 }}
              source={require('@/assets/lr4-Account.png')}
            />
            <Text style={{ fontSize: FontSize.size_xl, fontWeight: '700' }}>
              Tài khoản
            </Text>
          </View>

          {/* Các mục cài đặt liên quan đến tài khoản */}
          <View style={{ marginLeft: 32, marginTop: 10, rowGap: 10 }}>
            <Text style={{ fontSize: FontSize.size_xl }}>Chỉnh sửa hồ sơ</Text>
            <Text style={{ fontSize: FontSize.size_xl }}>Quyền riêng tư</Text>
            <Text style={{ fontSize: FontSize.size_xl }}>
              Thay đổi mật khẩu
            </Text>
          </View>

          {/* Phần cài đặt thông báo */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30
            }}
          >
            <Image
              style={{ width: 23, height: 24, marginRight: 8 }}
              source={require('@/assets/lr4-Notifi.png')}
            />
            <Text style={{ fontSize: FontSize.size_xl, fontWeight: '700' }}>
              Thông báo
            </Text>
          </View>

          {/* Các mục cài đặt liên quan đến thông báo */}
          <View style={{ marginLeft: 32, marginTop: 10, rowGap: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: FontSize.size_xl }}>Thông báo</Text>
              <Switch
                style={{ width: 27, height: 18, marginLeft: 'auto' }}
                value={notify}
                onValueChange={() => setNotify((prevStatuse) => !prevStatuse)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.size_xl,
                  color: Color.colorsBlack
                }}
              >
                Cập nhật
              </Text>
              <Switch
                style={{ width: 27, height: 18, marginLeft: 'auto' }}
                value={update}
                onValueChange={() => setUpdate((prevStatuse) => !prevStatuse)}
              />
            </View>
          </View>

          {/* Phần cài đặt khác */}
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ width: 30, height: 24, marginRight: 8 }}
                source={require('@/assets/lr4-Other.png')}
              />
              <Text style={{ fontSize: FontSize.size_xl, fontWeight: '700' }}>
                Khác
              </Text>
            </View>

            {/* Các mục cài đặt liên quan đến chế độ nền tối và ngôn ngữ */}
            <View style={{ marginLeft: 32, marginTop: 10, rowGap: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: FontSize.size_xl,
                    color: Color.colorsBlack
                  }}
                >
                  Chế độ nền tối
                </Text>
                <Switch
                  style={{ width: 27, height: 18, marginLeft: 'auto' }}
                  value={darkMode}
                  onValueChange={() =>
                    setDarkMode((prevStatuse) => !prevStatuse)
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: FontSize.size_xl,
                    color: Color.colorsBlack
                  }}
                >
                  Ngôn ngữ
                </Text>
                <View style={[styles.upcomingLayout, { marginLeft: 'auto' }]}>
                  <Text
                    style={{
                      fontSize: FontSize.size_base,
                      color: Color.darkgray_100
                    }}
                  >
                    Tiếng Việt
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default Setting;

const styles = StyleSheet.create({});
