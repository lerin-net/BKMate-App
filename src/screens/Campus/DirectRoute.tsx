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
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

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
  const [currentLocation, setCurrentLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | undefined
  >(undefined);

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
    return locations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  return (
    <BaseLayout>
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
        <MapViewDirections
          origin={currentLocation}
          destination={locations[1].location}
          apikey="AIzaSyCQLj8tTliQQs6RbtVpRsLviCS5rBfpJ1c"
          strokeColor="#3559E0"
          strokeWidth={5}
        />
      </MapView>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  map: {
    zIndex: -1,
    width: '100%',
    height: '100%'
  }
});

export default DirectRoute;
