import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import style from './style';
import imagePath from '../../constants/imagePath';
import { s, vs } from 'react-native-size-matters';
import TodayWeatherInfo from '../../components/todayWeatherInfo/TodayWeatherInfo';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Current_Api, Forecast_Api } from '../../config/urls';
import moment from 'moment';

const Home = () => {
  const navigation = useNavigation();
  const [currentLatLong, setCurrentLatLong] = useState([36.5659, 53.0586]);
  const [currentLocationData, setCurrentLocationData] = useState();
  const [forecastData, setForecastData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const weekWeather = [
    { day: 'Monday', weather: 'Sunny', temperature: '34/21' },
    { day: 'Tuesday', weather: 'P-Cloudy', temperature: '32/19' },
    { day: 'Monday', weather: 'Cloudy', temperature: '25/13' },
    { day: 'Wednesday', weather: 'Rainy', temperature: '16/7' },
    { day: 'Thursday', weather: 'Snowy', temperature: '7/-1' },
    { day: 'Friday', weather: 'Windy', temperature: '8/0' },
    { day: 'Saturday', weather: 'Thunders', temperature: '7/1' },
    { day: 'Sunday', weather: 'Sunny', temperature: '13/4' },
  ];
  const sunsetTime =
    forecastData?.forecast?.forecastday?.[0]?.astro?.sunset || 'N/A';
  const todayAirData = [
    {
      id: 1,
      weather: 'Real Feel',
      image: imagePath.temperature,
      temp: currentLocationData?.data?.current?.feelslike_c + '℃',
    },
    {
      id: 2,
      weather: 'Winds',
      image: imagePath.wind,
      temp: currentLocationData?.data?.current?.wind_kph + ' km/h',
    },
    {
      id: 3,
      weather: 'Chance of rain',
      image: imagePath.rain,
      temp: currentLocationData?.data?.current?.precip_mm + ' mm',
    },
    {
      id: 4,
      weather: 'UV',
      image: imagePath.uv,
      temp: currentLocationData?.data?.current?.uv,
    },
    { id: 5, weather: 'Sunset', image: imagePath.sunset, temp: sunsetTime },
  ];
  const airData = [
    {
      id: 1,
      weather: 'Real Feel',
      image: imagePath.temperature,
      status: currentLocationData?.data?.current?.feelslike_c + '℃',
    },
    {
      id: 2,
      weather: 'Winds',
      image: imagePath.wind,
      status: currentLocationData?.data?.current?.wind_kph + ' km/h',
    },
    {
      id: 3,
      weather: 'Chance of rain',
      image: imagePath.rain,
      status: currentLocationData?.data?.current?.precip_mm + ' mm',
    },
    {
      id: 4,
      weather: 'UV',
      image: imagePath.uv,
      status: currentLocationData?.data?.current?.uv,
    },
  ];

  const getNext7Days = forecast => {
    if (!forecast) return [];

    const todayIndex = moment().day(); // 0=Sunday, 1=Monday, ... 6=Saturday

    const daysWithDayOfWeek = forecast.map(item => ({
      ...item,
      dayOfWeek: moment(item.date).format('ddd'), // Mon, Tue, ...
    }));

    const todayDate = moment().format('YYYY-MM-DD');
    const todayItemIndex = daysWithDayOfWeek.findIndex(
      item => item.date === todayDate,
    );

    if (todayItemIndex >= 0) {
      const nextDays = [
        ...daysWithDayOfWeek.slice(todayItemIndex + 1),
        ...daysWithDayOfWeek.slice(0, todayItemIndex + 1),
      ];
      return nextDays.slice(0, 7); // just 7 days
    }

    return daysWithDayOfWeek.slice(0, 7);
  };
  const next7Days = getNext7Days(forecastData?.forecast?.forecastday);

  const callTheCurrentApi = async () => {
    setIsLoading(true);
    try {
      const res = axios.get(Current_Api(currentLatLong)).then(res => {
        setIsLoading(false);

        console.log(res, 'response');
        setCurrentLocationData(res);
      });
    } catch (error) {
      setIsLoading(false);

      console.log(error, 'err');
    }
  };

  const getForecastApiCall = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get(Forecast_Api(currentLatLong, '7'));
      setIsLoading(false);

      setForecastData(res.data);
      console.log(res.data, 'forecast');
    } catch (error) {
      setIsLoading(false);

      console.log(error, 'Forecast error:');
    }
  };

  useEffect(() => {
    callTheCurrentApi();
    getForecastApiCall();
  }, []);
  console.log(forecastData?.forecast?.forecastday[0].hour, 'data');
  return (
    <WraperContainer>
      <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
        <View style={style.mainStyle}>
          <Text style={style.title}>
            {currentLocationData?.data?.location?.name}
          </Text>
          <Text
            style={style.subtitle}
          >{`Chance of rain: ${currentLocationData?.data?.current?.precip_mm}%`}</Text>
          <Image
            style={style.topImg}
            source={
              currentLocationData?.data?.current?.is_day == 1
                ? imagePath.sun256
                : imagePath.coludy_256
            }
          />

          <Text
            style={{ ...style.title, marginTop: vs(12) }}
          >{`${currentLocationData?.data?.current?.temp_c}℃`}</Text>
        </View>
        <View>
          <TodayWeatherInfo data={forecastData?.forecast?.forecastday} />

          <FlatList
            scrollEnabled={false}
            nestedScrollEnabled={true}
            style={style.mainFlatList}
            data={next7Days}
            ListHeaderComponent={() => {
              return (
                <View style={style.headerView}>
                  <Text style={style.headerText}>{'7-Day Forecast'}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: vs(8) }} />}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    ...style.renderMain,
                    borderBottomWidth: item?.day === 'Sunday' ? 0 : 0.2,
                  }}
                >
                  <Text style={{ ...style.weekName, width: '10%' }}>
                    {item.dayOfWeek}
                  </Text>
                  <View style={style.imgView}>
                    <Image
                      style={style.imgStyle}
                      source={{ uri: `https:${item?.day?.condition?.icon}` }}
                    />
                    {/* <Text numberOfLines={1} style={style.weekCondition}>
                      {item?.day?.condition?.text}
                    </Text> */}
                  </View>
                  <Text style={style.weekName}>
                    {' '}
                    {item.day.maxtemp_c}―{item.day.mintemp_c}℃
                  </Text>
                </View>
              );
            }}
          />

          <FlatList
            style={style.cardUIStyle}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            data={airData}
            ListHeaderComponent={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={style.lastCardText}>Air Condition</Text>
                  <Pressable
                    style={style.seeMore}
                    onPress={() =>
                      navigation.navigate('Detail', {
                        airData: todayAirData,
                        locationData: currentLocationData?.data,
                        forecastData: forecastData?.forecast,
                      })
                    }
                  >
                    <Text style={style.seeMoreText}>See more</Text>
                  </Pressable>
                </View>
              );
            }}
            numColumns={2}
            columnWrapperStyle={style.columnWraper}
            renderItem={({ item }) => {
              return (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      style={{
                        width: s(22),
                        height: vs(22),
                        marginRight: s(12),
                      }}
                      source={item.image}
                    />
                    <Text style={style.weekName}>{item.weather}</Text>
                  </View>
                  <Text
                    style={{
                      ...style.weekName,
                      textAlign: 'center',
                      color: colors.white,
                    }}
                  >
                    {item.status}
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

export default Home;
