import Image from 'next/image'
import React from 'react'
import Person2 from "../../../public/images/person 2.png"
import Person3 from "../../../public/images/person 3.png"
import Person4 from "../../../public/images/person 4.png"
import AboutImage from "../../../public/images/images.jpg"
import { Header } from '@/components/Header'

const About = () => {
  return (
    <>
      <Header />
      <div className="mt-20 min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
            <Image
              src={AboutImage}
              alt="About Us"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
            <div className="md:ml-10 mt-6 md:mt-0">
              <h1 className="text-4xl lora font-bold text-gray-800">About Us</h1>
              <p className="text-gray-600 mt-4 md:text-lg text-sm leading-relaxed">
                Welcome to our platform! We specialize in creating solutions that transform lives
                and businesses. Our team of experts is committed to innovation, creativity, and
                customer satisfaction.
              </p>
              <p className="text-gray-600 mt-4 md:text-lg text-sm leading-relaxed">
                Since our inception, we have focused on delivering quality services that resonate
                with your needs and provide value. Join us as we continue this exciting journey.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-12 bg-blue-100 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold text-blue-700 lora">Our Mission</h2>
            <p className="text-gray-700 mt-4 md:text-lg text-sm leading-relaxed">
              Our mission is to create a positive impact by providing exceptional services and
              innovative solutions. We aim to empower individuals and businesses to achieve their
              goals with confidence.
            </p>
            <p className="text-gray-700 mt-4 md:text-lg text-sm leading-relaxed">
              Collaboration, transparency, and excellence are at the heart of everything we do.
              Together, let&apos;s build a brighter future!
            </p>
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center lora">What Our Clients Say</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700  md:text-base text-sm ">
                &quot;  Fantastic service! They truly understand customer needs and go the extra mile to
                  deliver excellence. Highly recommended! &quot;
                </p>

                <div className="flex justify-between mt-8">
                  <Image src={Person3} alt="Andrey Edison" className="mt-6"  />
                  <p className="mt-9">
                    <strong className="cursor-pointer text-blue-600 font-semibold">By Andrey Edison</strong><br />
                    Thinker & Designer
                  </p>
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 ">
                <p className="text-gray-700 md:text-base text-sm ">
                  &quot; Professional and reliable. Their innovative approach has helped my business
                  grow. Amazing team! &quot;
                </p>

                <div className="flex justify-between mt-4">
                  <Image src={Person2} alt="David Arthur" className="mt-6" />
                  <p className="mt-9">
                    <strong className="cursor-pointer text-blue-600 font-semibold">By David Arthur</strong><br />
                    Journalist
                  </p>
                </div>
              </div>
              {/* Review 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700  md:text-base text-sm">
                  &quot; Their attention to detail and dedication to customer satisfaction is unmatched.
                  I am thrilled with the results! &quot;
                </p>
                <div className="flex justify-between mt-4">
                  <Image src={Person4} alt="David Arthur" className="mt-6"  />
                  <p className="mt-9">
                    <strong className="cursor-pointer text-blue-600 font-semibold">By David Arthur</strong><br />
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 bg-gray-50 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold text-gray-800">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/services" className="text-blue-600 hover:text-blue-800">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-600 hover:text-blue-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-blue-600 hover:text-blue-800">
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center bg-[#343A40] px-4 md:px-16">
        <h3 className="lora font-normal text-[16px] text-[#E5E5E5] text-center md:text-left md:ml-32">
          2024 | @SadiaKhan985@gmail.com
          <br className="lora font-normal text-[12px] text-[#E5E5E5] cursor-pointer mt-2 md:mt-0" />
          Follow Now
        </h3>
      </div>
    </>
  )
}

export default About
