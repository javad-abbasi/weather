import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import style from './style';
import colors from '../../styles/colors';
import { useDispatch } from 'react-redux';
import { MMKV } from 'react-native-mmkv';
import { logoutUser } from '../../redux/reducers/authSlice';
import { getFontFamily } from '../../assets/fonts/helper';

const Setting = () => {
  const dispatch = useDispatch();
  const storage = new MMKV();
  const logoutAppUser = () => {
    storage.delete('token');
    dispatch(logoutUser());
    Alert.alert('Done');
  };
  const [temperatureSaveItem, setTemperatureSaveItem] = useState(1);
  const temperature = [
    { id: 1, label: 'Celsius' },
    { id: 2, label: 'Farenheite' },
  ];
  return (
    <WraperContainer>
      <Text style={style.headerTxt}>{'Settings'}</Text>
      <ScrollView bounces={false} style={style.scroll}>
        <Text style={style.title}>{'Units'}</Text>
        <View style={style.unitCard}>
          <Text style={style.cardTitle}>{'Temperature'}</Text>
          <View style={style.temp}>
            {temperature?.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setTemperatureSaveItem(item?.id)}
                  style={{
                    ...style.tmpTouch,
                    backgroundColor:
                      temperatureSaveItem == item?.id
                        ? colors.cardHellColor
                        : colors.backgroundAppColor,
                  }}
                >
                  <Text style={style.tmpText}> {item?.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* <Pressable onPress={logoutAppUser}>
          <Text
            style={{
              color: colors.white,
              fontFamily: getFontFamily('Inter', '600'),
            }}
          >
            Logout
          </Text>
        </Pressable> */}
      </ScrollView>
    </WraperContainer>
  );
};

export default Setting;
