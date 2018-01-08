import {
  range as _range,
  shuffle as _shuffle,
  flatMap as _flatMap
} from "lodash";

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
  modules: {
    nowGame: {
      namespaced: true,
      state () {
        return {
          selectedNumbers: [0],
          leftNumbers: _range(1, 76)
        };
      },

      mutations: {
        addSelected (state) {
          if (state.leftNumbers.length === 0) {
            return;
          }
          const newNum = _shuffle(state.leftNumbers)[0];
          const removeIndex = state.leftNumbers.findIndex(num => num === newNum);

          state.selectedNumbers.push(newNum);
          state.leftNumbers.splice(removeIndex, 1);
        }
      }
    }
  },
  state () {
    return getDefault();
  },
  getters: {
    allMyNumbers (state) {
      return _flatMap([state.colB, state.colI, state.colN, state.colG, state.colO]);
    }
  }
};
