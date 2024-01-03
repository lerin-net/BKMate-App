import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import { ScrollView } from 'react-native-gesture-handler';

export const MenuItem = ({ label, onPress, iconSource }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Image style={styles.icon} source={iconSource} resizeMode="contain" />
    </View>
    <Text style={styles.menuItemLabel}>{label}</Text>
  </TouchableOpacity>
);

export const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.userProfile}
      onPress={() => navigation.navigate('AccountInfo' as never)}
    >
      <View style={styles.userProfileContainer}>
        <Image
          style={styles.userProfileImage}
          source={require('@/assets/profile-picture2.png')}
        />
        <Text style={styles.userName}>Lê Rin</Text>
        <Text>ID: 2333014</Text>
      </View>
    </TouchableOpacity>
  );
};

const menuItems = [
  {
    label: 'Thông tin tài khoản',
    screen: 'AccountInfo' as never,
    iconSource: require('@/assets/lr1-profile.png')
  },
  {
    label: 'Sự kiện đã lưu',
    screen: 'MyEvent' as never,
    iconSource: require('@/assets/lr1-savedEvents.png')
  },
  {
    label: 'Cơ hội nghề nghiệp',
    screen: 'Career' as never,
    iconSource: require('@/assets/lr1-careers.png')
  },
  {
    label: 'Cài đặt & bảo mật',
    screen: 'Setting' as never,
    iconSource: require('@/assets/lr1-setting.png')
  },
  {
    label: 'Trung tâm hỗ trợ',
    screen: 'Center' as never,
    iconSource: require('@/assets/lr1-supportCenter.png')
  },
  {
    label: 'Góp ý & báo lỗi',
    screen: 'Review' as never,
    iconSource: require('@/assets/lr1-feedbacks.png')
  },
  {
    label: 'Đăng xuất',
    screen: 'Welcome' as never,
    iconSource: require('@/assets/lr1-logOut.png')
  }
];

const Account = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <LinearGradient
        style={styles.linearGradient}
        locations={[0.24, 1]}
        colors={['#2ca3dc', 'rgba(6, 113, 211, 0)']}
      >
        <View style={styles.topBar}>
          <View />
          <TouchableOpacity
            onPress={() => navigation.navigate('Announce' as never)}
          >
            <Image
              style={styles.icon}
              source={require('@/assets/lr1-notifi.png')}
            />
          </TouchableOpacity>
        </View>
        <UserProfile />
      </LinearGradient>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.menuContainer}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            onPress={() => navigation.navigate(item.screen)}
            iconSource={item.iconSource}
          />
        ))}
      </ScrollView>
    </BaseLayout>
  );
};

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  menuItemLabel: {
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.size_base
  },
  userProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfileContainer: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: 'rgba(164, 164, 164, 0.25)',
    shadowOffset: { width: -2, height: 2 },
    backgroundColor: Color.white,
    width: '80%',
    borderRadius: Border.br_6xl,
    alignItems: 'center',
    display: 'flex',
    rowGap: 10,
    paddingVertical: 15,
    marginTop: 50
  },
  userProfileImage: {
    width: 115,
    height: 115
  },
  userName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoMono,
    fontWeight: '700'
  },
  linearGradient: {
    height: Dimensions.get('window').height / 3
  },
  topBar: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  scrollView: {
    marginTop: 80
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 50
  }
});

export default Account;
