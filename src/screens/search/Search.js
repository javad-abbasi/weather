import React, { useState, useEffect } from 'react';
import {
  Pressable,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import colors from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import { getFontFamily } from '../../assets/fonts/helper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_KEY = 'insert API';

const Search = () => {
  const navigation = useNavigation();
  const [searchItem, setSearchItem] = useState('');
  const [results, setResults] = useState([]);

  // Live search
  useEffect(() => {
    if (searchItem.length < 2) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchItem}`,
        );
        setResults(res.data);
      } catch (error) {
        console.log('Search error:', error);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchItem]);

  const handleSelectCity = async cityName => {
    try {
      // گرفتن اطلاعات فعلی شهر
      const currentRes = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`,
      );

      // گرفتن پیش‌بینی 7 روزه
      const forecastRes = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`,
      );

      const cityData = {
        id: Date.now(),
        city: currentRes.data.location.name,
        temperature: currentRes.data.current.temp_c + ' ℃',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isCurrentLocation: false,
        currentLocationData: currentRes.data,
        forecastData: forecastRes.data,
      };

      navigation.navigate('MyCity', { newCity: cityData });
    } catch (error) {
      console.log('City fetch error:', error);
    }
  };

  return (
    <WraperContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: vs(16),
        }}
      >
        <View
          style={{
            width: '75%',
            backgroundColor: colors.cardBgColor,
            height: vs(44),
            borderRadius: s(12),
          }}
        >
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: s(12),
              color: colors.white,
              fontFamily: getFontFamily('Inter', '500'),
              fontSize: s(12),
            }}
            onChangeText={setSearchItem}
            value={searchItem}
            placeholder="Enter city name..."
            placeholderTextColor={colors.textGray}
          />
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: colors.white,
              fontFamily: getFontFamily('Inter', '400'),
              fontSize: s(14),
            }}
          >
            Cancel
          </Text>
        </Pressable>
      </View>

      <FlatList
        style={{ marginTop: vs(20) }}
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelectCity(item.name)}
            style={{
              padding: s(12),
              borderBottomWidth: 0.5,
              borderBottomColor: colors.textGray,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: s(14),
                fontFamily: getFontFamily('Inter', '400'),
              }}
            >
              {item.name}, {item.country}
            </Text>
          </TouchableOpacity>
        )}
      />
    </WraperContainer>
  );
};

export default Search;
