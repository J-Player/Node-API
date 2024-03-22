const { UserModel } = require('../models/user')

const userController = {

	create: async (req, res) => {
		try {
			const user = {
				username: req.body.username,
				password: req.body.password,
				email: req.body.email,
			}
			const response = await UserModel.create(user)
			res.status(201).json(response)
		} catch (error) {
			console.log(error)
		}
	},
	getAll: async (req, res) => {
		try {
			const response = await UserModel.find()
			res.status(200).json(response)
		} catch (error) {
			console.log(error)
		}
	},
	get: async (req, res) => {
		try {
			const id = req.params.id
			const user = await UserModel.findById(id)
			if (!user) {
				res.status(404).json({ message: "User not found." })
				return
			}
			res.status(200).json(user)
		} catch (error) {
			console.log(error)
		}
	},
	update: async (req, res) => {
		try {
			const id = req.params.id
			const user = {
				username: req.body.username,
				password: req.body.password,
				email: req.body.email,
			}
			const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true })
			if (!updatedUser) {
				res.status(404).json({ message: "User not found." })
				return
			}
			res.status(200).json(updatedUser)
		} catch (error) {
			console.log(error)
		}
	},
	delete: async (req, res) => {
		try {
			const id = req.params.id
			const user = await UserModel.findById(id)
			if (!user) {
				res.status(404).json({ message: "User not found." })
				return
			}
			const deletedUser = await UserModel.findByIdAndDelete(id)
			res.status(204).json(deletedUser)
		} catch (error) {
			console.log(error)
		}
	},
}

module.exports = userController