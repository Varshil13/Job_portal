
import React, { useState } from 'react';
import Navbar from '../shared/navbar';
import { Label } from '../ui/label';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [input, setinput] = React.useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
    });

    const navigate = useNavigate();
    const changeEventHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });

    }
    const changeFileHandler = (e) => {
        setinput({ ...input, file: e.target.files?.[0] });
        const fileName = e.target.files[0]?.name || "No file chosen";
        document.getElementById("file-name").textContent = fileName;
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex justify-center items-center pt-12 px-4">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                        Create an Account
                    </h1>

                    <form onSubmit={submitHandler}>
                        {/* Full Name */}
                        <div className="mb-5">
                            <Label
                                htmlFor="fullName"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                placeholder="Example Sharma"
                                value={input.fullName}
                                onChange={changeEventHandler}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <Label
                                htmlFor="email"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Email Address
                            </Label>
                            <Input
                                type="text"
                                id="email"
                                name="email"

                                value={input.email}
                                onChange={changeEventHandler}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                        {/* Phone Number */}

                        <div className="mb-5">
                            <Label
                                htmlFor="phonenumber"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Phone Number
                            </Label>
                            <Input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={input.phoneNumber}
                                onChange={changeEventHandler}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                placeholder="8080808080"
                                required
                            />
                        </div>


                        {/* password */}
                        <div className="mb-5">
                            <Label
                                htmlFor="password"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={input.password}
                                onChange={changeEventHandler}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                placeholder="********"
                                required
                            />
                        </div>

                        {/* Account Type */}
                        <div className="mb-6">
                            <Label className="block text-sm font-medium text-gray-700 mb-3">
                                Select Account Type
                            </Label>
                            <RadioGroup className="flex items-center gap-4 my-5">
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        id="student"
                                        onChange={changeEventHandler}
                                        checked={input.role === 'student'}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="student" className="text-sm font-medium text-gray-800 cursor-pointer">
                                        Student
                                    </Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        id="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="recruiter" className="text-sm font-medium text-gray-800 cursor-pointer">
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Profile Upload */}
                        <div className="mb-5">
                            <Label
                                htmlFor="profile"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Upload Profile
                            </Label>

                            <div className="flex items-center space-x-4">
                                <label
                                    htmlFor="profile"
                                    className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer transition"
                                >
                                    Choose File
                                </label>
                                <span id="file-name" className="text-sm text-gray-600 truncate">
                                    No file chosen
                                </span>
                            </div>

                            <Input
                                type="file"
                                id="profile"
                                name="profile"
                                accept="image/*"
                                className="hidden"
                                onChange={changeFileHandler}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-2 rounded-lg hover:from-teal-600 hover:to-emerald-600 shadow-md transition"
                        >
                            Sign Up
                        </Button>
                        <p className="mt-6 text-sm text-center text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-teal-500 hover:underline">
                                Log In
                            </Link>
                        </p>
                    </form>

                    {/* Footer */}

                </div>
            </div>
        </div>
    );
};

export default Signup;
