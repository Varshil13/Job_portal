<<<<<<< HEAD
import React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Link } from 'react-router-dom';
import { User2, LogOut } from 'lucide-react';

const Navbar = () => {
    const user = false;
    return (
        <div className="bg-white border-b">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 font-sans">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight">
                        <span className="text-gray-900">Hire</span>
                        <span className="text-teal-500">Verse</span>
                    </h1>
                </div>
                <div className="flex items-center gap-10">
                    <ul className="flex items-center gap-6 text-gray-700 font-medium">
                        <li className="hover:text-teal-500 cursor-pointer transition">Home</li>
                        <li className="hover:text-teal-500 cursor-pointer transition">Jobs</li>
                        <li className="hover:text-teal-500 cursor-pointer transition">Browse</li>
                    </ul>
                    {!user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/login">
                                <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 shadow-md">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer hover:ring-2 hover:ring-teal-300 transition">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>VS</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent align="end" className="w-64 p-4 rounded-xl shadow-lg bg-white space-y-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Varshil Sharma</h4>
                                        <p className="text-sm text-gray-500">Software Engineer</p>
                                    </div>
                                </div>
                                <div className="border-t pt-3 space-y-1">
                                    <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100">
                                        <User2 />
                                        View Profile
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">
                                        <LogOut />
                                        Logout
                                    </Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
=======
// import React from 'react'
// import { Button } from '../ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

// import { User2, LogOut } from 'lucide-react';
// const Navbar = () => {
//   const user = false;

//   return (
//     <div className="bg-white border-b">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 font-sans">
//         <div>
//           <h1 className="text-2xl font-extrabold tracking-tight">
//             <span className="text-gray-900">Hire</span>
//             <span className="text-pink-500">Verse</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-10">
//           <ul className="flex items-center gap-6 text-gray-700 font-medium">
//             <li className="hover:text-pink-500 cursor-pointer transition">Home</li>
//             <li className="hover:text-pink-500 cursor-pointer transition">Jobs</li>
//             <li className="hover:text-pink-500 cursor-pointer transition">Browse</li>
//           </ul>
//           {!user ? (
//             <div className=' flex items-center gap-4'>
//               <div className="flex items-center gap-4">
//               <Button
//                 variant="outline"
//                 className="text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition"
//               >
//                 Login
//               </Button>
//               <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md">
//                 Sign Up
//               </Button>
//             </div>

//             </div>
            
//           ) : (<Popover>
//             <PopoverTrigger asChild>
//               <Avatar className="cursor-pointer hover:ring-2 hover:ring-pink-300 transition">
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>VS</AvatarFallback>
//               </Avatar>
//             </PopoverTrigger>

//             <PopoverContent align="end" className="w-64 p-4 rounded-xl shadow-lg bg-white space-y-4">
//               <div className="flex items-center gap-4">
//                 <Avatar className="h-12 w-12">
//                   <AvatarImage src="https://github.com/shadcn.png" />
//                 </Avatar>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Varshil Sharma</h4>
//                   <p className="text-sm text-gray-500">Software Engineer</p>
//                 </div>
//               </div>

//               <div className="border-t pt-3 space-y-1">
//                 <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100">
//                   <User2 />
//                   View Profile
//                 </Button>
//                 <Button variant="ghost" className="w-full justify-start gap-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">
//                   <LogOut />
//                   Logout
//                 </Button>
//               </div>
//             </PopoverContent>
//           </Popover>)}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar





import React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { User2, LogOut } from 'lucide-react';

const Navbar = () => {
  const user = false;

  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 font-sans">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="text-gray-900">Hire</span>
            <span className="text-emerald-500">Verse</span>
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li className="hover:text-emerald-500 cursor-pointer transition">Home</li>
            <li className="hover:text-emerald-500 cursor-pointer transition">Jobs</li>
            <li className="hover:text-emerald-500 cursor-pointer transition">Browse</li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-emerald-600 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 transition"
              >
                Login
              </Button>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-md">
                Sign Up
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:ring-2 hover:ring-emerald-300 transition">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent align="end" className="w-64 p-4 rounded-xl shadow-lg bg-white space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">Varshil Sharma</h4>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>

                <div className="border-t pt-3 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    <User2 />
                    View Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-gray-700 hover:bg-emerald-50 hover:text-red-600"
                  >
                    <LogOut />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
>>>>>>> aed2f31119313a162726b40ff56209f1c057cb6a
};

export default Navbar;
