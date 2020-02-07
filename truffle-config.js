module.exports = {
    package_name: 'adder',
    version: '0.0.3',
    description: 'Contract based on auction',
    authors: ['Zakir Hussain <ZaHuPro@Github>'],
    keywords: ['ethereum', 'auction', 'gems'],
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*', // match any network
        },
        live: {
            host: '178.25.19.88', // Random IP for example purposes (do not use)
            port: 80,
            network_id: 1,
        },
    },
};
