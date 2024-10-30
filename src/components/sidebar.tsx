"use client";

import * as React from "react";
import {
  Search,
  Home,
  ShoppingCart,
  FileText,
  BarChart2,
  Tag,
  Image,
  RefreshCcw,
  Bell,
  Grid,
  FileSpreadsheet,
  FileText as FileTextIcon,
  ChevronRight,
  ChevronDown,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItem {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  { title: "Dashboard", icon: <Home className="h-4 w-4" />, href: "#" },
  {
    title: "POS SECTION",
    items: [
      {
        title: "New Sale",
        icon: <ShoppingCart className="h-4 w-4" />,
        href: "#",
      },
    ],
  },
  {
    title: "ORDER MANAGEMENT",
    items: [
      {
        title: "Orders",
        icon: <FileText className="h-4 w-4" />,
        items: [
          { title: "All", href: "#" },
          { title: "Scheduled", href: "#" },
          { title: "Pending", href: "#" },
          { title: "Accepted", href: "#" },
          { title: "Processing", href: "#" },
          { title: "Order On The Way", href: "#" },
          { title: "Delivered", href: "#" },
          { title: "Canceled", href: "#" },
          { title: "Payment Failed", href: "#" },
          { title: "Refunded", href: "#" },
          { title: "Offline Payment", href: "#" },
        ],
      },
      {
        title: "Orders Refunds",
        icon: <RefreshCcw className="h-4 w-4" />,
        items: [{ title: "Refund Request", href: "#" }],
      },
    ],
  },
  {
    title: "PROMOTION MANAGEMENT",
    items: [
      {
        title: "Campaigns",
        icon: <BarChart2 className="h-4 w-4" />,
        items: [
          { title: "Basic Campaigns", href: "#" },
          { title: "Item Campaigns", href: "#" },
        ],
      },
      { title: "Banners", icon: <Image className="h-4 w-4" />, href: "#" },
      {
        title: "Other Banners",
        icon: <Image className="h-4 w-4" />,
        href: "#",
      },
      { title: "Coupons", icon: <Tag className="h-4 w-4" />, href: "#" },
      {
        title: "Cashback",
        icon: <RefreshCcw className="h-4 w-4" />,
        href: "#",
      },
      {
        title: "Push Notification",
        icon: <Bell className="h-4 w-4" />,
        href: "#",
      },
    ],
  },
  {
    title: "PRODUCT MANAGEMENT",
    items: [
      {
        title: "Categories",
        icon: <Grid className="h-4 w-4" />,
        items: [
          { title: "Category", href: "#" },
          { title: "Sub Category", href: "#" },
          { title: "Bulk Import", href: "#" },
          { title: "Bulk Export", href: "#" },
        ],
      },
      {
        title: "Attributes",
        icon: <FileSpreadsheet className="h-4 w-4" />,
        href: "#",
      },
      { title: "Units", icon: <FileTextIcon className="h-4 w-4" />, href: "#" },
      {
        title: "Common Conditions",
        icon: <FileTextIcon className="h-4 w-4" />,
        href: "#",
      },
    ],
  },
];

export default function Sidebar({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`flex h-screen ${
        expanded ? "w-64" : "w-20"
      } transition-all flex-col border-r bg-background`}
    >
      <div className={`p-4 flex justify-between items-center`}>
        <img
          src="https://img.logoipsum.com/243.svg"
          className={`transition-all ${
            expanded ? "w-32" : "w-0"
          } overflow-hidden`}
          alt=""
        />
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Menu..."
            className={`pl-8 ${expanded ? "block" : "hidden"}`}
          />
        </div>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="space-y-2 px-2">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} expanded={expanded} />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}

function NavItem({ item, expanded }: { item: NavItem; expanded: boolean }) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!item.items) {
    return (
      <Button
        variant="ghost"
        asChild
        className="w-full justify-start text-left text-gray-700"
      >
        <a href={item.href} className="flex items-center gap-2">
          {item.icon}
          {expanded && <span>{item.title}</span>}
        </a>
      </Button>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-1">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start text-left font-bold uppercase text-gray-600"
        >
          <span className="flex items-center gap-2">
            {item.icon}
            {expanded && item.title}
          </span>
          {expanded &&
            (isOpen ? (
              <ChevronDown className="ml-auto h-4 w-4" />
            ) : (
              <ChevronRight className="ml-auto h-4 w-4" />
            ))}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className={`pl-6 ${expanded ? "block" : "hidden"}`}>
        {item.items.map((subItem, index) => (
          <NavItem key={index} item={subItem} expanded={expanded} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
