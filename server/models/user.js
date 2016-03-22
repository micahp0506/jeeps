'use strict';


const bcrypt = require('bcrypt');


module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userEmail: DataTypes.STRING,
    userPassword: DataTypes.STRING
  }, {
    tableName: 'user',
    timestamps: false,
    classMethods: {
      generateHash: function(userPassword, done) {
        console.log("in");
            return bcrypt.hashSync(userPassword, bcrypt.genSaltSync(8), null);
      }
    },
    instanceMethods: {
      authenticate: function(userPassword, cb) {
        console.log("in2");
        console.log(">>>>>>>>>", this.userPassword);
            return bcrypt.compare(userPassword, this.userPassword, cb);
      }
    }
  });

  return User;
};
