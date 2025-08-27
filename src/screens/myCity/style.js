import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { s, vs } from 'react-native-size-matters';
import colors from '../../styles/colors';
const style = StyleSheet.create({
  headerText: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: s(24),
    marginTop: vs(4),
    color: colors.white,
  },
  searchButton: {
    backgroundColor: colors.cardBgColor,
    height: vs(50),
    borderRadius: s(12),
    justifyContent: 'center',
    paddingHorizontal: s(12),
    marginTop: vs(12),
  },
  searchTxt: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(12),
    color: colors.whiteGray,
  },
  cityName: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: s(16),
    color: colors.whiteGray,
  },
  timeTxt: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(12),
    color: colors.whiteGray,
    opacity: 0.5,
    marginTop: vs(8),
  },
  imageLocation: {
    marginLeft: s(8),
    resizeMode: 'contain',
    width: s(16),
    height: vs(16),
  },
  renderView: {
    flexDirection: 'row',
    backgroundColor: colors.cardBgColor,
    borderRadius: s(12),
    height: vs(86),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(16),
  },
  deleteTouch: {
    height: vs(86),
    width: s(64),
    backgroundColor: colors.red,
    borderRadius: s(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: s(8),
  },
  deleteText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: s(22),
    color: colors.white,
  },
});
export default style;
