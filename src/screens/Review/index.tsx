import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily } from '../../theme/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Review = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.container}
      locations={[0, 1]}
      colors={['#a5f3fc', '#2aa1dc']}
    >
      <Text style={styles.notificationText}>
        {'Bạn có muốn chia sẻ \n góp ý hay báo cáo lỗi không?'}
      </Text>
      <View style={styles.buttonField}>
        <TouchableOpacity
          style={styles.feedbackButton}
          onPress={() => navigation.navigate('Thankyou')}
        >
          {renderFeedbackButton(
            'Mọi thứ ổn!',
            require('@/assets/lr6-good.png')
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.feedbackButton}
          onPress={() => navigation.navigate('Feedback')}
        >
          {renderFeedbackButton(
            'Tôi không hài lòng lắm!',
            require('@/assets/lr6-notsastified.png')
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.askMeLaterText}>Hãy hỏi tôi vào lúc khác!</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const renderFeedbackButton = (text, icon) => (
  <>
    <Text style={styles.feedbackButtonText}>{text}</Text>
    <Image style={styles.feedbackButtonIcon} source={icon} />
  </>
);

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  notificationText: {
    fontSize: FontSize.size_5xl,
    textAlign: 'center',
    color: Color.whitesmoke_200,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: '700',
    lineHeight: 40
  },
  buttonField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: height * 0.15,
    marginBottom: height * 0.2,
    columnGap: 40,
    justifyContent: 'center'
  },
  feedbackButton: {
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width * 0.4
  },
  feedbackButtonText: {
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    letterSpacing: 0,
    color: Color.whitesmoke_200,
    fontFamily: FontFamily.robotoFlex,
    marginBottom: 30
  },
  feedbackButtonIcon: {
    width: 64,
    height: 64
  },
  askMeLaterText: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.5,
    color: '#e4e4e4'
  }
});

export default Review;
