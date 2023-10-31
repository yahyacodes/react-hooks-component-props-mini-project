import React from "react";

const ArticleList = () => {
  return <Article />;
};

const Article = ({ title, date, preview, minutes }) => {
  return (
    <ArticleList>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{preview}</p>
      <span>{minutes}</span>
    </ArticleList>
  );
};

export default Article;
