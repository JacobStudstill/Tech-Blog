const User = require('./User');
const Posts = require('./Posts');

User.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id'
});

//Posts has many comments

//User has many comments

//Comment belongs to post
//Comment belongs to user

module.exports = { User, Posts };
