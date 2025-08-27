import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MyCity, MapScreen, Setting } from '../screens';
import { Image, StyleSheet } from 'react-native';
import imagePath from '../constants/imagePath';
import { s, vs } from 'react-native-size-matters';
import colors from '../styles/colors';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.bottomTabsColor },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.white : colors.textGray}
              style={style.image}
              source={imagePath.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyCity"
        component={MyCity}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.white : colors.textGray}
              style={style.image}
              source={imagePath.myCity}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.white : colors.textGray}
              style={style.image}
              source={imagePath.mymap}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              tintColor={focused ? colors.white : colors.textGray}
              style={style.image}
              source={imagePath.mysetting}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
const style = StyleSheet.create({
  image: {
    marginTop: vs(8),
    width: s(26),
    height: vs(26),
  },
});
