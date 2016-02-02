import runner from 'nightwatch-autorun';

import server from './server';

const NODE_PORT = process.env.NODE_PORT || 3000;

runner({port: NODE_PORT, server});
