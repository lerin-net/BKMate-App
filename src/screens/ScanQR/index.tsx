import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'expo-image';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Linking,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color } from '@/theme/GlobalStyles';
import BaseLayout from '@/layouts/BaseLayout';
import { Camera, FlashMode, AutoFocus } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanQR = () => {
  const navigation = useNavigation();
  const [permission, setPermission] = useState<boolean | null>(null);
  const [flash, setFlash] = useState(FlashMode.off);
  const cameraRef = useRef(null);
  const [scanData, setScanData] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState('');

  const toggleFlash = () => {
    setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off);
  };

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    const supported = await Linking.canOpenURL(data);
    if (supported) {
      await Linking.openURL(data);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      });

      if (!result.canceled) {
        const selectedAsset = result.assets[0];

        if (selectedAsset) {
          const uri = selectedAsset.uri;
          setImage(uri);

          // Use BarCodeScanner to decode the QR code from the selected image
          const decodedBarcodeImage = await BarCodeScanner.scanFromURLAsync(
            uri,
            [BarCodeScanner.Constants.BarCodeType.qr]
          );

          if (decodedBarcodeImage && decodedBarcodeImage.length > 0) {
            const scannedData = decodedBarcodeImage[0].data;
            setScanData(scannedData);

            // You can now use the scanned data as needed
            console.log('Scanned QR Code:', scannedData);

            const supported = await Linking.canOpenURL(scannedData);
            if (supported) {
              await Linking.openURL(scannedData);
            }
          } else {
            console.log('No QR code found in the selected image.');
          }
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  return (
    <BaseLayout>
      <Text style={[styles.title]}>Quét mã QR hoặc chọn ảnh từ thiết bị</Text>
      <View style={styles.cameraContainer}>
        {permission ? (
          <>
            <Camera
              style={styles.camera}
              flashMode={flash}
              ref={cameraRef}
              onBarCodeScanned={handleBarCodeScanned}
              autoFocus={AutoFocus.on}
              barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
              }}
            />
          </>
        ) : (
          <Text>No camera permission</Text>
        )}
      </View>
      <View style={styles.buttonField}>
        <TouchableOpacity
          style={[styles.smButton]}
          onPress={() => toggleFlash()}
        >
          <Image
            style={styles.lightIcon}
            contentFit="cover"
            source={require('@/assets/live--sun.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.lgButton]} onPress={() => pickImage()}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require('@/assets/media--image-01.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.smButton]}
          onPress={() => navigation.navigate('Home' as never)}
        >
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require('@/assets/vector-7.png')}
          />
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Color.deepskyblue_200,
    marginVertical: height * 0.1,
    alignSelf: 'center'
  },
  qrIcon: {
    height: width * 0.6,
    width: width * 0.6
  },
  buttonField: {
    marginVertical: height * 0.1,
    flexDirection: 'row',
    columnGap: width * 0.1,
    alignSelf: 'center'
  },
  smButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.deepskyblue_200,
    borderRadius: 40,
    width: 70,
    height: 70
  },
  lightIcon: {
    width: 32,
    height: 32
  },
  lgButton: {
    backgroundColor: Color.deepskyblue_200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 90,
    height: 90
  },
  imageIcon: {
    width: 48,
    height: 48
  },
  backIcon: {
    width: 10,
    height: 17
  },
  cameraContainer: {
    height: width * 0.6,
    width: width * 0.6,
    borderRadius: 10,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.2,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 20
  }
});

export default ScanQR;
