import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { getFontFamily } from '../../assets/fonts/helper';
import colors from '../../styles/colors';
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: vs(6),
    justifyContent: 'space-between',
  },
  backImg: {
    width: s(18),
    height: vs(18),
  },
  textHeader: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: s(14),
    color: colors.whiteGray,
  },
  cityTitle: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: s(24),
    color: colors.white,
  },
  cityView: {
    paddingTop: vs(16),
    alignItems: 'center',
  },
  citysubTitle: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(12),
    color: colors.whiteGray,
  },
  cityImgStyle: {
    width: s(120),
    height: vs(120),
    resizeMode: 'contain',
    marginTop: vs(20),
  },
});
export default style;
