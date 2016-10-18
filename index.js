const url = require('url');
const getIp = require('./lib/get-ip');

module.exports = function(gemini, options) {
    gemini.on('startRunner', () => updateRootUrl(gemini.config, options.port));
};

function updateRootUrl(config, port) {
    return Promise.all(
        config.getBrowserIds().map(
            id => updateBrowserRootUrl(config.forBrowser(id), port || 80)
        )
    );
}

function updateBrowserRootUrl(browserConfig, port) {
    const parsedGridUrl = url.parse(browserConfig.gridUrl);
    return getIp(parsedGridUrl.hostname, parsedGridUrl.port)
        .then(ip => {
            browserConfig.rootUrl = url.format({
                protocol: 'http',
                hostname: ip,
                port: port
            });
        });
}
