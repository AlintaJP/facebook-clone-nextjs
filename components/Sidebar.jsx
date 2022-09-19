import React from "react";
import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

const rows = [
  {
    icon: UsersIcon,
    title: "Friends",
  },
  {
    icon: UserGroupIcon,
    title: "Groups",
  },
  {
    icon: ShoppingBagIcon,
    title: "Marketplace",
  },
  {
    icon: DesktopComputerIcon,
    title: "Watch",
  },
  {
    icon: CalendarIcon,
    title: "Events",
  },
  {
    icon: ClockIcon,
    title: "Memories",
  },
  {
    icon: ChevronDownIcon,
    title: "See More",
  },
];

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <section className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <ul>
        <SidebarRow src={session.user.image} title={session.user.name} />
        {rows.map((row) => (
          <SidebarRow key={row.title} Icon={row.icon} title={row.title} />
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
