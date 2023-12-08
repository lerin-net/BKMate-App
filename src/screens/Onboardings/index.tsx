import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { FontSize, Color, Border } from '@/theme/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import Study from '@/assets/svg/Study.svg';
import School from '@/assets/svg/School.svg';
import QRCode from '@/assets/svg/QRCode.svg';

const { width, height } = Dimensions.get('window');

const slides = () => [
  {
    id: 1,
    title: <Text style={[styles.appName]}>BKMate</Text>,
    description: (
      <>
        <Text>Chào mừng bạn đến với{'\n'}</Text>
        <Text style={{ fontWeight: '700' }}>
          BKMate {'\n'} Người bạn đồng hành tin cậy {'\n'}
        </Text>
        <Text>
          trong hành trình đại học tại Đại học Bách Khoa TP.Hồ Chí Minh. Hãy
          cùng khám phá nhé!
        </Text>
      </>
    ),
    icon: (
      <Image
        style={styles.logo}
        contentFit="cover"
        source={require('@/assets/01-logobachkhoasang-1.png')}
      />
    ),
    nextPage: ''
  },
  {
    id: 2,
    title: 'Khám phá trường và cơ sở vật chất',
    description:
      `Dạo quanh trường và khám phá cơ sở vật chất, tìm kiếm phòng học, thư
    viện và những địa điểm quan trọng để tối ưu hóa trải nghiệm học tập của bạn.
    Bắt đầu ngay bây giờ nhé!`
        .replace(/\s+/g, ' ')
        .trim(),
    icon: <School style={styles.icon} fill="white" />,
    nextPage: ''
  },
  {
    id: 3,
    title: 'Check-in và nhận tài liệu học tập',
    description:
      `Sử dụng mã QR để check-in nhanh chóng tại các điểm quan trọng trên Campus. 
    Nhận ngay tài liệu học tập quan trọng và tận hưởng trải nghiệm
    học tập hiệu quả với BKMate!`
        .replace(/\s+/g, ' ')
        .trim(),
    icon: <QRCode style={styles.icon} fill="white" />,
    nextPage: ''
  },
  {
    id: 4,
    title: 'Hệ sinh thái hỗ trợ toàn diện',
    description:
      `BKMate không chỉ là ứng dụng, mà còn là một phần của hệ sinh thái hỗ
      trợ toàn diện của Đại học Bách Khoa. Kết nối với các ứng dụng khác như
      MyBK và BKeL để có trải nghiệm học tập liền mạch và đầy đủ. Hãy chuẩn
      bị cho một hành trình đại học đáng nhớ nhé!`
        .replace(/\s+/g, ' ')
        .trim(),
    icon: <Study style={styles.icon} fill="white" />,
    nextPage: ''
  }
];

const Slide = ({ item }) => {
  return (
    <View style={[styles.content]}>
      {item.id === 1 && (
        <Image
          style={styles.backgroundItem}
          contentFit="cover"
          source={require('@/assets/ellipse-2.png')}
        />
      )}
      {item.icon}

      <Text style={[styles.title]}>{item.title}</Text>

      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>
  );
};

export default function Onboarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigation = useNavigation();
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const toHomePage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    });
  };

  const Footer = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          rowGap: 50
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          {/* Render indicator */}
          {slides().map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: Color.white,
                  width: 25
                }
              ]}
            />
          ))}
        </View>
        {currentSlideIndex !== slides().length - 1 ? (
          <View style={styles.buttonFiled}>
            <Pressable style={[styles.button]} onPress={toHomePage}>
              <Text style={[styles.buttonText]}>Skip</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.nextButton]}
              onPress={goToNextSlide}
            >
              <Text style={styles.buttonText}>{'>'}</Text>
            </Pressable>
          </View>
        ) : (
          <View style={[styles.buttonFiled, { justifyContent: 'center' }]}>
            <Pressable style={[styles.button]} onPress={toHomePage}>
              <Text style={[styles.buttonText]}>Bắt đầu</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  };
  return (
    <LinearGradient
      style={{ height: height }}
      locations={[0, 1]}
      colors={['#a4f2fc', '#2ca2dc']}
    >
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides()}
        contentContainerStyle={styles.screen}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    // overflow: "hidden",
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundItem: {
    position: 'absolute',
    top: height * -0.13,
    left: width * 0.2,
    width: width,
    height: width
  },
  icon: {
    marginTop: height * 0.1,
    width: width * 0.3,
    height: width * 0.3
  },
  logo: {
    marginTop: height * 0.1,
    width: width * 0.7,
    height: height * 0.25
  },
  title: {
    fontSize: 25,
    color: Color.white,
    textAlign: 'center',
    fontWeight: '600',
    width: width * 0.8
  },
  appName: {
    fontSize: FontSize.size_16xl,
    color: Color.white,
    textAlign: 'center',
    fontWeight: '600',
    width: width
  },
  descriptionText: {
    color: '#f5f5f5',
    width: width * 0.8,
    paddingVertical: height * 0.05,
    lineHeight: 35,
    fontSize: FontSize.size_5xl,
    textAlign: 'center'
  },
  indicator: {
    height: 5,
    width: 15,
    borderRadius: 3,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 3
  },
  buttonFiled: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: height * 0.05
  },
  button: {
    backgroundColor: Color.white,
    height: height * 0.07,
    width: width * 0.4,
    borderRadius: Border.br_3xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: FontSize.size_xl,
    color: '#30a4dd',
    fontWeight: '600'
  },
  nextButton: {
    backgroundColor: '#b8e5fb'
  }
});
