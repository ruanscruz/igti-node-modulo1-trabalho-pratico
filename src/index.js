import {} from './config/config.js';
import App from './server/App.js';

global.fileName = './src/database/carros.json'

App.listen(process.env.PORT, () => console.log('Api Started!'));