import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Color, FontSize } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import { ScrollView } from 'react-native-gesture-handler';

const Setting = () => {
  const [notify, setNotify] = useState(false);
  const [update, setUpdate] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BaseLayout>
      <ScrollView style={styles.container}>
        <View style={{ paddingTop: 32 }}>
          <GoBackButton />
          <Image
            style={styles.profileImage}
            source={require('@/assets/profile-picture1.png')}
          />

          <View style={{ paddingTop: 20 }}>
            <Text style={styles.headerText}>Cài đặt</Text>
          </View>
        </View>

        <View style={styles.settingSection}>
          <View style={styles.settingItem}>
            <Image
              style={styles.settingIcon}
              source={require('@/assets/lr4-Account.png')}
            />
            <Text style={styles.settingLabel}>Tài khoản</Text>
          </View>

          <View style={styles.subSettings}>
            {['Chỉnh sửa hồ sơ', 'Quyền riêng tư', 'Thay đổi mật khẩu'].map(
              (label) => (
                <TouchableOpacity key={label}>
                  <Text style={styles.subSettingLabel}>{label}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        <View style={styles.settingSection}>
          <View style={styles.settingItem}>
            <Image
              style={styles.settingIcon}
              source={require('@/assets/lr4-Notifi.png')}
            />
            <Text style={styles.settingLabel}>Thông báo</Text>
          </View>

          <View style={styles.subSettings}>
            <View style={styles.subSettingRow}>
              <Text style={styles.subSettingLabel}>Thông báo</Text>
              <Switch
                value={notify}
                onValueChange={() => setNotify((prevStatus) => !prevStatus)}
              />
            </View>
            <View style={styles.subSettingRow}>
              <Text style={styles.subSettingLabel}>Cập nhật</Text>
              <Switch
                value={update}
                onValueChange={() => setUpdate((prevStatus) => !prevStatus)}
              />
            </View>
          </View>
        </View>

        <View style={styles.settingSection}>
          <View style={styles.settingItem}>
            <Image
              style={styles.settingIcon}
              source={require('@/assets/lr4-Other.png')}
            />
            <Text style={styles.settingLabel}>Khác</Text>
          </View>

          <View style={styles.subSettings}>
            <View style={styles.subSettingRow}>
              <Text style={styles.subSettingLabel}>Chế độ nền tối</Text>
              <Switch
                value={darkMode}
                onValueChange={() => setDarkMode((prevStatus) => !prevStatus)}
              />
            </View>
            <View style={styles.subSettingRow}>
              <Text style={styles.subSettingLabel}>Ngôn ngữ</Text>
              <View style={styles.upcomingLayout}>
                <Text style={styles.subSettingLabel}>Tiếng Việt</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 20,
    marginRight: 20
  },
  headerText: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.deepskyblue_100
  },
  settingSection: {
    marginTop: 30
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingIcon: {
    width: 23,
    height: 24,
    marginRight: 8
  },
  settingLabel: {
    fontSize: FontSize.size_xl,
    fontWeight: '700'
  },
  subSettings: {
    marginLeft: 32,
    marginTop: 10,
    rowGap: 10
  },
  subSettingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subSettingLabel: {
    fontSize: FontSize.size_xl,
    color: Color.colorsBlack
  },
  upcomingLayout: {
    marginLeft: 'auto'
  }
});

export default Setting;
