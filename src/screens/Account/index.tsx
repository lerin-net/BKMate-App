import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import { ScrollView } from 'react-native-gesture-handler';

export const MenuItem = (props) => {
  const { label, onPress, iconSource } = props;
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress ? onPress : null}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={iconSource} resizeMode="contain" />
      </View>
      <Text style={styles.menuItemLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.userProfile}
      onPress={() => navigation.navigate('AccountInfo')}
    >
      <View style={styles.userProfileContainer}>
        <Image
          style={styles.userProfileImage}
          source={require('@/assets/profile-picture2.png')}
        />
        <Text style={styles.userName}>Lê Rin</Text>
        <Text>ID: 2333014</Text>
      </View>
    </Pressable>
  );
};

const Account = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <LinearGradient
        style={{
          height: Dimensions.get('window').height / 3
        }}
        locations={[0.24, 1]}
        colors={['#2ca3dc', 'rgba(6, 113, 211, 0)']}
      >
        <TouchableOpacity
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={() => navigation.navigate('Announce')}
        >
          <View></View>
          <Image
            style={[styles.icon, { marginRight: 40 }]}
            source={require('@/assets/lr1-notifi.png')}
          />
        </TouchableOpacity>
        <UserProfile />
      </LinearGradient>
      <ScrollView
        style={{ marginTop: 80 }}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          rowGap: 50
        }}
      >
        <MenuItem
          label="Thông tin tài khoản"
          onPress={() => navigation.navigate('AccountInfo')}
          iconSource={require('@/assets/lr1-profile.png')}
        />
        <MenuItem
          label="Sự kiện đã lưu"
          onPress={() => navigation.navigate('MyEvent')}
          iconSource={require('@/assets/lr1-savedEvents.png')}
        />
        <MenuItem
          label="Cơ hội nghề nghiệp"
          onPress={() => navigation.navigate('Career')}
          iconSource={require('@/assets/lr1-careers.png')}
        />
        <MenuItem
          label="Cài đặt & bảo mật"
          onPress={() => navigation.navigate('Setting')}
          iconSource={require('@/assets/lr1-setting.png')}
        />
        <MenuItem
          label="Trung tâm hỗ trợ"
          onPress={() => navigation.navigate('Center')}
          iconSource={require('@/assets/lr1-supportCenter.png')}
        />
        <MenuItem
          label="Góp ý & báo lỗi"
          onPress={() => navigation.navigate('Review')}
          iconSource={require('@/assets/lr1-feedbacks.png')}
        />
        <MenuItem
          label="Đăng xuất"
          onPress={() => navigation.navigate('Welcome')}
          iconSource={require('@/assets/lr1-logOut.png')}
        />
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
  userId: {
    width: 96
  },
  userDepartment: {
    fontSize: FontSize.size_base
  }
});

export default Account;
