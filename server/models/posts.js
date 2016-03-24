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
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.BLOB

  }, {
    tableName: 'posts',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Post.belongsTo(models.User, {foreignKey: 'userId'});
      }
    }
    });

  return Post;
};
