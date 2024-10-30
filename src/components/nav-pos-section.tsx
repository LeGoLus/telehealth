"use client";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LiaShoppingBasketSolid } from "react-icons/lia";

export function NavPosSection() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>POS SECTION</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"New Sale"}
            onClick={() => (window.location.href = "/new-sale")}
          >
            <LiaShoppingBasketSolid className="mr-2" />
            <span>New Sale</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
