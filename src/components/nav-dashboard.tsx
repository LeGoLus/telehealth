"use client";

import { GrHomeRounded } from "react-icons/gr"; // Import the icon
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavDashboard() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"Dashboard"}
            onClick={() => (window.location.href = "/dashboard")}
          >
            <GrHomeRounded className="mr-2" />
            <span>Dashboard</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
