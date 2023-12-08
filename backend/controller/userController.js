import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const home = (req, res) => {
    res.json({
        message: "Welcome to the backend!",
    });
};
