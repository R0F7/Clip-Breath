import { FaDiscord, FaLinkedin } from "react-icons/fa";
import Button from "../Button/Button";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#6B2B00] pt-[60px] pb-5">
      <div className="container mx-auto text-white text-center font-poppins">
        <h2 className="text-5xl font-semibold mb-2.5 font-[Montserrat]">Get in Touch</h2>
        <p className="w-[640px] mx-auto text-center mb-10">
          Our mission is to drive progress and enhance the lives of our
          customers by delivering superior products and services that exceed
          expectations.
        </p>
        <div className="flex justify-center mb-5">
          <Button text={"Order Now"} px={"20px"} py={"10px"}></Button>
        </div>
        <p className="border-b py-3.5 mb-6">
          &copy;Copyright Nasal clip.com. All rights reserved. 2025
        </p>
        <div className="flex justify-between">
          <div className="font-medium flex items-center gap-10">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
          <ul className="flex items-center font-medium gap-10">
            <li>Home</li>
            <li>Resources</li>
            <li>FAQ</li>
          </ul>
          <ul className="flex items-center gap-2.5">
            <li className="border rounded-[10px] p-3"><a href="#"><FaDiscord /></a></li>
            <li className="border rounded-[10px] p-3"><a href="#"><FaXTwitter /></a></li>
            <li className="border rounded-[10px] p-3"><a href="#"><RiInstagramFill /></a></li>
            <li className="border rounded-[10px] p-3"><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
