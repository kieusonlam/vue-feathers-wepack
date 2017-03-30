'use strict';

const process = require('./process');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

const populateAuthor = hooks.populate({
  schema: {
    include: [{
      service: 'users',
      nameAs: 'authorInfo',
      parentField: 'author',
      childField: '_id'
    }]
  }
});

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    process()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'author' })
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'author' })
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'author' })
  ]
};

exports.after = {
  all: [],
  find: [populateAuthor],
  get: [populateAuthor],
  create: [populateAuthor],
  update: [],
  patch: [],
  remove: []
};
