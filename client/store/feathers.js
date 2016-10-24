const feathers = require('feathers-client');
const io = require('socket.io-client');

const storage = (global.TYPE === 'CLIENT') ? window.localStorage : null;

const socket = io('http://localhost:3030');
export const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage
  }));
