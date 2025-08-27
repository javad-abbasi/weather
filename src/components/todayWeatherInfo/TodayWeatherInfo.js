import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import style from './style';
import { s } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import moment from 'moment';

const TodayWeatherInfo = ({ data }) => {
  //console.log(data[0]?.hour, 'dataForecast');
  const hoursToShow = data?.[0]?.hour.filter(item => {
    return moment(item.time, 'YYYY-MM-DD HH:mm').isSameOrAfter(moment());
  });
  return (
    <View style={style.mainStyle}>
      <Text style={style.title}>Today's Forecast</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hoursToShow}
        renderItem={({ item }) => {
          return (
            <View style={style.content}>
              <View style={style.itemView}>
                <Text style={style.timeTxt}>
                  {moment(item.time).format('HH:mm A')}
                </Text>
                {/* <Image
                  style={style.imageView}
                  source={
                    item?.item?.is_day == 0 ? imagePath.sun : imagePath.coludy
                  }
                /> */}
                <Image
                  style={style.imageView}
                  source={{ uri: 'https:' + item?.condition?.icon }}
                />
                <Text style={style.timeTxt}>{item?.temp_c} ℃</Text>
              </View>
            </View>
          );
        }}
      />
      {/* <View style={style.itemView}>
          <Text style={style.timeTxt}>{'10:00 AM'}</Text>
          <Image style={style.imageView} source={imagePath.sun} />
          <Text style={style.timeTxt}>{'27 ℃'}</Text>
        </View>
        <View style={{ ...style.itemView, borderRightWidth: s(0) }}>
          <Text style={style.timeTxt}>{'11:00 AM'}</Text>
          <Image style={style.imageView} source={imagePath.partlyCloudy} />
          <Text style={style.timeTxt}>{'29 ℃'}</Text>
        </View> */}
    </View>
  );
};

export default TodayWeatherInfo;
