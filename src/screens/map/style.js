import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import { getFontFamily } from '../../assets/fonts/helper';
const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.backgroundAppColor,
    opacity: 0.5,
    height: vs(92),
    width: s(86),
    borderRadius: s(12),
    alignItems: 'center',
    paddingVertical: vs(8),
    justifyContent: 'center',
  },
  titleTxt: {
    fontFamily: getFontFamily('Inter', '500'),
    color: colors.white,
    fontSize: s(14),
    marginBottom: vs(2),
  },
  img: {
    width: s(42),
    height: vs(42),
    marginBottom: vs(2),
  },
  tmpTxt: {
    fontFamily: getFontFamily('Inter', '500'),
    color: colors.white,
    fontSize: s(12),
    marginBottom: vs(3),
  },
});
export default style;
