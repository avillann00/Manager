const User = require('../models/user')

const getAllUsers = async (req, res) => {
  const users = await User.find()

  /*
  const user = User.create({ username: 'john', email: 'john@gmail.com', password: 'test'})
  user.save()
  */
  console.log(users)
  res.json(users)
}

module.exports = { getAllUsers }
