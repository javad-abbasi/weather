import { Platform, StatusBar, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { s } from 'react-native-size-matters';

const style = StyleSheet.create({
  mainstyle: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
    // paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: s(14),
  },
});
export default style;
