import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_LOADING_STATUS] (state, status) {
    state.loadingStatus = status;
  },

  [mutationTypes.SET_USER_INFO] (state, info) {
    state.userInfo = info;
  }
};
