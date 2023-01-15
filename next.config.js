const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'hancy',
                mongodb_password: 'v0su8l6akgfOjSuT',
                mongodb_clustername: 'cluster1',
                mongodb_database: 'mysite-dev',
            },
        };
    }


    return {
        env: {
            mongodb_username: 'hancy',
            mongodb_password: 'v0su8l6akgfOjSuT',
            mongodb_clustername: 'cluster1',
            mongodb_database: 'mysite',
        },
    };
};