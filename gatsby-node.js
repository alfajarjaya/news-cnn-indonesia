const path = require('path');

const pages = [
    { route: '/', componentPath: './src/pages/index.js' },
    { route: '/id/nasional', componentPath: './src/pages/components/layout/nasional/index.js' },
    { route: '/id/internasional', componentPath: './src/pages/components/layout/internasional/index.js' },
    { route: '/id/ekonomi', componentPath: './src/pages/components/layout/ekonomi/index.js' },
    { route: '/id/olahraga', componentPath: './src/pages/components/layout/olahraga/index.js' },
    { route: '/id/teknologi', componentPath: './src/pages/components/layout/teknologi/index.js' },
    { route: '/id/hiburan', componentPath: './src/pages/components/layout/hiburan/index.js' },
    { route: '/id/gayahidup', componentPath: './src/pages/components/layout/gayahidup/index.js' },
];

exports.createPages = async ({ actions }) => {
    const { createPage, createRedirect } = actions;

    pages.forEach(page => {
        createPage({
            path: page.route,
            component: path.resolve(page.componentPath),
            context: {},
        });
    });

    createRedirect({
        fromPath: '/id/',
        toPath: '/',
        isPermanent: true,
        redirectInBrowser: true,
    });
};
