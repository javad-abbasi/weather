import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import React from 'react';
import style from './style';
import colors from '../../styles/colors';

const WraperContainer = ({ children }) => {
  return (
    <SafeAreaView style={style.mainstyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={style.viewStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default WraperContainer;
