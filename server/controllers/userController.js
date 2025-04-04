const User = require('../models/user')
const { generateToken } = require('../controllers/jwt')
const bcrypt = require('bcryptjs')

const getAllUsers = async (req, res) => {
  const users = await User.find()

  /*
  const user = User.create({ username: 'john', email: 'john@gmail.com', password: 'test'})
  user.save()
  */
  console.log(users)
  res.json(users)
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if(!user || !bcrypt.compareSync(password, user.password)){
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user)
  res.cookie('token', token, { httpOnly: true, secure: false })
  res.json({ message: 'Login successful', token })
}

const registerUser = async (req, res) => {
  try{
    const { email, username, password } = req.body
    const existing = await User.findOne({ username })
    if(existing){
      return res.status(400).json({ message: 'Username already exists' })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      email,
      username, 
      password: hashedPassword
    })

    await user.save()
    
    res.status(201).json({ message: 'User successfully registered', user: user})
  } 
  catch(error){
    console.log('error registering user: ', error)
  }
}

const logoutUser = async (req, res) => {
  res.clearCookie('token', { httpOnly: true, secure: false })
  res.json({ message: 'Logged out successfully' })
}

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.id)

  if(!user){
    return res.status(404).json({ message: 'User not found' })
  }
  
  console.log('username: ', user.username)
  res.json({ user: user.username })
}

module.exports = { getAllUsers, loginUser, registerUser, logoutUser, getCurrentUser }
