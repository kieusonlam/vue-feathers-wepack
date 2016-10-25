const feathers = require('feathers-client');
const io = require('socket.io-client');

const storage = (process.env.VUE_ENV === 'server') ? null : window.localStorage;

const socket = io('http://localhost:3030');
export const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage
  }));
