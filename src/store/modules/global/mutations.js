import { globalMutationType } from 'store/mutationTypes';

export default {
    [globalMutationType['SET_TAB_ACTIVE']] (state, index, isActive) {
        state.tabList[index].isActive = isActive;
    }
};
