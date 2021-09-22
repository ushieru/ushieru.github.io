import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=ushieru")
      .then((response) => response.json())
      .then(setBlogs);
  }, []);

  return (
    <>
      <p className="text-gray-100 text-3xl text-left w-full mb-4 px-2 sm:container sm:text-5xl sm:mt-10 sm:mb-8">
        Articles:
      </p>
      <div className="overflow-auto px-2 sm:container flex-grow">
        <div className="grid grid-cols-1 auto-rows-max gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
          {blogs.map((blog) => (
            <a
              href={blog.url}
              target="_blank"
              className="flex flex-col border text-gray-100 border-gray-700 rounded p-4"
            >
              <div className="flex justify-between">
                <p className="truncate font-bold text-lg">{blog.title}</p>
                <div className="w-10" />
                <p className="flex-shrink-0">{blog.readable_publish_date}</p>
              </div>
              <p className="mt-8 flex-grow">{blog.description}</p>
              <p className="text-right mt-8">{blog.tags}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="h-4" />
    </>
  );
};

export default Blog;
