"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Home,
  Mail,
  RefreshCcw,
  Settings,
  User,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card"; // Import the Card component

export default function MainNav() {
  return (
    <Card className="rounded-lg shadow-sm">
      <nav className="flex items-center justify-between p-4 bg-white rounded-lg">
        <div className="flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-blue-600"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/users" className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Users</span>
          </Link>
          <Link href="/transactions" className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Transactions & Reports</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/dispatch" className="flex items-center space-x-2">
            <RefreshCcw className="w-5 h-5" />
            <span>Dispatch Management</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Switch />
          <Button variant="ghost" size="icon">
            <img
              src="/placeholder.svg?height=24&width=24"
              alt="Language"
              className="w-6 h-6 rounded-full"
            />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </Button>
        </div>
      </nav>
    </Card>
  );
}
