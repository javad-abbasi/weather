import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import colors from '../../styles/colors';
import { getFontFamily } from '../../assets/fonts/helper';
const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mainView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: s(120),
    height: vs(120),
  },
  title: {
    color: colors.white,
    fontSize: s(26),
    marginTop: vs(30),
    fontFamily: getFontFamily('Inter', '700'),
  },
  subtitle: {
    color: colors.textGray,
    fontFamily: getFontFamily('Inter', '500'),
  },
  buttonview: {
    flex: 0.2,
    alignItems: 'center',
  },
});
export default style;
