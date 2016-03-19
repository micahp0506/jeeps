'use strict';


module.exports = function (sequelize, DataTypes) {
  const Posts = sequelize.define('Posts', {
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.BLOB,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    tableName: 'posts',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Posts.belongsTo(models.User, {foreignKey: 'userId'});
      }
    }
  });

  return Posts;
};
