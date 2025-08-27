import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Detail from '../screens/detail/Detail';
import Search from '../screens/search/Search';
import MyCity from '../screens/myCity/MyCity';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="MyCity" component={MyCity} />
      <Stack.Screen name="MyCities" component={MyCity} />
    </Stack.Navigator>
  );
};

export default MainStack;
