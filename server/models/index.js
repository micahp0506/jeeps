'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const DATABASE = process.env.DATABASE || 'jeepers';
const USER_NAME = process.env.USER_NAME || 'Micah';
const PASSWORD = process.env.PASSWORD || '';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const USE_SSL = process.env.USE_SSL || false;
const sequelize = new Sequelize(DATABASE, USER_NAME, PASSWORD, {
    dialect: 'postgres',
    database: DATABASE,
    port: DB_PORT,
    host: DB_HOST,
    ssl: USE_SSL
});
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/jeepers';
// const sequelize = new Sequelize(DATABASE_URL);

const basename = path.basename(module.filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
