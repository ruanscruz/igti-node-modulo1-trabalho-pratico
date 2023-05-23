import App from './server/App.js';

global.fileName = './src/database/carros.json'

App.listen(3000, () => console.log('Api Started!'));