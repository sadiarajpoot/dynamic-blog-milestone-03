import React from 'react';
import Image from 'next/image';
import { blog } from '../../Data/data';
import Link from 'next/link';

function Blog_Regular() {
  return (
    <div className="md:ml-[40px] max-w-full min-h-screen overflow-x-hidden relative p-[9px]">
      {/* Popular Topics Heading */}
      <div className="w-full h-[46px] font-bold md:text-[36px] text-[20px]  text-[#495057] mt-12">
        <h3>Popular topics</h3>
      </div>

      {/* Topics Navigation */}
      <div className="flex gap-2 sm:gap-4 md:mt-6 flex-wrap">
        <div className="md:font-bold font-normal text-[12px] sm:text-[14px] text-[#D4A373] cursor-pointer">
          <h3>All</h3>
        </div>
        <div className="md:font-bold font-normal text-[12px] sm:text-[14px] text-[#495057] cursor-pointer">
          <h3>Adventures</h3>
        </div>
        <div className="md:font-bold font-normal text-[12px] sm:text-[14px] text-[#495057] cursor-pointer">
          <h3>Travel</h3>
        </div>
        <div className="md:font-bold font-normal text-[12px] sm:text-[14px] text-[#495057] cursor-pointer">
          <h3>Fashion</h3>
        </div>
        <div className="md:font-bold font-normal text-[12px] sm:text-[14px] text-[#495057] cursor-pointer">
          <h3>Technology</h3>
        </div>
        

        {/* View All Button */}
        {/* <div className="ml-auto">
          <button className="text-[#495057] font-bold text-[12px] sm:text-[14px] sm:hidden">
            View All
          </button>
        </div> */}
      </div>

      {/* Blog Entries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {blog.map((blog) => {
          return (
            <Link key={blog.id} href={`/articles/${blog.id}`}>
              <div className="border border-[#ddd] shadow-lg rounded-[5px] p-3  m-3">
                <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] bg-cover bg-center rounded-[5px]">
                  <img
                    src={blog?.image || '/default-author.jpg'}
                    alt={blog?.title || 'Blog Image'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[#6C757D] text-[12px] sm:text-[14px] mt-2">{blog.date}</div>
                <div className="text-[#495057] font-bold text-[16px] sm:text-[18px] mt-1">{blog.title}</div>
                <div className="text-[#6C757D] line-clamp-3 text-[12px] sm:text-[14px] mt-2">
                  {blog.description}
                </div>
                <div className="flex justify-between mt-4">
                  <Image
                    src={blog.authorImage}
                    alt={blog.authorName}
                    className="mt-6"
                    height={30}
                    width={50}
                  />
                  <p className="mt-9 lora text-[12px] sm:text-[14px]">
                    <strong className="cursor-pointer">{blog.authorName}</strong><br />
                    {blog.job}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Blog_Regular;
