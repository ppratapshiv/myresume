import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import Blog from "../../components/Blog/Blog";
import Button from '../../components/Buttons/Button';
import {PiPaperPlaneTilt} from "react-icons/pi";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Footer from '../../components/Footer/Footer';
import profilepic from '../../assets/profile.png';
import blogImg1 from "../../assets/blog1.png";

const blogData = [
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
]
function Blogs() {
  return (
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
      <div className="px-2 pt-[5rem] pb-10 overflow-auto w-[80%] overflow-y-auto [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-[#ccc]
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className='w-[100%] text-center mx-auto'>
            <SectionTitle secTitle={'Want to hire me for custom package?'} secSubTitle={'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.'} exClassName='text-[1.75rem]'/>
            <Link to='/contact'>
                <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
            </Link>
            <div className="flex flex-wrap gap-y-5 pt-10 ">
              {blogData.map((bData, index) => (
                <Blog key={index} blogImg={bData.blogImg} blogDate={bData.blogDate} blogType={bData.blogType} BlogTitle={bData.BlogTitle}/>
              ))}
            </div>
            <Footer/>
        </div>
      </div>  
    </>
  );
}

export default Blogs;