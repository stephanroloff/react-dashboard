"use client";

import * as React from "react";

import { SidebarMenuButton } from "@/components/ui/sidebar";

import { NavMain } from "@/components/Dashboard/nav-main";
import { NavUser } from "@/components/Dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TerminalSquareIcon, BookOpenIcon, Settings2Icon } from "lucide-react";
import earth from "../../assets/earth.png";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: <TerminalSquareIcon />,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/",
        },
        {
          title: "Starred",
          url: "/products",
        },
        {
          title: "Settings",
          url: "/settings",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: <BookOpenIcon />,
      items: [
        {
          title: "Introduction",
          url: "/introduction",
        },
        {
          title: "Get Started",
          url: "/get-started",
        },
        {
          title: "Tutorials",
          url: "/tutorials",
        },
        {
          title: "Changelog",
          url: "/changelog",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <Settings2Icon />,
      items: [
        {
          title: "General",
          url: "/general",
        },
        {
          title: "Team",
          url: "/team",
        },
        {
          title: "Billing",
          url: "/billing",
        },
        {
          title: "Limits",
          url: "/limits",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="text-white pt-4">
        <SidebarMenuButton
          tooltip={"Dashboard"}
          className="hover:bg-[var(--primary-foreground)]"
        >
          <img src={earth} alt="logo" className="w-[16px] h-[16px] p-0" />
          <span className="text-2xl font-bold text-black dark:text-white">
            Dashboard
          </span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="pb-4">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
