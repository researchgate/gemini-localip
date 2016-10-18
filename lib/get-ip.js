const net = require('net');

module.exports = function getIp(targetHost, targetPort) {
    return new Promise((resolve, reject) => {
        const socket = net.connect(targetPort, targetHost, (err) => {
            if (err) {
                return reject(err);
            }

            const ip = socket.localAddress;
            socket.destroy();
            resolve(ip);
        });
    });
};
