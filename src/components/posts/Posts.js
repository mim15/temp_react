import React from "react";
import { Link } from "react-router-dom";

import { usePosts } from "../custom-hook/";

export default function Posts() {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;
    
    return posts.map(post => (
      <Link
      className="posts__post"
        key={post.fields.slug}
        to={ "/blogs/" + post.fields.slug}
        >
        <div>
          <img
            src={post.fields.featuredImage.fields.file.url}
            alt={post.fields.title}
          />
        </div>
        <small>{post.fields.date}</small>
        <h3>{post.fields.title}</h3>

        <p>{post.fields.description}</p>
      </Link>
    ));
  };
  
  return (
    <div className="posts__container">
      <h2>Articles</h2>

      <div className="posts">{renderPosts()}</div>
    </div>
  );
}
