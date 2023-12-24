import * as React from 'react';
import { Linking, Text, StyleSheet, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import {
  Border,
  FontSize,
  FontFamily,
  Color,
  Padding
} from '@/theme/GlobalStyles';
import { ImageStyle } from 'react-native';

const ChiTitSKin = () => {
  const navigation = useNavigation();

  // Call REST GET API from server localhost:3001/club-events
  const domain = process.env.API_URL;
  const resourse = 'club-events';
  const [clubEvents, setClubEvents] = React.useState([]);
  React.useEffect(() => {
    const fetchClubEvents = async () => {
      const clubEvents = await fetch(
        `${domain}/${resourse}`
      ).then((res) => res.json());
      setClubEvents(clubEvents);
    };
    fetchClubEvents();
  }, []);

  console.log('clubEvents', clubEvents);
  return (
    <View style={styles.chiTitSKin1}>
      <View style={styles.content}>
        <View style={[styles.chiTit, styles.chiTitPosition]}>
          <Text style={styles.niDung}>
              
          </Text>
          <Text
            style={[styles.title, styles.titleTypo]}
          >
            
          </Text>
        </View>
        <View style={[styles.nhSKin1, styles.nhSKin1Layout]}>
          <Image
            style={[styles.image17Icon, styles.time1Position] as ImageStyle}
            contentFit="cover"
            source={require('@/assets/image-17.png')}
          />
        </View>
      </View>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backChild}
          contentFit="cover"
          source={require('@/assets/vector-9.png')}
        />
        <Text style={[styles.back1, styles.back1Typo]}>Sự kiện</Text>
      </Pressable>
      <View style={[styles.navBar, styles.barFlexBox]}>
        <Pressable
          style={styles.homeFlexBox}
          onPress={() => navigation.navigate('Announce' as never)}
        >
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require('@/assets/vector.png')}
          />
          <Text style={[styles.thngBo, styles.titleTypo1]}>Thông báo</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate('Home' as never)}
        >
          <Image
            style={styles.iconlyboldhome}
            contentFit="cover"
            source={require('@/assets/iconlyboldhome.png')}
          />
          <Text style={[styles.thngBo, styles.titleTypo1]}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homeFlexBox]}
          onPress={() => navigation.navigate('ThngTinCNhn' as never)}
        >
          <Image
            style={ styles.iconlyboldhome as ImageStyle}
            contentFit="cover"
            source={require('@/assets/iconlylightprofile.png')}
          />
          <Text style={[styles.thngBo, styles.titleTypo1]}>Tài khoản</Text>
        </Pressable>
      </View>
      <View style={[styles.statusBar, styles.barFlexBox]}>
        <View style={styles.statusBar1}>
          <Image
            style={styles.uiIcon as ImageStyle}
            contentFit="cover"
            source={require('@/assets/ui.png')}
          />
          <View style={styles.time}>
            <Text style={[styles.time1, styles.back1Typo]}>9:27</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chiTitPosition: {
    borderRadius: Border.br_3xs,
    left: -1,
    position: 'absolute',
    overflow: 'hidden'
  },
  titleTypo: {
    textAlign: 'center',
    fontSize: FontSize.size_mini
  },
  nhSKin1Layout: {
    height: 294,
    top: 0,
    width: 383
  },
  time1Position: {
    left: 0,
    position: 'absolute'
  },
  back1Typo: {
    letterSpacing: 0,
    fontFamily: FontFamily.roboto
  },
  barFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute'
  },
  titleTypo1: {
    fontWeight: '700',
    fontFamily: FontFamily.roboto
  },
  homeFlexBox: {
    width: 67,
    justifyContent: 'center',
    alignItems: 'center'
  },
  httpbitly3qtihal: {
    // Remove the textDecoration property
    // textDecoration: 'underline'
  },
  niDung: {
    top: 62,
    left: 12,
    fontSize: FontSize.size_smi,
    letterSpacing: 0.4,
    width: 369,
    height: 368,
    textAlign: 'left',
    color: Color.colorsBlack,
    fontFamily: FontFamily.roboto,
    position: 'absolute'
  },
  title: {
    top: 15,
    left: 11,
    letterSpacing: 0.5,
    color: Color.slateblue,
    width: 359,
    height: 37,
    fontWeight: '700',
    fontFamily: FontFamily.roboto,
    position: 'absolute'
  },
  chiTit: {
    top: 309,
    backgroundColor: Color.whitesmoke_100,
    height: 462,
    width: 383
  },
  image17Icon: {
    height: 294,
    top: 0,
    width: 383
  },
  nhSKin1: {
    borderRadius: Border.br_3xs,
    left: -1,
    position: 'absolute',
    overflow: 'hidden'
  },
  content: {
    top: 108,
    left: 23,
    height: 771,
    width: 383,
    position: 'absolute',
    backgroundColor: Color.white
  },
  backChild: {
    width: 10,
    height: 17
  },
  back1: {
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    color: Color.deepskyblue_300,
    marginLeft: 10,
    textAlign: 'left'
  },
  back: {
    top: 67,
    height: 31,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: Padding.p_10xs,
    alignItems: 'center',
    flexDirection: 'row',
    width: 428,
    left: 0,
    position: 'absolute'
  },
  vectorIcon2: {
    width: 26,
    height: 26
  },
  thngBo: {
    fontSize: FontSize.size_3xs,
    textAlign: 'right',
    marginTop: 4,
    color: Color.colorsBlack
  },
  iconlyboldhome: {
    width: 24,
    height: 24
  },
  home: {
    marginLeft: 8
  },
  navBar: {
    top: 889,
    borderStyle: 'solid',
    borderColor: '#57bfe7',
    borderTopWidth: 1,
    height: 57,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 428,
    backgroundColor: Color.white
  },
  uiIcon: {
    top: 12,
    right: 15,
    width: 68,
    height: 16,
    position: 'absolute'
  },
  time1: {
    marginTop: -5.5,
    top: '50%',
    width: 54,
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    color: Color.colorsBlack
  },
  time: {
    top: 5,
    left: 16,
    width: 56,
    height: 23,
    position: 'absolute'
  },
  statusBar1: {
    height: 42,
    width: 428
  },
  statusBar: {
    backgroundColor: Color.gray_600,
    paddingTop: Padding.p_mini,
    justifyContent: 'center',
    top: 0,
    overflow: 'hidden'
  },
  chiTitSKin1: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: '100%',
    height: 943,
    overflow: 'hidden',
    backgroundColor: Color.white
  }
});

export default ChiTitSKin;
