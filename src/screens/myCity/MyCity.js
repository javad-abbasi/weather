import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import style from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from '../../styles/colors';
import { vs } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import { Swipeable } from 'react-native-gesture-handler';

const MyCity = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState([]);
  const [currentLocationData, setCurrentLocationData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  // وقتی کاربر از صفحه Search برمی‌گردد
  useEffect(() => {
    if (route.params?.newCity) {
      const newCity = route.params.newCity;
      setData(prev => [newCity, ...prev]);
      setCurrentLocationData(newCity.currentLocationData);
      setForecastData(newCity.forecastData);
    }
  }, [route.params?.newCity]);

  const deleteItem = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const renderRightActions = item => (
    <TouchableOpacity
      style={style.deleteTouch}
      onPress={() => deleteItem(item?.id)}
    >
      <Text style={style.deleteText}>X</Text>
    </TouchableOpacity>
  );

  const sunsetTime =
    forecastData?.forecast?.forecastday?.[0]?.astro?.sunset || 'N/A';

  const todayAirData = [
    {
      id: 1,
      weather: 'Real Feel',
      image: imagePath.temperature,
      temp: currentLocationData?.current?.feelslike_c + '℃',
    },
    {
      id: 2,
      weather: 'Winds',
      image: imagePath.wind,
      temp: currentLocationData?.current?.wind_kph + ' km/h',
    },
    {
      id: 3,
      weather: 'Chance of rain',
      image: imagePath.rain,
      temp: currentLocationData?.current?.precip_mm + ' mm',
    },
    {
      id: 4,
      weather: 'UV',
      image: imagePath.uv,
      temp: currentLocationData?.current?.uv,
    },
    { id: 5, weather: 'Sunset', image: imagePath.sunset, temp: sunsetTime },
  ];

  return (
    <WraperContainer>
      <ScrollView bounces={false} style={{ flex: 1 }}>
        <Text style={style.headerText}>My Cities</Text>
        <TouchableOpacity
          style={style.searchButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={style.searchTxt}>Search</Text>
        </TouchableOpacity>

        <FlatList
          scrollEnabled={false}
          style={{ marginTop: vs(32) }}
          data={data}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: vs(12) }} />}
          renderItem={({ item }) => (
            <Swipeable renderRightActions={() => renderRightActions(item)}>
              <View style={style.renderView}>
                <View>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Detail', {
                        airData: todayAirData,
                        locationData: currentLocationData,
                        forecastData: forecastData?.forecast,
                      })
                    }
                  >
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text style={style.cityName}>{item.city}</Text>
                      {item.isCurrentLocation && (
                        <Image
                          tintColor={colors.white}
                          style={style.imageLocation}
                          source={imagePath.navigation_arrow}
                        />
                      )}
                    </View>
                    <Text style={style.timeTxt}>{item.time}</Text>
                  </Pressable>
                </View>
                <Text style={style.headerText}>{item.temperature}</Text>
              </View>
            </Swipeable>
          )}
        />
      </ScrollView>
    </WraperContainer>
  );
};

export default MyCity;
