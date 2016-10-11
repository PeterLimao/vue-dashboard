export const getAllPageCount = function(state) {
    return state.global.pageList.length;
};

export const getPageList = function(state) {
    return state.global.pageList;
};

export const getTabList = function(state) {
    return state.global.tabList;
};
