import * as Types from 'store/mutation-types';

export default {
    [Types['SET_TAB_ACTIVE']] (state, payload) {
        state.tabList[payload.index].isActive = payload.isActive;
    }
};
