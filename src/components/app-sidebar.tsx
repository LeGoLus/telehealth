"use client";

import * as React from "react";
import { BookOpen, Settings2, ShoppingCart } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavDashboard } from "./nav-dashboard";
import { NavPosSection } from "./nav-pos-section";
import { NavOrder } from "./nav-order-management";
import { NavPromotion } from "./nav-promotion-management";
import { NavProduct } from "./nav-product-management";

import { GoStack } from "react-icons/go";
import { Image, Images } from "lucide-react";
import { BsTicket } from "react-icons/bs";
import { RotateCcw } from "lucide-react";
import { PiBellSimpleLight } from "react-icons/pi";
import { BsDiagram3 } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiOutlineReceiptRefund } from "react-icons/hi2";

const ItemsOrderManagement = [
  {
    title: "Orders",
    url: "#",
    icon: ShoppingCart,
    items: [
      { title: "All", url: "#" },
      { title: "Scheduled", url: "#" },
      { title: "Pending", url: "#" },
      { title: "Accepted", url: "#" },
      { title: "Processing", url: "#" },
      { title: "Order On The Way", url: "#" },
      { title: "Delivered", url: "#" },
      { title: "Canceled", url: "#" },
      { title: "Payment Failed", url: "#" },
      { title: "Refunded", url: "#" },
      { title: "Offline Payment", url: "#" },
    ],
  },
  {
    title: "Order Refunds",
    url: "#",
    icon: HiOutlineReceiptRefund,
    items: [{ title: "Refund Request", url: "#" }],
  },
];

const ItemsPromotionManagement = [
  {
    title: "Campaigns",
    url: "#",
    icon: GoStack,
    items: [
      { title: "Basic Campaigns", url: "#" },
      { title: "Item Campaigns", url: "#" },
    ],
  },
  {
    title: "Banners",
    url: "#",
    icon: Image,
    items: [{ title: "Refund Request", url: "#" }],
  },
  {
    title: "Other Banners",
    url: "#",
    icon: Images,
    items: [{ title: "Introduction", url: "#" }],
  },
  {
    title: "Coupons",
    url: "#",
    icon: BsTicket,
    items: [{ title: "General", url: "#" }],
  },
  {
    title: "Cashback",
    url: "#",
    icon: RotateCcw,
    items: [{ title: "General", url: "#" }],
  },
  {
    title: "Push Notification",
    url: "#",
    icon: PiBellSimpleLight,
    items: [{ title: "General", url: "#" }],
  },
];

const ItemsProductManagement = [
  {
    title: "Categories",
    url: "#",
    icon: BsDiagram3,
    items: [
      { title: "Category", url: "#" },
      { title: "Sub Category", url: "#" },
      { title: "Bulk Import", url: "#" },
      { title: "Bulk Export", url: "#" },
    ],
  },
  {
    title: "Attributes",
    url: "#",
    icon: HiOutlineSquares2X2,
    items: [{ title: "Refund Request", url: "#" }],
  },
  {
    title: "Unit",
    url: "#",
    icon: HiOutlineReceiptRefund,
    items: [
      { title: "Introduction", url: "#" },
      { title: "Get Started", url: "#" },
      { title: "Tutorials", url: "#" },
      { title: "Changelog", url: "#" },
    ],
  },
  {
    title: "Common Conditions",
    url: "#",
    icon: HiOutlineReceiptRefund,
    items: [
      { title: "General", url: "#" },
      { title: "Team", url: "#" },
      { title: "Billing", url: "#" },
      { title: "Limits", url: "#" },
    ],
  },
  {
    title: "Product Setup",
    url: "/dashboard/items/1",
    icon: Settings2,
    items: [
      { title: "Add New", url: "/dashboard/items/1" },
      { title: "List", url: "#" },
      { title: "Product Gallery", url: "#" },
      { title: "Review", url: "#" },
    ],
  },
];

// Define projects data
// const projects = [
//   { name: "Project A", url: "#", icon: SquareTerminal },
//   { name: "Project B", url: "#", icon: Bot },
//   { name: "Project C", url: "#", icon: BookOpen },
// ];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [searchValue, setSearchValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <SidebarProvider>
      <Sidebar {...props} collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">TELEHEALTH</span>
                  <span className="truncate text-xs">Thailand</span>
                </div>
                <SidebarTrigger className="ml-auto" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <div className="px-2">
          <Command className="bg-white w-full rounded-lg">
            <CommandInput
              placeholder="search..."
              value={searchValue}
              onValueChange={setSearchValue}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <CommandList className="border-none">
              {isFocused && searchValue !== "" ? (
                <>
                  {/* Main Menu Group */}
                  <CommandGroup heading="Main Menu">
                    {ItemsOrderManagement.filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).map((item) => (
                      <CommandItem
                        key={item.title}
                        onSelect={() => (window.location.href = item.url)}
                      >
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </CommandItem>
                    ))}
                    {ItemsOrderManagement.filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).length === 0 && (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  </CommandGroup>

                  <CommandSeparator />

                  {/* Promotion Group */}

                  <CommandGroup heading="Promotion">
                    {ItemsPromotionManagement.filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).map((item) => (
                      <CommandItem
                        key={item.title}
                        onSelect={() => (window.location.href = item.url)}
                      >
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </CommandItem>
                    ))}
                    {ItemsPromotionManagement.filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).length === 0 && (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  </CommandGroup>

                  <CommandSeparator />

                  {/* Product Group */}

                  <CommandGroup heading="Product">
                    {ItemsProductManagement.filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).map((item) => (
                      <CommandItem
                        key={item.title}
                        onSelect={() => (window.location.href = item.url)}
                      >
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </CommandItem>
                    ))}
                    {ItemsProductManagement.filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).length === 0 && (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  </CommandGroup>

                  {/* Projects Group */}
                  {/* <CommandGroup heading="Projects">
                    {projects
                      .filter((project) =>
                        project.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      )
                      .map((project) => (
                        <CommandItem
                          key={project.name}
                          onSelect={() => (window.location.href = project.url)}
                        >
                          <project.icon className="mr-2" />
                          <span>{project.name}</span>
                        </CommandItem>
                      ))}
                    {projects.filter((project) =>
                      project.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ).length === 0 && (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  </CommandGroup> */}
                </>
              ) : null}
            </CommandList>
          </Command>
        </div>
        <SidebarContent>
          <NavDashboard />
          <NavPosSection />
          <NavOrder items={ItemsOrderManagement} />
          {/* <NavMain items={navMainItems} /> */}
          <NavPromotion items={ItemsPromotionManagement} />
          <NavProduct items={ItemsProductManagement} />
          {/* <NavProjects projects={projects} /> */}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
