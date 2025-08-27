import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import colors from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
const style = StyleSheet.create({
  scroll: { flex: 1 },
  mainStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: getFontFamily('Inter', '700'),
    color: colors.white,
    fontSize: s(24),
  },
  subtitle: {
    fontFamily: getFontFamily('Inter', '400'),
    color: colors.textGray,
    fontSize: s(12),
  },
  topImg: {
    width: s(120),
    height: vs(120),
    marginTop: vs(20),
  },
  weekName: {
    color: colors.whiteGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(12),
  },
  weekCondition: {
    color: colors.whiteGray,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: s(12),
  },
  mainFlatList: {
    backgroundColor: colors.cardBgColor,
    marginTop: vs(14),
    borderRadius: s(12),
    paddingHorizontal: s(16),
    paddingVertical: vs(8),
    marginBottom: vs(14),
  },
  headerText: {
    color: colors.textGray,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: s(12),
  },
  headerView: { marginBottom: vs(8) },
  renderMain: {
    paddingBottom: vs(6),
    borderColor: colors.whiteGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '2%',
    justifyContent: 'space-between',
  },
  imgStyle: {
    width: s(30),
    height: vs(30),
    resizeMode: 'contain',
  },
  cardUIStyle: {
    backgroundColor: colors.cardBgColor,
    marginTop: vs(14),
    borderRadius: s(12),
    paddingHorizontal: s(16),
    paddingVertical: vs(8),
    marginBottom: vs(14),
  },
  lastCardText: {
    color: colors.textGray,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: s(12),
  },
  seeMore: {
    backgroundColor: colors.blue,
    padding: vs(6),
    paddingHorizontal: s(8),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeMoreText: {
    color: colors.whiteGray,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: s(10),
  },
  columnWraper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingVertical: vs(12),
  },
});
export default style;
