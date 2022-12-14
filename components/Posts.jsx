import React from "react";
import Post from "./Post";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const Posts = ({ posts }) => {
  const [realtimePosts] = useCollection(
    query(collection(db, "posts"), orderBy("timestamp", "desc"))
  );

  return (
    <ul>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </ul>
  );
};

export default Posts;
