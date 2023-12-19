import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "User not found"));

        // Check if password is correct
        const validPassowrd = bcryptjs.compareSync(
            password,
            validUser.password
        );
        if (!validPassowrd) return next(errorHandler(401, "Wrong credentials"));

        // Create token
        const token = jwt.sign(
            { id: validUser._id },
            process.env.JWT_SECRET_KEY
        );

        // Calculate the expiration date
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 1); // 1 hour from now

        res.cookie("access_token", token, {
            httpOnly: true,
            expires: expirationDate,
        })
            .status(200)
            .json(validUser);
    } catch (error) {
        next(error);
    }
};
