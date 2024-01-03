import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Linking
} from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, Border } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import GoBackButton from '@/components/GoBackButton';
import { MenuItem } from '.';

const Center = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  return (
    <BaseLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <GoBackButton />
          <Pressable
            onPress={() => navigation.navigate('AccountInfo' as never)}
          >
            <Image
              style={styles.icon}
              source={require('@/assets/profile-picture.png')}
            />
          </Pressable>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Trung Tâm Hỗ Trợ</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            value={value}
            onChangeText={(val) => setValue(val)}
          />
        </View>

        <ScrollView contentContainerStyle={styles.menuContainer}>
          <MenuItem
            label="Tài khoản"
            iconSource={require('@/assets/lr1-profile.png')}
            onPress={() => navigation.navigate('AccountInfo' as never)}
          />
          <MenuItem
            label="Công tác tuyển sinh"
            iconSource={require('@/assets/lr5-recruiting.png')}
            onPress={() => Linking.openURL('https://tuyensinh.hcmut.edu.vn/')}
          />
          <MenuItem
            label="Phòng Đào tạo"
            iconSource={require('@/assets/lr5-edu.png')}
            onPress={() => Linking.openURL('http://www.aao.hcmut.edu.vn/')}
          />
          <MenuItem
            label="Bản tin sinh viên"
            iconSource={require('@/assets/lr5-news.png')}
            onPress={() => Linking.openURL('https://hcmut.edu.vn/')}
          />
          <MenuItem
            label="MyBK"
            iconSource={require('@/assets/lr5-myBK.png')}
            onPress={() =>
              Linking.openURL('https://mybk.hcmut.edu.vn/my/index.action')
            }
          />
          <MenuItem
            label="Ký túc xá"
            iconSource={require('@/assets/lr5-ktx.png')}
            onPress={() =>
              Linking.openURL('https://hcmut.edu.vn/news/item/11711')
            }
          />
          <MenuItem
            label="Nghiên cứu & Hợp tác"
            iconSource={require('@/assets/lr5-RnD.png')}
            onPress={() => Linking.openURL('https://iro.hcmut.edu.vn/')}
          />
          <MenuItem
            label="Tham quan ảo 3D/360"
            iconSource={require('@/assets/lr5-3D.png')}
            onPress={() =>
              Linking.openURL(
                'https://experience.arcgis.com/experience/b5d890fdaab94bc584eccfd0b010d017/page/C%C6%A1-s%E1%BB%9F-L%C3%BD-Th%C6%B0%E1%BB%9Dng-Ki%E1%BB%87t/'
              )
            }
          />
          <MenuItem
            label="Tìm hiểu về trường"
            iconSource={require('@/assets/lr5-school.png')}
            onPress={() => navigation.navigate('AboutSchool' as never)}
          />
          <MenuItem
            label="Ngành và chuyển ngành"
            iconSource={require('@/assets/lr5-faculty.png')}
            onPress={() => navigation.navigate('StudyProgram' as never)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  header: {
    paddingHorizontal: 30
  },
  headerText: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.deepskyblue_100
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
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  input: {
    flex: 1
  },
  menuContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 50
  },
  icon: {
    width: 30,
    height: 24
  }
});

export default Center;
