import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import { getFontFamily } from '../../assets/fonts/helper';
const style = StyleSheet.create({
  mainStyle: {
    backgroundColor: colors.cardBgColor,
    paddingHorizontal: s(16),
    paddingVertical: vs(8),
    borderRadius: s(12),
    width: s('80%'),
    marginTop: vs(12),
  },
  title: {
    color: colors.textGray,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: s(12),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(8),
    marginHorizontal: s(6),
    alignSelf: 'center',
  },
  timeTxt: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(10),
    color: colors.whiteGray,
  },
  itemView: {
    borderRightWidth: 0.2,
    borderColor: colors.whiteGray,
    alignItems: 'center',
    paddingHorizontal: s(25),
  },
  imageView: {
    width: s(42),
    height: vs(42),
    resizeMode: 'contain',
    marginVertical: vs(6),
  },
});
export default style;
