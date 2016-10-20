import { globalMutationType } from 'store/mutationTypes';

export const setTabActive = function({ dispatch }, tabList, value) {
    tabList.forEach((tab, index) => {
        dispatch(globalMutationType['SET_TAB_ACTIVE'], index, false);

        if (tab.value === value) {
            dispatch(globalMutationType['SET_TAB_ACTIVE'], index, true);
        }
    });
};
