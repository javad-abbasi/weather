/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import Routes from './src/navigations/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/redux/store';
import { MMKV } from 'react-native-mmkv';
import { saveUserData } from './src/redux/reducers/authSlice';
const { dispatch } = store;
const App = () => {
  const storage = new MMKV();
  const getUserDataFromStore = () => {
    const token = storage.getString('token');
    if (token) {
      dispatch(
        saveUserData({
          userData: { Name: 'Javad', Gender: 'Male', Country: 'Iran' },
          isLogin: true,
        }),
      );
    }
  };
  useEffect(() => {
    getUserDataFromStore();
  }, []);
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <Routes />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
