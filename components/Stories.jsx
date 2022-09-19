import React from "react";
import StoryCard from "./StoryCard";
import { stories } from "../constants/stories";

const Stories = () => {
  return (
    <ul className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </ul>
  );
};

export default Stories;
