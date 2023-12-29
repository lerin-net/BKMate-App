import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color, FontSize, Border } from '@/theme/GlobalStyles';

function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.cardShadowBox, props?.cardStyle && props.cardStyle]}
      onPress={() => {
        props?.link &&
          navigation.navigate(props?.link, {
            buildingName: props?.buildingName,
            locationName: props?.locationName,
            locationImage: props?.locationImage
          });
      }}
    >
      <Image
        style={[styles.imageIcon, props?.imageStyle && props.imageStyle]}
        contentFit="cover"
        source={props.image}
      />
      {props.name && (
        <Text
          style={[styles.buildingName, props?.textStyle && props.textStyle]}
        >
          {props.name}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    height: 144,
    overflow: 'hidden',
    backgroundColor: Color.white
  },
  imageIcon: {
    height: '100%'
  },
  buildingName: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontWeight: '500',
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    color: Color.white,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  }
});

export default Card;
