import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const Header = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb-logo"
        />
      </div>
      <div className="flex flex-row items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex flex-row items-center justify-end gap-2">
        <p className="hidden md:inline-flex text-black cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 bg-white text-gray-500" />
        <div className="flex flex-row items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 bg-white text-gray-500" />
          <UserCircleIcon className="h-6 bg-white text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
