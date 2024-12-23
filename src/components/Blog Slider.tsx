import React from 'react'
const Blog_Slider = () => {
    return (
        <>
            <div className="h-[600px] w-full bg-blog-slider bg-cover bg-center">
            <div className="w-full h-[600px] bg-cover bg-center " style={{ backgroundImage: "url('/images/Image.png')" }}></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-6 lg:px-20 space-y-4">
    {/* Adventure Tag */}
    <div className="flex justify-center items-center px-3 py-1 rounded bg-[rgba(255,255,255,0.15)]">
      <h2 className="text-white font-semibold text-sm ">ADVENTURE</h2>
    </div>

    {/* Title */}
    <h3 className="text-xl lg:text-3xl font-semibold leading-tight max-w-2xl text-white lora">
      Richird Norton photorealistic rendering as real photos
    </h3>

    {/* Date and Divider */}
    <div className="flex items-center space-x-2 text-sm text-[#E5E5E5]">
      <h3>08.08.2021</h3>
      <div className="w-px h-4 bg-[#E5E5E5]"></div>
    </div>

    {/* Description */}
    <p className="text-sm lg:text-base max-w-lg text-[#E5E5E5] lora">
      Progressively incentivize cooperative systems through technically sound
      functionalities. The credibly productivate seamless data.
    </p>

    {/* Dots Navigation */}
    <div className="flex space-x-2">
      <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div>
      <div className="w-3 h-3 rounded-full bg-[rgba(0,0,0,0.45)] cursor-pointer"></div>
      <div className="w-3 h-3 rounded-full bg-[rgba(0,0,0,0.45)] cursor-pointer"></div>
    </div>
                </div>
            </div>
        </>
    )
}

export default Blog_Slider