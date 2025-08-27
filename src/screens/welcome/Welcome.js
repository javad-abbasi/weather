import { Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import WraperContainer from '../../components/wraperContainer/WraperContainer';
import imagePath from '../../constants/imagePath';
import style from './style';
import { MMKV } from 'react-native-mmkv';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../redux/reducers/authSlice';

const Welcome = () => {
  const dispatch = useDispatch();
  const storage = new MMKV();
  const saveToken = () => {
    storage.set('Token', '12345678');
    dispatch(
      saveUserData({
        userData: { Name: 'Javad', Gender: 'Male', Country: 'Iran' },
        isLogin: true,
      }),
    );
  };
  return (
    <WraperContainer>
      <View style={style.Container}>
        <View style={style.mainView}>
          <Image
            resizeMode="contain"
            style={style.imageView}
            source={imagePath.umbrella}
          />
          <Text style={style.title}>{'Javad'}</Text>
          <Text style={style.subtitle}>{'Weather App'}</Text>
        </View>

        <View style={style.buttonview}>
          <TouchableOpacity onPress={saveToken}>
            <Image resizeMode="contain" source={imagePath.next} />
          </TouchableOpacity>
        </View>
      </View>
    </WraperContainer>
  );
};

export default Welcome;
