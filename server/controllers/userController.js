const User = require('../models/userModel')

exports.home = (req, res) => {
  res.status(200).send('Hello Home')
}

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body

    if (!name || !email) {
      throw new Error('Name and Email are required')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
      throw new Error('Email already exists')
    }

    const user = await User.create({
      name,
      email,
    })

    res.status(201).json({
      success: true,
      message: 'User created Successfully',
      user,
    })
  } catch (e) {
    console.log('Error', e)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({
      success: true,
      users,
    })
  } catch (e) {
    console.log('Error:', e)
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}

exports.editUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
      success: true,
      message: 'User Updated Successfully',
    })
  } catch (e) {
    console.log('error', e)
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id

    const user = await User.findByIdAndDelete(userId)

    res.status(200).json({
      success: true,
      message: 'User deleted Successfully',
    })
  } catch (e) {
    console.log('error', e)
    res.status(400).json({
      success: false,
      message: e.message,
    })
  }
}
