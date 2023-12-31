import * as React from 'react';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import GoBackButton from '@/components/GoBackButton';

const MyEvent = () => {
  const navigation = useNavigation();

  const EventCard = ({ date, title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.eventCardInner}>
      <Image
        style={styles.eventLogoIcon}
        contentFit="cover"
        source={require('@/assets/event-logo.png')}
      />
      <View>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDate}>{date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <BaseLayout>
      <View style={{ paddingLeft: 20, paddingVertical: 30, rowGap: 20 }}>
        <GoBackButton />
        <Text style={styles.sKinCa1}>Sự kiện của tôi</Text>
        <ScrollView contentContainerStyle={styles.eventList} horizontal>
          <TouchableOpacity style={[styles.button, styles.upcomingEvents]}>
            <Text style={[styles.buttonText, { color: Color.deepskyblue_200 }]}>
              Sự kiện sắp tới
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text style={[styles.buttonText, { color: '#909090' }]}>
              Đã diễn ra
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.eventCount}>12 Sự kiện</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <LinearGradient
          style={styles.navBarBackground}
          locations={[0, 1]}
          colors={['rgba(66, 133, 244, 0.3)', 'rgba(66, 133, 244, 0)']}
        >
          <EventCard
            date="18 Dec 2023"
            title="Youth job fair 2023"
            onPress={() => navigation.navigate('EventDetail')}
          />
          <EventCard
            date="22 Dec 2023"
            title="Olympic Vật lý 2024"
            onPress={() => navigation.navigate('EventDetail')}
          />
          <EventCard
            date="26 Dec 2023"
            title="HCMUT football match 23-24"
            onPress={() => navigation.navigate('EventDetail')}
          />
          <EventCard
            date="28 Dec 2023"
            title="Sự kiện hướng nghiệp 2023"
            onPress={() => navigation.navigate('EventDetail')}
          />
        </LinearGradient>
      </ScrollView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: Border.br_31xl,
    overflow: 'hidden'
  },
  navBarBackground: {
    backgroundColor: 'transparent',
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    paddingVertical: 30,
    flex: 1
  },
  eventCard: {
    height: 88,
    width: Dimensions.get('window').width * 0.8,
    marginBottom: 8
  },
  eventCardInner: {
    backgroundColor: Color.whitesmoke_200,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    alignItems: 'center',
    padding: Padding.p_mini,
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 20
  },
  eventLogoIcon: {
    width: 48,
    height: 48,
    marginRight: 8
  },
  eventDate: {
    fontSize: FontSize.size_base,
    color: 'gray',
    fontFamily: FontFamily.roboto
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FontFamily.roboto
  },
  eventList: {
    flexDirection: 'row'
  },
  eventCount: {
    fontSize: FontSize.size_xl,
    fontWeight: '700',
    marginTop: 20
  },
  backButton: {
    width: 18,
    height: 29,
    marginRight: 8
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  sKinCa1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: '700'
  },
  upcomingEvents: {
    backgroundColor: '#cbd6ff'
  },
  button: {
    borderRadius: Border.br_21xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: 55
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: FontSize.size_xl
  },
  pastEvents: {
    borderRadius: Border.br_21xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.5,
    paddingVertical: 15
  },
  button1: {
    color: '#909090',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: FontSize.size_xl
  }
});

export default MyEvent;
