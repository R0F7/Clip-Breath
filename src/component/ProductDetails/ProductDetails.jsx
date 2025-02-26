import { FaStar } from "react-icons/fa";
import productBG from "../../assets/product_bg.png";
import frame from "../../assets/Frame (1).png";
import Button from "../Button/Button";
import img1 from "../../assets/product image 1.png";
import img2 from "../../assets/product image 2.png";
import img3 from "../../assets/product image 3.png";
import img4 from "../../assets/product image 4.png";
import { IoIosArrowDown } from "react-icons/io";
import pay1 from "../../assets/paymentMethod/Item → Img.png";
import pay2 from "../../assets/paymentMethod/Item → Img (1).png";
import pay3 from "../../assets/paymentMethod/Item → Img (2).png";
import pay4 from "../../assets/paymentMethod/Item → Img (3).png";
import pay5 from "../../assets/paymentMethod/Item → Img (4).png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="container mx-auto py-10 lg:py-20">
      <div className=" flex flex-col md:flex-row gap-6 lg:gap-[64px] px-4 md:px-0">
        {/* image site */}
        <div className="w-full md:w-2/5 g:w-1/2">
          <div className="h-[350px] lg:h-[587.643px] bg-[#fff0e6] rounded-xl mb-[25px]">
            <img
              className="w-full h-full"
              src={productBG}
              alt=""
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div className=" grid grid-cols-4 gap-3 lg:gap-6">
            <img
              className="w-full h-[80px] lg:h-[115px] bg-[#6B2B00] rounded-md"
              src={img1}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <img
              className="w-full h-[80px] lg:h-[115px] bg-[#F8FAFB] rounded-md"
              src={img2}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <img
              className="w-full h-[80px] lg:h-[115px] bg-[#F8FAFB] rounded-md"
              src={img3}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <img
              className="w-full h-[80px] lg:h-[115px] bg-[#F8FAFB] rounded-md"
              src={img4}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </div>

        {/* text site */}
        <div
          className="w-full md:w-3/5 g:w-1/2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center gap-2 font-poppins mb-3">
            <ul className="flex text-yellow-400 gap-0.5">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <h4 className="text-lg font-semibold">4.5</h4>
            <span className="text-sm">(500+ Reviews)</span>
          </div>
          <h4
            className="text-[#12151A] text-4xl lg:text-[40px] font-semibold mb-2 leading-none"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Noseclip
          </h4>
          <div
            className="flex items-center gap-x-2 mb-4 lg:mb-[38.5px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#12151A]">
              $12.00
            </h2>
            <del className="text-xl lg:text-2xl font-medium text-red-500 ext-[#12151A]">
              $20.00
            </del>
            <span className="text-[10px] lg:text-xs font-semibold text-white bg-[#F60] py-1 px-2.5 rounded-sm">
              SAVE 10%
            </span>
          </div>
          <div>
            <h4
              className="text-[#12151A] text-2xl lg:text-3xl font-semibold mb-1.5 lg:mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Description:
            </h4>
            <p
              className="font-poppins mb-4 text-sm lg:text-base"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              A nasal clip is a small device typically used to pinch or secure
              the nostrils for various purposes, such as during sports, medical
              treatments, or personal health practices. It is usually made of
              flexible or padded materials to ensure comfort and a secure fit.
              Common uses include:
            </p>
            <ul
              className="grid grid-cols-2 gap-4 lg:w-[500px] text-lg font-medium list-inside mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <li className="flex items-center gap-1">
                <img src={frame} alt="" />
                <span>Boost performance</span>
              </li>
              <li className="flex items-center gap-1">
                <img src={frame} alt="" />
                <span>Stop snoring</span>
              </li>
              <li className="flex items-center gap-1">
                <img src={frame} alt="" />
                <span>Optimized Airflow</span>
              </li>
              <li className="flex items-center gap-1">
                <img src={frame} alt="" />
                <span>100% Drug Free</span>
              </li>
            </ul>
            <Button
              text="Add to Card"
              px="3 md:px-4 lg:px-5"
              py="2 md:py-2 lg:py-2.5"
              width={true}
            />
          </div>
          <div className="block md:hidden lg:block">
            <div className="grid grid-cols-5 gap-4 my-6">
              <img
                src={pay1}
                alt="apple pay"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={pay2}
                alt="google pay"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={pay3}
                alt="mastercard"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={pay4}
                alt="shop"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <img
                src={pay5}
                alt="visa card"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
            <ul className="mt-14"            >
              <li className="flex items-center justify-between border-b border-[#FFD0B0] pt-0 p-2 text-[#4A4C56] font-medium" data-aos="fade-up" data-aos-duration="1000">
                <p>Sizing information</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </li>
              <li className="flex items-center justify-between border-b border-[#FFD0B0] p-2 text-[#4A4C56] font-medium" data-aos="fade-up" data-aos-duration="1100">
                <p>Free resizing</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </li>
              <li className="flex items-center justify-between border-b border-[#FFD0B0] p-2 text-[#4A4C56] font-medium" data-aos="fade-up" data-aos-duration="1200">
                <p>Money back guarantee & free returns</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-5 gap-4 my-6">
          <img src={pay1} alt="apple pay" data-aos="zoom-in" data-aos-duration="1000"/>
          <img src={pay2} alt="google pay" data-aos="zoom-in" data-aos-duration="1000"/>
          <img src={pay3} alt="mastercard" data-aos="zoom-in" data-aos-duration="1000"/>
          <img src={pay4} alt="shop" data-aos="zoom-in" data-aos-duration="1000"/>
          <img src={pay5} alt="visa card" data-aos="zoom-in" data-aos-duration="1000"/>
        </div>
        <ul>
          <li className="flex items-center justify-between border-b border-[#FFD0B0] pt-0 p-2 text-[#4A4C56] font-medium" data-aos="fade-up" data-aos-duration="1000">
            <p>Sizing information</p>
            <i>
              <IoIosArrowDown />
            </i>
          </li>
          <li className="flex items-center justify-between border-b border-[#FFD0B0] p-2 text-[#4A4C56] font-medium" data-aos="fade-up" data-aos-duration="1000">
            <p>Free resizing</p>
            <i>
              <IoIosArrowDown />
            </i>
          </li>
          <li className="flex items-center justify-between border-b border-[#FFD0B0] p-2 text-[#4A4C56] font-medium" data-aos="fade-up" data-aos-duration="1000">
            <p>Money back guarantee & free returns</p>
            <i>
              <IoIosArrowDown />
            </i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;
