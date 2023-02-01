import User from "../models/UserModel.js";

//get all users
export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error)
        console.log(error.message);
    }
}

//get single user
export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
        console.log(error.message);
    }
}

//create user post
export const createUser = async (req, res) => {
    try {
        const emailExists = await User.findOne({ where: { email: req.body.email } });
        if (emailExists) {
            return res.status(400).json({ error: "Email already exists" });
        }
        await User.create(req.body);
        res.status(201).json({ msg: "User Created" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

//update user put
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        res.status(400).json(error);
        console.log(error.message);
    }
}

//delete user using delete
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        res.status(400).json(error);
        console.log(error.message);
    }
}