import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt="facebook logo"
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <nav className="flex justify-center flex-grow">
        <ul className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </ul>
      </nav>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="profile picture"
        />
        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
