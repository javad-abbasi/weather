import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import { getFontFamily } from '../../assets/fonts/helper';
const style = StyleSheet.create({
  scroll: { marginTop: vs(32) },

  headerTxt: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: s(24),
    marginTop: vs(4),
    color: colors.white,
  },
  title: {
    color: colors.whiteGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(14),
  },
  unitCard: {
    marginTop: vs(8),
    backgroundColor: colors.cardBgColor,
    paddingVertical: vs(16),
    paddingHorizontal: s(12),
    borderRadius: s(12),
  },
  cardTitle: {
    color: colors.textGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(12),
  },
  temp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundAppColor,
    height: vs(44),
    alignItems: 'center',
    paddingHorizontal: s(4),
    borderRadius: s(6),
  },
  tmpTouch: {
    height: vs(36),
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(6),
  },
  tmpText: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: s(12),
    color: colors.white,
  },
});
export default style;
