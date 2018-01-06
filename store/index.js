import {range as _range, shuffle as _shuffle} from "lodash";

const getColumnNumbers = (startNum, endNum) => {
  return _shuffle(_range(startNum, endNum)).splice(1, 5);
};

const getDefault = () => {
  const colN = getColumnNumbers(31, 45);
  colN.splice(2, 1, 0);

  return {
    colB: getColumnNumbers(1, 15),
    colI: getColumnNumbers(16, 30),
    colN,
    colG: getColumnNumbers(46, 60),
    colO: getColumnNumbers(61, 75)
  };
};

export default {
  state () {
    return getDefault();
  }
};
