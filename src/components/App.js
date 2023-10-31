import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";

function App() {
  const blogDetails = blogData.posts.map((blog) => {
    return (
      <Article
        key={blog.id}
        title={blog.title}
        date={blog.date}
        preview={blog.preview}
        minutes={blog.minutes}
      />
    );
  });
  console.log(blogDetails);

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      {blogDetails}
    </div>
  );
}

export default App;
