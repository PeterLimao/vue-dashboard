export default [
    {
        path: '/',
        component (resolve) {
            require(['pages/viewPage'], resolve);
        }
    },
    {
        path: '/doc',
        component (resolve) {
            require(['pages/docPage'], resolve);
        }
    },
    {
        path: '/view',
        component (resolve) {
            require(['pages/viewPage'], resolve);
        }
    }
];
