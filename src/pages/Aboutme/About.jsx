import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi2";
import {Link} from 'react-router-dom';
// import Meta from  "../../components/Meta/Meta";
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import profilepic from '../../assets/profile.png';
import Button from "../../components/Buttons/Button";
import PortfolioExperience from "../../components/PortfolioExperience/PortfolioExperience";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Features from '../../components/Features/Features';
import TechBox from "../../components/TechBox/TechBox";
import Blog from "../../components/Blog/Blog";
import ContactCta from "../../components/ContactCta/ContactCta";
import Footer from '../../components/Footer/Footer';
import TechBoxIcon1 from "../../assets/techlang/js.png";
import bgImage from '../../assets/bg.png';
import profilePic from "../../assets/user.jpg";
import featureImg from "../../assets/project1.png";
import blogImg1 from "../../assets/blog1.png";

const ButtonData = [
  {
    icon: <IoMdArrowForward />,
    color: "bg-[#5271ff] text-white hover:bg-black hover:text-white",
    label: "View Portfolio",
    link:'/portfolio',
  },
  {
    icon: <HiDocumentText />,
    color: "bg-[#000000] text-white hover:bg-[#5271ff] hover:text-white",
    label: "View Resume",
    link:'/resume',
  },
]

// section contents start
const PortfolioExperienceData = [
  {
    portInfoNumber:'5',
    portInfoTitle:'Years of Experience',
  },
  {
    portInfoNumber:'110',
    portInfoTitle:'Project Completed',
  },
  {
    portInfoNumber:'6k',
    portInfoTitle:'Clients Worldwide',
  },
]
const TechBoxData = [
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1, TechBoxIcon1, TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
]
const featureData = [
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
]

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
]
// section contents ends

function About({title, subtitle, titleContent}){
 return (
    <>
      
    </>
 )   
}

export default About;