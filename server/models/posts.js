'use strict';


module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contactName: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    // category: DataTypes.STRING,
    description: DataTypes.STRING,
    // image: DataTypes.BLOB,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    // userId: DataTypes.INTEGER
  }, {
    tableName: 'posts',
    timestamps: false,
    classMethods: {
    //   associate: function (models) {
    //     // associations can be defined here
    //     Posts.belongsTo(models.User, {foreignKey: 'userId'});
    //   }
    // }
    }
  });

  return Post;
};
