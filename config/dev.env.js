'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_FIRE_API_KEY:'""',
  VUE_FIRE_AUTH_DOMAIN:'""',
  VUE_FIRE_DB_URL:'""',
  VUE_FIRE_PROJECT_ID:'""',
  VUE_FIRE_STORAGE_BUCKET:'""',
  VUE_FIRE_MSG_ID:'""'
});