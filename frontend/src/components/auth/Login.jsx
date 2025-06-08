import React from 'react';
import Navbar from '../shared/navbar';
import { Label } from '../ui/label';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios';
import { toast } from 'sonner';

const Login = () => {

    const [input, setinput] = React.useState({
        email: "",
        password: "",
        role: "",

    });
    const navigate = useNavigate();
    const changeEventHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });

    }
       const submitHandler = async (e) => {
        e.preventDefault();
       
       
     
        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`,input , {
                headers: { 'Content-Type': "application/json" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main container for the login page with background color */}
            <Navbar />

            <div className="flex justify-center items-center pt-12 px-4">
                {/* Centers the login card on the page */}
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    {/* Login card with white background, shadow, and padding */}
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Welcome Back</h1>

                    <form onSubmit={submitHandler}>
                        {/* Login form starts here */}
                        <div className="mb-5">
                            {/* Email input field */}
                            <Label
                                htmlFor="email"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Email Address
                            </Label>
                            <Input
                                type="text"
                                id="email"
                                onChange={changeEventHandler}
                                value={input.email}
                                name="email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            {/* Password input field */}
                            <Label
                                htmlFor="password"
                                className="block text-base font-semibold text-gray-800 tracking-wide mb-2"
                            >
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                onChange={changeEventHandler}
                                value={input.password}
                                name="password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                                placeholder="********"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            {/* Account type selection (radio buttons) */}
                            <Label className="block text-sm font-medium text-gray-700 mb-3">
                                Select Account Type
                            </Label>
                            <RadioGroup className="flex items-center gap-4 my-5" >
                                <div className="flex items-center space-x-2">
                                    {/* Student radio button */}
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        onChange={changeEventHandler}
                                        checked={input.role === "student"}
                                        id="student"
                                        className="cursor-pointer "
                                    />
                                    <Label htmlFor="student" className="text-sm font-medium text-gray-800 cursor-pointer">
                                        Student
                                    </Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    {/* Recruiter radio button */}
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        onChange={changeEventHandler}
                                        checked={input.role === "recruiter"}
                                        id="recruiter"
                                        className="cursor-pointer  "
                                    />
                                    <Label htmlFor="recruiter" className="text-sm font-medium text-gray-800 cursor-pointer">
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <Button
                            type="submit"
                            className="w-full mt-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold py-2 rounded-lg hover:from-teal-600 hover:to-emerald-600 shadow-md transition"
                        >
                            Log In
                        </Button>

                        <p className="mt-6 text-sm text-center text-gray-600">
                            {/* Link to signup page */}
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-teal-500 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
