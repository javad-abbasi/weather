import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const Routes = () => {
  const userData = useSelector(state => state.auth);
  const isToken = userData?.isLogin;
  return (
    <NavigationContainer>
      {isToken ? MainStack() : AuthStack()}
    </NavigationContainer>
  );
};

export default Routes;
