import Image from 'next/image'
import React from 'react'
import Blog1 from "../../../public/images/Blog 1.png"
import Blog2 from "../../../public/images/Blog 2.png"
import Sub_Footer from '@/components/Sub Footer'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blog } from '../../../Data/data';

const Articles = () => {
  return (
    <>
      <div className="md:ml-[40px] max-w-full md:mt-24 mt-9 min-h-screen overflow-x-hidden relative p-[9px]">
        {/* Popular Topics Heading */}
        <div className="w-full h-[46px] font-bold md:text-[36px] text-[20px] text-[#495057] mt-12">
          <h3>Popular topics Articles</h3>
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
          <div className="ml-auto">
            <button className="text-[#495057] font-bold text-[12px] sm:text-[14px] hidden">
              View All
            </button>
          </div>
        </div>

        {/* Blog Entries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {blog.map((blog) => {
            return (
              <Link key={blog.id} href={`/articles/${blog.id}`}>
                <div className="border border-[#ddd] shadow-lg rounded-[5px] p-3 m-4">
                  <div className="w-full bg-cover bg-center rounded-[5px]">
                    <Image
                      src={blog.image}
                      alt=''
                      width={500}
                      height={100}
                    />
                  </div>
                  <div className="text-[#6C757D] text-[12px] mt-2">{blog.date}</div>
                  <div className="text-[#495057] font-bold text-[18px] mt-1">{blog.title}</div>
                  <div className="text-[#6C757D] text-[12px] mt-2 line-clamp-2">
                    {blog.description}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Image src={blog.authorImage} alt="" className="mt-6" height={30} width={50} />
                    <p className="mt-9 lora">
                      <strong className="cursor-pointer"> {blog.authorName}</strong><br />
                      {blog.job}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="md:ml-9 mt-2">
  <h1 className="w-full h-[46px] font-bold lora md:text-[36px] text-[24px] text-[#495057] ml-3">
    Editor&apos;s Pick
  </h1>
  
  <div className="mt-10 flex justify-between flex-wrap w-full">
    {/* Blog1 Image */}
    <div className="w-full sm:w-1/2 lg:w-1/2 px-2 mb-4">
      <Image src={Blog1} alt="Blog1" className="w-full h-auto rounded-[5px]" />
    </div>
    
    {/* Blog2 Image */}
    <div className="w-full sm:w-1/2 lg:w-1/2 px-2 mb-4">
      <Image src={Blog2} alt="Blog2" className="w-full h-auto rounded-[5px]" />
    </div>
  </div>
</div>


     {/* Additional Large Images Section */}
     <div className="mt-2 mx-4 sm:mx-4 md:mx-0">
  <div
    className="w-full h-[280px] bg-cover bg-center rounded-[5px]"
    style={{ backgroundImage: "url('/images/Big Post 2 .png')" }}
  ></div>
</div>
<div className="mt-7 mx-4 sm:mx-8 md:mx-0">
  <div
    className="w-full h-[280px] bg-cover bg-center rounded-[5px]"
    style={{ backgroundImage: "url('/images/Image.png')" }}
  ></div>
</div>
      <Footer />
      <Sub_Footer />
    </>
  )
}

export default Articles;
