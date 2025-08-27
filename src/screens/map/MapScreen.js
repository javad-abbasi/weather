import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import MapView, { Marker } from 'react-native-maps';
import imagePath from '../../constants/imagePath';
import style from './style';
import axios from 'axios';
import { Current_Api } from '../../config/urls';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 36.567199,
    longitude: 53.062606,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [marker, setMarker] = useState({
    id: 1,
    title: 'Sari',
    coordinate: {
      latitude: 36.567199,
      longitude: 53.062606,
    },
    temprature: '',
    icon: imagePath.partlyCloudy,
  });

  const getWeatherData = async () => {
    try {
      const res = await axios.get(
        Current_Api([region.latitude, region.longitude]),
      );
      const weather = res.data;

      setMarker(prev => ({
        ...prev,
        temprature: weather?.current?.temp_c + ' ℃',
        icon: { uri: `https:${weather?.current?.condition?.icon}` }, // آیکون واقعی
        title: weather?.location?.name, // اسم شهر
      }));
    } catch (err) {
      console.log('Weather API Error:', err);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <WraperContainer>
      <MapView
        style={StyleSheet.absoluteFill}
        region={region}
        zoomEnabled={true}
        zoomControlEnabled={true}
        zoomTapEnabled={true}
        showsUserLocation={true}
      >
        <Marker coordinate={marker.coordinate} title={marker.title}>
          <View style={style.viewStyle}>
            <Text style={style.titleTxt}>{marker.title}</Text>
            <Image style={style.img} source={marker.icon} />
            <Text style={style.tmpTxt}>{marker.temprature}</Text>
          </View>
        </Marker>
      </MapView>
    </WraperContainer>
  );
};

export default MapScreen;
