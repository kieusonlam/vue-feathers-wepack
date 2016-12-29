'use strict';

// src\services\post\hooks\process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const title = hook.data.title;
    const content = hook.data.content.substring(0, 400).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const user = hook.params.user;

    hook.data = {
      title,
      content,
      author: user._id
    }

    hook.process = true;
  };
};
