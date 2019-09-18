'use strict'

require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const mongoose = require('mongoose');
const validator = require('validator');

const DB_URI = encodeURIComponent(process.env.DBURI);
const DB_USR = encodeURIComponent(process.env.DBUSER);
const DB_PWD = encodeURIComponent(process.env.DBPWD);
const DB_NME = process.env.DB;

const IS_PROD = process.env.ENVIR === 'PROD';
const BASE_URL = process.env.SHORTBASEURL;

/** Mongoose Start **/

mongoose.connect(`mongodb://${DB_USR}:${DB_PWD}@${DB_URI}/${DB_NME}`,{useNewUrlParser: true})
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch(err => {console.error('Database connection error!')});

const shortUrl = require('./schemas/shortUrlSchema.js')(mongoose); // Grab the Schema from git submodule

/*** Mongoose End ***/