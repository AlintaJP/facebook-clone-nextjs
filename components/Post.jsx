import Image from "next/image";
import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, message, postImage, image, timestamp }) => {
  return (
    <li className="flex flex-col">
      <article className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt={name}
          />
          <div>
            <p className="font-medium">{name}</p>

            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>

        <p className="pt-4">{message}</p>

        {postImage && (
          <div className="relative h-56 md:h-96 bg-white mt-4">
            <Image
              src={postImage}
              objectFit="cover"
              layout="fill"
              alt="post image"
            />
          </div>
        )}
      </article>

      <footer className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </footer>
    </li>
  );
};

export default Post;
