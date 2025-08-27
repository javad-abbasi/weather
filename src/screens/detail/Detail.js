import {
  Image,
  Pressable,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import style from './style';
import imagePath from '../../constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { s, vs } from 'react-native-size-matters';
import colors from '../../styles/colors';
import { getFontFamily } from '../../assets/fonts/helper';

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const { airData, locationData, forecastData } = route.params;
  const airConditionDetails = [
    { id: 1, name: 'UV-Index', value: locationData?.current?.uv },
    { id: 2, name: 'Wind', value: locationData?.current?.wind_kph + ' km/h' },
    { id: 3, name: 'Humidity', value: locationData?.current?.humidity + '%' },
    { id: 4, name: 'Visibility', value: locationData?.current?.vis_km + ' km' },
    {
      id: 5,
      name: 'Feels Like',
      value: locationData?.current?.feelslike_c + '℃',
    },
    {
      id: 6,
      name: 'Chance of rain',
      value: locationData?.current?.precip_mm + ' mm',
    },
    {
      id: 7,
      name: 'Pressure',
      value: locationData?.current?.pressure_mb + ' hPa',
    },
    {
      id: 8,
      name: 'Sunset',
      value: forecastData?.forecastday?.[0]?.astro?.sunset || 'N/A',
    },
  ];

  return (
    <WraperContainer>
      <View style={style.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={style.backImg} source={imagePath.back} />
        </Pressable>
        <Text style={style.textHeader}>{'Air Conditions'}</Text>
        <View style={{ width: '6%' }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.cityView}>
          <Text style={style.cityTitle}>{locationData?.location?.name}</Text>
          <Text style={style.citysubTitle}>
            {`Chance of rain: ${locationData?.current?.precip_mm} mm`}
          </Text>
          <Image
            style={style.cityImgStyle}
            source={
              locationData?.current?.is_day
                ? imagePath.sun256
                : imagePath.coludy_256
            }
          />
          <Text style={{ ...style.cityTitle, marginTop: vs(14) }}>
            {locationData?.current?.temp_c + ' ℃'}
          </Text>

          <FlatList
            scrollEnabled={false}
            style={{ marginTop: vs(32) }}
            ItemSeparatorComponent={() => <View style={{ height: vs(12) }} />}
            numColumns={2}
            data={airConditionDetails}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: '48%',
                    backgroundColor: colors.cardBgColor,
                    paddingHorizontal: s(18),
                    paddingVertical: vs(12),
                    borderRadius: s(12),
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: getFontFamily('Inter', '500'),
                      fontSize: s(14),
                      color: colors.textGray,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: getFontFamily('Inter', '500'),
                      fontSize: s(14),
                      color: colors.whiteGray,
                    }}
                  >
                    {item.value}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </WraperContainer>
  );
};

export default Detail;

const styles = StyleSheet.create({});
