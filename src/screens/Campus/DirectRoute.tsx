import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'expo-image';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { Color, Border } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import MapView, { LatLng, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import GoBackButton from '@/components/GoBackButton';
import { useRoute } from '@react-navigation/native';
import { locations } from '@/constant/building';

const DirectRoute = () => {
  const route = useRoute();
  //@ts-ignore
  const { buildingName } = route.params;
  const targetLocation = locations.find((item) => item.id === buildingName);
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  }>(locations[1].location);
  const [destination, setDestination] = useState(targetLocation?.location);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [zoomLevel, setZoomLevel] = useState(0);
  const [startDirection, setStartDirection] = useState(false);

  const handleStartDirection = () => {
    setStartDirection(!startDirection);
  };

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied');
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    setCurrentLocation(current);
  };

  const handleRegionChangeComplete = (region: any) => {
    setZoomLevel(region.latitudeDelta);
  };

  const mapRef = useRef<MapView | null>(null);

  const showLocation = () => {
    return (
      zoomLevel < 0.01 &&
      locations.map((item) => (
        <Marker
          key={item.id}
          coordinate={item.location}
          title={item.title}
          image={item.image}
        />
      ))
    );
  };

  const convertDistance = (distance: number) => {
    if (distance < 1) {
      distance *= 1000;
      distance = Math.round(distance);
      return distance.toFixed(2) + ' m';
    }
    return Math.round(distance).toString() + ' km';
  };

  useEffect(() => {
    getLocationPermission();
    setTimeout(() => {
      mapRef.current?.fitToCoordinates([currentLocation, destination], {
        edgePadding: {
          bottom: 200,
          right: 50,
          top: 150,
          left: 50
        },
        animated: true
      });
    }, 300);
  }, [currentLocation, destination]);

  if (!currentLocation || !destination) return null;

  return (
    <BaseLayout>
      <GoBackButton style={styles.header} toPage="Quay về" />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <MapView
          style={styles.map}
          ref={mapRef}
          initialRegion={{
            latitude: 10.880685267971103,
            longitude: 106.80544956656931,
            latitudeDelta: 0.009,
            longitudeDelta: 0.004
          }}
          showsUserLocation
          showsMyLocationButton
          followsUserLocation
          onRegionChangeComplete={handleRegionChangeComplete}
        >
          {showLocation()}
          <Marker
            coordinate={destination as LatLng}
            title={targetLocation?.title}
            zIndex={1}
          />
          {startDirection && (
            <MapViewDirections
              origin={currentLocation}
              destination={destination}
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
                setDistance(convertDistance(result.distance));
                setDuration(Math.round(result.duration).toString() + ' phút');
              }}
              onError={(errorMessage) => {
                console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
        <View
          style={{
            width: '100%',
            backgroundColor: '#1f1d3d'
          }}
        >
          <Text style={styles.title}>{targetLocation?.title}</Text>
          <View style={styles.info}>
            <Text
              style={{ alignSelf: 'center', fontSize: 25, fontWeight: '700' }}
            >
              {startDirection ? `${distance} - ${duration}` : ``}
            </Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.infoContent}>
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
            <Text style={{ fontSize: 20, fontWeight: '700' }}>
              {targetLocation?.title}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.startButton,
              startDirection && { backgroundColor: '#7D0A0A' }
            ]}
            onPress={handleStartDirection}
          >
            <Text style={[{ color: Color.white, fontSize: 18 }]}>
              {!startDirection ? 'Bắt đầu' : 'Kết thúc'}
            </Text>
          </TouchableOpacity>
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
  },
  map: {
    height: '55%'
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 10,
    fontWeight: '700'
  },
  info: {
    backgroundColor: 'white',
    marginTop: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 10
  },
  infoContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    rowGap: 20
  },
  startButton: {
    borderRadius: Border.br_base,
    backgroundColor: Color.deepskyblue_200,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 150
  }
});

export default DirectRoute;
