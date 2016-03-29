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
            return bcrypt.hashSync(userPassword, bcrypt.genSaltSync(8), null);
      },
      associate: function (models) {
        // associations can be defined here
        User.hasMany(models.Post);
      }
    }
    instanceMethods: {
      authenticate: function(userPassword, cb) {
            return bcrypt.compare(userPassword, this.userPassword, cb);
      }
    }
  });

  return User;
};
