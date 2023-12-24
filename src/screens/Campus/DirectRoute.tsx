import React, { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import MapView, { LatLng, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import GoBackButton from '@/components/GoBackButton';
import { ScrollView } from 'react-native-gesture-handler';

const colorCircle = require('@/assets/colorCircle.png');

const locations = [
  {
    title: 'H6',
    location: {
      latitude: 10.87965733840307,
      longitude: 106.80582347535405
    },
    description: 'Tòa nhà H6'
  },
  {
    title: 'H1',
    location: {
      latitude: 10.880394927706838,
      longitude: 106.8042666663415
    },
    description: 'Tòa nhà H1'
  }
];

const DirectRoute = () => {
  const navigation = useNavigation();
  const onRegionChange = (region) => {
    // console.log(region);
  };
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 10.879657338403,
    longitude: 106.80582347535405
  });
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    setCurrentLocation(current);
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  const showLocation = () => {
    return locations.map((item, index) => (
      <Marker
        key={index}
        coordinate={item.location}
        title={item.title}
        description={item.description}
      />
    ));
  };

  return (
    <BaseLayout>
      <GoBackButton style={styles.header} toPage="Quay về" />
      <View
        style={{
          flex: 1
        }}
      >
        <MapView
          style={styles.map}
          onRegionChange={onRegionChange}
          initialRegion={{
            latitude: 10.880685267971103,
            longitude: 106.80544956656931,
            latitudeDelta: 0.009, // Mức độ zoom theo chiều dọc
            longitudeDelta: 0.004 // Mức độ zoom theo chiều ngang
          }}
        >
          {showLocation()}
          <Marker
            coordinate={currentLocation}
            title="Vị trí hiện tại"
            image={colorCircle}
            style={{ width: 5, height: 5 }}
          />
          <MapViewDirections
            origin={currentLocation}
            destination={locations[1].location}
            apikey="AIzaSyCQLj8tTliQQs6RbtVpRsLviCS5rBfpJ1c"
            strokeColor="#3559E0"
            strokeWidth={5}
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`
              );
            }}
            onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);
              setDistance(result.distance);
              setDuration(result.duration);
              // mapView.fitToCoordinates(result.coordinates, {
              //   edgePadding: {
              //     right: width / 20,
              //     bottom: height / 20,
              //     left: width / 20,
              //     top: height / 20
              //   }
              // });
            }}
            onError={(errorMessage) => {
              console.log('GOT AN ERROR');
            }}
          />
        </MapView>

        <View
          style={{
            width: '100%',
            backgroundColor: '#1f1d3d'
          }}
        >
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 25,
              marginTop: 10,
              fontWeight: '700'
            }}
          >
            Tòa nhà H1
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 15,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              paddingVertical: 10
            }}
          >
            <Text
              style={{ alignSelf: 'center', fontSize: 25, fontWeight: '700' }}
            >
              {Math.round(distance)} km - {Math.round(duration)} phút
            </Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: 'white',
            justifyContent: 'center',
            padding: 20,
            rowGap: 20
          }}
        >
          <View style={{ flexDirection: 'row', columnGap: 5 }}>
            <Image
              style={{ width: 30, height: 30 }}
              contentFit="contain"
              source={require('@/assets/mappin.png')}
            />
            <Text style={{ fontSize: 20, fontWeight: '700' }}>
              Vị trí hiện tại
            </Text>
          </View>
          <View style={{ flexDirection: 'row', columnGap: 5 }}>
            <Image
              style={{ width: 30, height: 30 }}
              contentFit="contain"
              source={require('@/assets/mappin.png')}
            />
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Tòa nhà H1</Text>
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    rowGap: 20
    // borderWidth: 2
  },
  map: {
    width: '100%',
    height: '60%'
  }
});

export default DirectRoute;
