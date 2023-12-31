import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import { MenuItem } from '.';
import GoBackButton from '@/components/GoBackButton';

const Center = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('');

  return (
    <BaseLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{ flex: 1 }}
      >
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 30
          }}
        >
          <GoBackButton />
          <Pressable onPress={() => navigation.navigate('AccountInfo')}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('@/assets/profile-picture.png')}
            />
          </Pressable>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Trung Tâm Hỗ Trợ</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={{ width: '100%' }}
            placeholder="Tìm kiếm"
            value={value}
            onChangeText={(val) => setValue(val)}
          />
        </View>

        <ScrollView
          style={{ marginTop: 30 }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 50
          }}
        >
          <MenuItem
            label="Tài khoản"
            iconSource={require('@/assets/lr1-profile.png')}
          />
          <MenuItem
            label="Công tác tuyển sinh"
            iconSource={require('@/assets/lr5-recruiting.png')}
          />
          <MenuItem
            label="Phòng Đào tạo"
            iconSource={require('@/assets/lr5-edu.png')}
          />
          <MenuItem
            label="Bản tin sinh viên"
            iconSource={require('@/assets/lr5-news.png')}
          />
          <MenuItem
            label="MyBK"
            iconSource={require('@/assets/lr5-myBK.png')}
          />
          <MenuItem
            label="Ký túc xá"
            iconSource={require('@/assets/lr5-ktx.png')}
          />
          <MenuItem
            label="Nghiên cứu & Hợp tác"
            iconSource={require('@/assets/lr5-RnD.png')}
          />
          <MenuItem
            label="Tham quan ảo 3D/360"
            iconSource={require('@/assets/lr5-3D.png')}
          />
          <MenuItem
            label="Tìm hiểu về trường"
            iconSource={require('@/assets/lr5-school.png')}
          />
          <MenuItem
            label="Ngành và chuyển ngành"
            iconSource={require('@/assets/lr5-faculty.png')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30
  },
  headerText: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.deepskyblue_100
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  icon: {
    width: 30,
    height: 24
  },
  searchIcon: {
    width: 27,
    height: 18,
    marginLeft: 'auto'
  },
  searchButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: Border.br_21xl,
    paddingHorizontal: Padding.p_xl,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchButtonText: {
    color: '#7d7d7d',
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    textAlign: 'left'
  },
  searchText: {
    marginLeft: 8,
    color: '#acacac',
    fontWeight: '300',
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    fontFamily: FontFamily.robotoFlex
  },
  inputBox: {
    width: '80%',
    height: 40,
    borderColor: '#d5dfe9',
    borderWidth: 1,
    borderRadius: Border.br_sm_7,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  }
});

export default Center;
