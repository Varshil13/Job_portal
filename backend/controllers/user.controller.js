import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists', success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ fullName, email, phoneNumber, password: hashedPassword, role });
        return res.status(201).json({
            message: "Account created successfully",
            success: true,

        });

    }
    catch (error) {
        console.log(error);
    }

}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                mesasge: "Incorrect email or password",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            })
        }
        // check role is correct or not
        if (role != user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false,
            })
        }

        //generate token
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });
        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }


        return res.status(200).cookie("token", token, { maxAge: 86400000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back! ${user.fullName}`,
            user,
            success: true,
        })


    } catch (error) {
        console.log(error);

    }
}


export const logout = async(req,res)=>{
    try {
        return res.status(200).cookie("token"," ",{maxAge:0}).json({
            message:"Logout successfully",
            success:true,
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const updateProfile = async(req,res)=>{
    try {
        const {fullName,email,phoneNumber,bio,skills} = req.body;
        const file = req.file;
        

        //cloudninary 
        let skillsArray;
        if(skills) {skillsArray = skills.split(",")};

        
        
        const userId = req.id;//authentication middleware
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false, 
            })
        }

        //updating data
        if (fullName) user.fullName = fullName;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;

        //resume comes here
        

    await user.save();
    user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
    }
    return res.status(200).json({
        message:"Profile Upadate successfully",
        user,
        success:true,
    })
    } catch (error) {
        console.log(error);
        
    }

}



