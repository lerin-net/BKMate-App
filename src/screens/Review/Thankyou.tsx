import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Thankyou = () => {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.imageIcon}
          source={require('@/assets/lr6-goodFeedback.png')}
        />
        <Text style={styles.thankYouText}>
          Xin chân thành cảm ơn góp ý của bạn!
        </Text>
        <Text style={styles.infoText}>
          Góp ý của bạn sẽ được xem xét bởi Bộ phận CSKH và Trung tâm hỗ trợ, và
          được sử dụng để cải thiện trải nghiệm của bạn trong lần tới!
        </Text>
        <TouchableOpacity style={styles.returnButton} onPress={handleGoHome}>
          <Text style={styles.returnButtonText}>Trở về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    flex: 1
  },
  imageIcon: {
    width: 64,
    height: 64
  },
  thankYouText: {
    fontWeight: '700',
    color: '#a6eefa',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40
  },
  returnButton: {
    backgroundColor: '#52bce7',
    width: Dimensions.get('window').width * 0.8,
    padding: 15,
    borderRadius: 10,
    marginTop: 40
  },
  returnButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: 'white'
  }
});

export default Thankyou;
