import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Border,
  FontFamily,
  Padding,
  Color,
  FontSize
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';

const ScanQR = () => {
  const navigation = useNavigation();

  return (
    <BaseLayout>
      <View style={styles.content}>
        <Text style={[styles.title]}>Quét mã QR hoặc chọn ảnh từ thiết bị</Text>
        <Image
          style={styles.qrIcon}
          contentFit="cover"
          source={require('@/assets/icons8qrcode80-1.png')}
        />
        <View style={styles.buttonField}>
          <Pressable style={[styles.smButton]}>
            <Image
              style={styles.lightIcon}
              contentFit="cover"
              source={require('@/assets/live--sun.png')}
            />
          </Pressable>
          <Pressable style={[styles.lgButton]}>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require('@/assets/media--image-01.png')}
            />
          </Pressable>
          <Pressable
            style={[styles.smButton]}
            onPress={() => navigation.navigate('Home')}
          >
            <Image
              style={styles.backIcon}
              contentFit="cover"
              source={require('@/assets/vector-7.png')}
            />
          </Pressable>
        </View>
      </View>
    </BaseLayout>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Color.deepskyblue_200,
    marginVertical: height * 0.1
  },
  qrIcon: {
    height: width * 0.6,
    width: width * 0.6
  },
  buttonField: {
    marginTop: height * 0.2,
    flexDirection: 'row',
    columnGap: width * 0.1
  },
  smButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.deepskyblue_200,
    borderRadius: 40,
    width: 70,
    height: 70
  },
  lightIcon: {
    width: 32,
    height: 32
  },
  lgButton: {
    backgroundColor: Color.deepskyblue_200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 90,
    height: 90
  },
  imageIcon: {
    width: 48,
    height: 48
  },
  backIcon: {
    width: 10,
    height: 17
  }
});

export default ScanQR;
