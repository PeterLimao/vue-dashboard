export default {
    '/': {
        component (resolve) {
            require(['pages/viewPage'], resolve);
        }
    },
    '/doc': {
        component (resolve) {
            require(['pages/docPage'], resolve);
        }
    },
    '/view': {
        component (resolve) {
            require(['pages/viewPage'], resolve);
        }
    }
};
