const express = require('express')
const { getAllUsers, loginUser, registerUser, logoutUser } = require('../controllers/userController')
const { authenticateToken } = require('../controllers/jwt')

const router = express.Router()

router.get('/all', authenticateToken, getAllUsers)

router.post('/login', loginUser)

router.post('/register', registerUser)

router.post('/logout', logoutUser)

module.exports = router
