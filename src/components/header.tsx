import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Users,
  FileText,
  Settings,
  RefreshCcw,
  Moon,
  Mail,
  Bell,
  ChevronDown,
} from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <Card className="rounded-lg px-4 py-3 shadow-lg">
      <header className="w-full px-2 py-0 bg-white">
        <div className="flex items-center justify-between h-12">
          {/* Left Navigation */}
          <nav className="flex items-center ml-0 space-x-6">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <Home className="w-5 h-5 text-blue-500" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/users"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <Users className="w-5 h-5 text-blue-500" />
              <span>Users</span>
            </Link>
            <Link
              href="/transactions"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <FileText className="w-5 h-5 text-blue-500" />
              <span>Transactions & Reports</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <Settings className="w-5 h-5 text-blue-500" />
                  <span>Settings</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/dispatch"
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <RefreshCcw className="w-5 h-5 text-blue-500" />
              <span>Dispatch Management</span>
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Moon className="w-5 h-5 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon">
              <img src="/us-flag.svg" alt="US Flag" className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5 text-gray-700" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5 text-gray-700" />
            </Button>
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </Card>
  );
};

export default Header;

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Home,
//   Users,
//   FileText,
//   Settings,
//   RefreshCcw,
//   Moon,
//   Mail,
//   Bell,
//   ChevronDown,
// } from "lucide-react";
// import React from "react";
// import { Card } from "./ui/card";

// interface HeaderProps {
//   className?: string;
// }

// const Header: React.FC<HeaderProps> = ({ className }) => {
//   return (
//     <Card className="rounded-lg px-4 py-3 shadow-lg auto-cols-auto">
//       <header className="w-full px-2 py-0 bg-white">
//         <div className="flex items-center justify-between h-12">
//           {/* Left Navigation */}
//           <nav className="flex items-center ml-0 space-x-6">
//             <Link
//               href="/dashboard"
//               className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//             >
//               <Home className="w-5 h-5 text-blue-500" />
//               <span>Dashboard</span>
//             </Link>
//             <Link
//               href="/users"
//               className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//             >
//               <Users className="w-5 h-5 text-blue-500" />
//               <span>Users</span>
//             </Link>
//             <Link
//               href="/transactions"
//               className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//             >
//               <FileText className="w-5 h-5 text-blue-500" />
//               <span>Transactions & Reports</span>
//             </Link>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//                 >
//                   <Settings className="w-5 h-5 text-blue-500" />
//                   <span>Settings</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Preferences</DropdownMenuItem>
//                 <DropdownMenuItem>Logout</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <Link
//               href="/dispatch"
//               className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
//             >
//               <RefreshCcw className="w-5 h-5 text-blue-500" />
//               <span>Dispatch Management</span>
//             </Link>
//           </nav>

//           {/* Right Actions */}
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="icon">
//               <Moon className="w-5 h-5 text-gray-700" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <img src="/us-flag.svg" alt="US Flag" className="w-5 h-5" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Mail className="w-5 h-5 text-gray-700" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Bell className="w-5 h-5 text-gray-700" />
//             </Button>
//             <Avatar>
//               <AvatarImage src="/avatar.jpg" alt="User" />
//               <AvatarFallback>U</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>
//       </header>
//     </Card>
//   );
// };

// export default Header;
