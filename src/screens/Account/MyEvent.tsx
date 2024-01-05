import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity as GestureTouchableOpacity,
  ScrollView as GestureScrollView
} from 'react-native';
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
import GoBackButton from '@/components/GoBackButton';
import { pastEvents, upcomingEvent } from '@/constant/events';

type EventCardProps = {
  date: string;
  title: string;
  onPress: () => void;
};

const EventCard: React.FC<EventCardProps> = ({ date, title, onPress }) => (
  <GestureTouchableOpacity onPress={onPress} style={styles.eventCardInner}>
    <Image
      style={styles.eventLogoIcon}
      contentFit="cover"
      source={require('@/assets/event-logo.png')}
    />
    <View>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventDate}>{date}</Text>
    </View>
  </GestureTouchableOpacity>
);

type ButtonProps = {
  style?: object;
  text: string;
  color: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ style, text, color, onPress }) => (
  <GestureTouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonText, { color }]}>{text}</Text>
  </GestureTouchableOpacity>
);

const MyEvent = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState('upcoming'); // 'upcoming' or 'past'
  const [totalEvents, setTotalEvents] = useState(0);

  const renderEventCards = () => {
    const eventList =
      selectedButton === 'upcoming' ? upcomingEvent : pastEvents;
    return eventList.map((event, index) => (
      <EventCard
        key={index}
        date={event.date}
        title={event.title}
        onPress={() => navigation.navigate('EventDetail' as never)}
      />
    ));
  };
  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  useEffect(() => {
    setTotalEvents(
      selectedButton === 'upcoming' ? upcomingEvent.length : pastEvents.length
    );
  }, [selectedButton]);

  return (
    <BaseLayout>
      <View style={{ paddingLeft: 20, paddingVertical: 30, rowGap: 20 }}>
        <GoBackButton />
        <Text style={styles.sKinCa1}>Sự kiện của tôi</Text>
        <GestureScrollView contentContainerStyle={styles.eventList} horizontal>
          <Button
            style={[
              styles.button,
              selectedButton === 'upcoming' && styles.selectedButton
            ]}
            text="Sự kiện sắp tới"
            color={
              selectedButton === 'upcoming' ? Color.deepskyblue_200 : '#909090'
            }
            onPress={() => handleButtonPress('upcoming')}
          />
          <Button
            style={[
              styles.button,
              selectedButton === 'past' && styles.selectedButton
            ]}
            text="Đã diễn ra"
            color={
              selectedButton === 'past' ? Color.deepskyblue_200 : '#909090'
            }
            onPress={() => handleButtonPress('past')}
          />
        </GestureScrollView>
        <Text style={styles.eventCount}>{totalEvents} Sự kiện</Text>
      </View>
      <GestureScrollView style={{ flex: 1 }}>
        <LinearGradient
          style={styles.navBarBackground}
          locations={[0, 1]}
          colors={['rgba(66, 133, 244, 0.3)', 'rgba(66, 133, 244, 0)']}
        >
          {renderEventCards()}
        </LinearGradient>
      </GestureScrollView>
    </BaseLayout>
  );
};

const commonButtonStyle = {
  borderRadius: Border.br_21xl,
  justifyContent: 'center',
  alignItems: 'center',
  width: Dimensions.get('window').width * 0.5,
  height: 55
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
  selectedButton: {
    backgroundColor: '#cbd6ff',
    color: Color.deepskyblue_200
  },
  button: commonButtonStyle,
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: FontSize.size_xl
  },
  pastEvents: {
    ...commonButtonStyle,
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
