import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontSize,
  Border,
  Padding,
  FontFamily
} from '@/theme/GlobalStyles';

const subjectList = [
  'Tính năng',
  'Nội dung',
  'Dịch vụ',
  'Trung tâm hỗ trợ',
  'Khác'
];
const Feedback = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(subjectList[1]);
  const handleSendFeedback = () => {
    navigation.navigate('Thankyou');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={{ flex: 1 }}
    >
      <LinearGradient
        style={styles.container}
        locations={[0, 1]}
        colors={['#a5f3fc', '#2aa1dc']}
      >
        <Text style={styles.sorryText}>
          Xin lỗi vì bạn đã có trải nghiệm không tốt.
        </Text>
        <Text style={styles.generalText}>
          Có điều gì mà chúng tôi nên cải thiện?
        </Text>
        <Text style={styles.label}>Chọn chủ đề</Text>
        <View style={styles.buttonContainer}>
          {subjectList.map((subject, index) => (
            <TouchableOpacity
              onPress={() => setSelectedSubject(subject)}
              key={index}
              style={[
                styles.subjectButton,
                selectedSubject === subject && {
                  backgroundColor: '#EEF2FF'
                }
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedSubject === subject && { color: '#000' }
                ]}
              >
                {subject}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          multiline={true}
          numberOfLines={8}
          style={styles.textInput}
          placeholder="Hãy cho chúng tôi biết trải nghiệm và suy nghĩ của bạn..."
          value={value}
          onChangeText={(val) => setValue(val)}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendFeedback}
        >
          <Text style={[styles.buttonText, { color: '#000' }]}>Gửi</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  sorryText: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: '700',
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  generalText: {
    fontFamily: FontFamily.robotoFlex,
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  label: {
    color: 'white',
    marginTop: 50,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  subjectButton: {
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: Color.white,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontSize.size_base
  },
  textInput: {
    backgroundColor: Color.gray_500,
    borderRadius: 15,
    marginVertical: 50,
    padding: 5,
    width: '100%',
    fontSize: 18
  },
  sendButton: {
    backgroundColor: '#EEF2FF',
    width: '100%',
    padding: 15,
    borderRadius: 10
  }
});

export default Feedback;
