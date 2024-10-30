"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Home,
  Users,
  FileText,
  Settings,
  RefreshCcw,
  Moon,
  Sun,
  Mail,
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";
import Sidebar from "./sidebar";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-md">
        <nav className="flex flex-col space-y-2 p-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Home className="w-5 h-5 text-blue-500" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/users"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Users className="w-5 h-5 text-blue-500" />
            <span>Users</span>
          </Link>
          <Link
            href="/transactions"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <FileText className="w-5 h-5 text-blue-500" />
            <span>Transactions & Reports</span>
          </Link>
          <Link
            href="/dispatch"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <RefreshCcw className="w-5 h-5 text-blue-500" />
            <span>Dispatch Management</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Settings className="w-5 h-5 text-blue-500" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1">
        <Card className="rounded-lg px-3 py-0 shadow-lg">
          <header className="w-full px-4 py-3 bg-background">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4 px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="text-muted-foreground"
                >
                  <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                  <Sun className="absolute h-5 w-5 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <img
                    src="/us-flag.svg?height=20&width=20"
                    alt="US Flag"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                >
                  <Mail className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                </Button>
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <nav className="md:hidden">
                <div className="flex flex-col p-4 bg-white shadow-md">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/users"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Users
                  </Link>
                  <Link
                    href="/transactions"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Transactions & Reports
                  </Link>
                  <Link
                    href="/dispatch"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Dispatch Management
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Settings
                        <ChevronDown className="w-4 h-4 inline-block" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Preferences</DropdownMenuItem>
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </nav>
            )}
          </header>
        </Card>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card } from "@/components/ui/card";
// import {
//   Home,
//   Users,
//   FileText,
//   Settings,
//   RefreshCcw,
//   Moon,
//   Sun,
//   Mail,
//   Bell,
//   ChevronDown,
//   Menu,
// } from "lucide-react";
// import { SidebarProvider } from "./ui/sidebar";
// import { AppSidebar } from "./app-sidebar";

// export default function Header() {
//   const { theme, setTheme } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <div>
//       <div className="flex bg-white justify-start">TEST</div>
//       <div className="flex h-8 bg-black justify-end">
//         <div className="flex  bg-red-400">
//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMenuOpen((prev) => !prev)}
//             >
//               <Menu className="w-6 h-6" />
//               <span className="sr-only">Open menu</span>
//             </Button>
//           </div>

//           {/* Right Actions */}
//           <div className="hidden md:flex items-center space-x-4 ">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//               className="text-muted-foreground"
//             >
//               <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
//               <Sun className="absolute h-5 w-5 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//               <span className="sr-only">Toggle theme</span>
//             </Button>
//             <Button variant="ghost" size="icon">
//               <img
//                 src="/us-flag.svg?height=20&width=20"
//                 alt="US Flag"
//                 className="w-5 h-5"
//               />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-muted-foreground"
//             >
//               <Mail className="w-5 h-5" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-muted-foreground relative"
//             >
//               <Bell className="w-5 h-5" />
//               <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
//             </Button>
//             <Avatar>
//               <AvatarImage
//                 src="/placeholder.svg?height=32&width=32"
//                 alt="User"
//               />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu Open*/}
//         {isMenuOpen && (
//           <Card className="rounded-lg px-3 py-0 shadow-lg">
//             <div className="flex flex-col p-4 shadow-md bg-white">
//               <Link
//                 href="/dashboard"
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 href="/users"
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground"
//               >
//                 Users
//               </Link>
//               <Link
//                 href="/transactions"
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground"
//               >
//                 Transactions & Reports
//               </Link>
//               <Link
//                 href="/dispatch"
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground"
//               >
//                 Dispatch Management
//               </Link>
//               <div className="flex items-center space-x-4 px-4">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//                   className="text-muted-foreground"
//                 >
//                   <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
//                   <Sun className="absolute h-5 w-5 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                   <span className="sr-only">Toggle theme</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <img
//                     src="/us-flag.svg?height=20&width=20"
//                     alt="US Flag"
//                     className="w-5 h-5"
//                   />
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-muted-foreground"
//                 >
//                   <Mail className="w-5 h-5" />
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-muted-foreground relative"
//                 >
//                   <Bell className="w-5 h-5" />
//                   <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
//                 </Button>
//                 <Avatar>
//                   <AvatarImage
//                     src="/placeholder.svg?height=32&width=32"
//                     alt="User"
//                   />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//               </div>
//             </div>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }
