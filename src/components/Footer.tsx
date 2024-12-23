import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="w-full max-w-[1440px] bg-[#212529] py-16 md:mt-[60px] mt-[30px] p-9">
                <div className="m-auto w-full max-w-[1162px] flex flex-wrap justify-between sm:flex-col md:flex-row text-white">
                    <div className="mb-6 sm:mb-4">
                        <ul>
                            <li className='lora font-bold text-[18px] leading-[25px]'>Contact the Publisher</li>
                            <li className='lora font-normal text-[16px] leading-[78px] text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>mike@runo.com</li>
                            <li className='lora font-normal text-[16px] leading-[2px] text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>+944 450 904 505</li>
                        </ul>
                    </div>
                    <div className="mb-6 sm:mb-4">
                        <ul className='lora font-normal text-[16px] flex flex-col text-[#E5E5E5]'>
                            <li className='lora font-bold text-[18px] leading-[25px] text-white mb-5'>Explorate</li>
                            <li className='text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>About</li>
                            <li className='text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>Explorate</li>
                            <li className='text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>Job Opportunities</li>
                            <li className='text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>Advertise</li>
                            <li className='text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>Members</li>
                        </ul>
                    </div>
                    <div className="mb-6 sm:mb-4">
                        <ul className='lora font-normal text-[16px] flex flex-col text-[#E5E5E5]'>
                            <li className='lora font-bold text-[18px] leading-[25px] text-white mb-5'>HeaderQuarter</li>
                            <li className='text-[#E5E5E5] cursor-pointer hover:text-[#FFD700]'>191 Middleville Road,<br />
                                NY 1001, Sydney<br />
                                Australia</li>
                        </ul>
                    </div>
                    <div className="mb-6 sm:mb-4">
                        <h4 className='lora font-bold text-[18px] leading-[25px] text-white mb-5'>Connections</h4>
                        <ul className="flex space-x-4 items-center">
                            <li><Link href="/">  <FaFacebook className="text-white cursor-pointer hover:text-[#FFD700]" size={25} /></Link></li>
                            <li><Link href="/"><FaTwitter className="text-white cursor-pointer hover:text-[#FFD700]" size={25} /></Link></li>
                            <li><Link href="/"><FaYoutube className="text-white cursor-pointer hover:text-[#FFD700]" size={25} /></Link></li>
                            <li><Link href="/"><FaPinterest className="text-white cursor-pointer hover:text-[#FFD700]" size={25} /></Link></li>
                            <li><Link href="/"><FaBehance className="text-white cursor-pointer hover:text-[#FFD700]" size={25} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
