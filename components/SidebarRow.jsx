import Image from "next/image";
import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <li className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt="profile photo"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </li>
  );
};

export default SidebarRow;
