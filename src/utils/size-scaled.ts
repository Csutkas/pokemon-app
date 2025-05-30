import { s, vs } from 'react-native-size-matters';

const defaultWidth = 350;
const defaultHeight = 680;
const designWidth = 350; // default is 350
const designHeight = 680; // default is 680

export const ds = (v: number, noRound?: boolean): number =>
  Math.min(noRound ? s(v) * (defaultWidth / designWidth) : Math.round(s(v) * (defaultWidth / designWidth)), v);
export const dvs = (v: number, noRound?: boolean): number =>
  Math.min(noRound ? vs(v) * (defaultHeight / designHeight) : Math.round(vs(v) * (defaultHeight / designHeight)), v);
