const enigma = require('enigma.js')
const WebSocket = require('ws');
const schema = require('../../node_modules/enigma.js/schemas/12.34.11.json');
const SenseUtilities = require('../../node_modules/enigma.js/sense-utilities');

const urlConfig = { 
    host: 'localhost', 
    port: 4848, 
    appId: 'UI_BetsysBikes.qvf',
    secure: false 
};

// WebSocket config.
const config = { 
    schema: schema,
    url: SenseUtilities.buildUrl(urlConfig)
};

const session = enigma.create(config).open();

export default session;
