import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaPhone } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#252B42] text-white flex items-center justify-center w-full">
      <div className="w-[80%] flex flex-col items-center">
        <div className="flex flex-col items-center lg:flex-row  w-full  justify-between py-[40px]">
          <div className="flex flex-col items-center lg:items-start">
            <div className="montserrat-h3 mb-[10px]">
              Consulting Agency For Your Business
            </div>
            <div className="font-[montserrat] font-normal text-[14px] leading-[20px] tracking-[0.2px]  text-center lg:text-left">
              The quick fox jumps over the lazy dog
            </div>
          </div>
          <PrimaryButton className="mt-[20px] lg:mt-0 mx-[50px]">
            <p className="btn-text">Contact Us</p>
          </PrimaryButton>
        </div>
        <div className="flex py-[50px] flex-col lg:flex-row justify-between w-full">
          <div className="flex flex-col gap-[20px]">
            <h5 className="montserrat-h5 text-left">Company Info</h5>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Carrier</Link>
            <Link to={"#"}>We are hiring</Link>
            <Link to={"#"}>Blog</Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h5 className="montserrat-h5 text-left ">Legal</h5>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Carrier</Link>
            <Link to={"#"}>We are hiring</Link>
            <Link to={"#"}>Blog</Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h5 className="montserrat-h5 text-left ">Features</h5>
            <Link to={"#"}>Business Marketing</Link>
            <Link to={"#"}>User Analytic</Link>
            <Link to={"#"}>Live Chat</Link>
            <Link to={"#"}>Unlimited Support</Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h5 className="montserrat-h5 text-left ">Resources</h5>
            <Link to={"#"}>Ios & Android</Link>
            <Link to={"#"}>Watch a Demo</Link>
            <Link to={"#"}>Customers</Link>
            <Link to={"#"}>API</Link>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h5 className="montserrat-h5 text-left ">Get In Touch</h5>
            <Link to={"#"} className="flex gap-[10px] items-center">
              <FaPhone /> (480) 555-0103
            </Link>
            <Link to={"#"} className="flex gap-[10px] items-center">
              <CiLocationOn /> 4517 Washington Ave.
            </Link>
            <Link to={"#"} className="flex gap-[10px] items-center">
              <SlEnvolopeLetter /> debra.holt@example.com
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center py-[25px] w-full">
          <h6 className="montserrat-h6">
            Made With Love By Finland All Right Reserved
          </h6>
          <div className="text-[#23A6F0] flex items-center gap-[20px]">
            <Link>
              <FaFacebook className="text-[23px]" />
            </Link>
            <Link>
              <FaInstagram className="text-[23px]" />
            </Link>
            <Link>
              <FaTwitter className="text-[23px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
