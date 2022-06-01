import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import userModel from '../models/userModel.js'

export const signin = async (req, res) => {
    const { email, password } = req.body

    try {
        const oldUser = await userModel.findOne({ email })

        if (!oldUser) return res.status(404).json({ message: `User doesnt exist` })

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: `Invalid pass` })

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, 'test', { expiresIn: "1h" })

        res.status(200).json({ result: oldUser, token })

    } catch (error) {
        res.status(500).json({ massage: 'error' })
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body


    try {

        const oldUser = await userModel.findOne({ email })

        if (oldUser) return res.status(404).json({ message: `User exist` })

        if (password !== confirmPassword) return res.status(404).json({ message: `pass dont match` })

        const hashedPass = await bcrypt.hash(password, 12)

        const result = await userModel.create({ email, password: hashedPass, name: firstName })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" })

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ massage: 'error aaa' })
    }
}
