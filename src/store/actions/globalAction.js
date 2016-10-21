import * as Types from 'store/mutation-types';

export const setTabActive = function ({ commit }, { tablist, value }) {
    tablist.forEach((tab, index) => {
        commit(Types['SET_TAB_ACTIVE'], {
            index,
            isActive: false
        });
        if (tab.value === value) {
            commit(Types['SET_TAB_ACTIVE'], {
                index,
                isActive: true
            });
        }
    });
};
