import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const articles = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });
  return <main>{articles}</main>;
};

export default ArticleList;

//if article takes less than 30 mins, round up to nearest 5, display coffee cup of each 5
//if article takes 30 mins of longer, round up to nearest 10, display bento box for each 10
