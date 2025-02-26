import { FaStar } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";

const ChoosePlan = () => {
  return (
    <section className="container mx-auto py-6 lg:py-12 px-4 md:px-0">
      <h1 className="text-[#F60] text-3xl lg:text-5xl font-semibold mb-8 lg:mb-[66px] text-center">
        Choose the Best Plan for You
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-[#D2D2D5] rounded-2xl text-center group hover:cursor-pointer hover:scale-y-105 transition duration-300">
          <div className="bg-[#FFF0E6] text-[#1D1F2C] p-4 lg:p-6 rounded-t-2xl group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            <h4 className="text-xl lg:text-2xl font-semibold">
              1-month supply
            </h4>
            <p className="text-sm lg:text-base font-medium">30 Sticky Tabs</p>
          </div>
          <div className="my-3.5 lg:my-7 space-y-2 lg:space-y-4">
            <h1 className="text-[#1D1F2C] font-bold text-2xl lg:text-[32px]">$29.99</h1>
            <div className="bg-[#D2D2D5] w-[150px] lg:w-[179px] h-0.5 mx-auto"></div>
            <h4 className="text-[#F60] font-semibold text-lg lg:text-xl">(5% discount)</h4>
          </div>
          <button className="lg:text-xl font-bold border border-[#F60] text-[#F60] py-1.5 px-8 lg:py-4 lg:px-12 mb-2 lg:mb-4 rounded-lg group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            Buy Now
          </button>

          <ul className="p-3 space-y-2 mb-1">
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6]  mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Intake doesrft flex, so your nose opens to the size Band you
                wear. We can open your nose up to 100% more,
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Whole Starter kit
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="  w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free Returns
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free shipping with every bundle after 3 month supply
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 font-poppins mb-8">
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
            <h4 className="text-sm font-semibold">5</h4>
            <span className="text-sm text-[#1D1F2C] font-poppins">
              (500+ Reviews)
            </span>
          </div>
        </div>

        <div className="border border-[#D2D2D5] rounded-2xl text-center group hover:cursor-pointer hover:scale-y-105 transition duration-300">
          <div className="bg-[#FFF0E6] text-[#1D1F2C] p-4 lg:p-6 rounded-t-2xl group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            <h4 className="text-xl lg:text-2xl font-semibold">
              1-month supply
            </h4>
            <p className="text-sm lg:text-base font-medium">30 Sticky Tabs</p>
          </div>
          <div className="my-3.5 lg:my-7 space-y-2 lg:space-y-4">
            <h1 className="text-[#1D1F2C] font-bold text-2xl lg:text-[32px]">$79.99</h1>
            <div className="bg-[#D2D2D5] w-[150px] lg:w-[179px] h-0.5 mx-auto"></div>
            <h4 className="text-[#F60] font-semibold text-lg lg:text-xl">(10% discount)</h4>
          </div>
          <button className="lg:text-xl font-bold border border-[#F60] text-[#F60] py-1.5 px-8 lg:py-4 lg:px-12 mb-2 lg:mb-4 rounded-lg group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            Buy Now
          </button>

          <ul className="p-3 space-y-2 mb-1">
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6]  mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Intake doesrft flex, so your nose opens to the size Band you
                wear. We can open your nose up to 100% more,
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Whole Starter kit
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="  w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free Returns
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free shipping with every bundle after 3 month supply
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 font-poppins mb-8">
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
            <h4 className="text-sm font-semibold">5</h4>
            <span className="text-sm text-[#1D1F2C] font-poppins">
              (500+ Reviews)
            </span>
          </div>
        </div>

        <div className="border border-[#D2D2D5] rounded-2xl text-center group hover:cursor-pointer hover:scale-y-105 transition duration-300">
          <div className="bg-[#FFF0E6] text-[#1D1F2C] p-4 lg:p-6 rounded-t-2xl group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            <h4 className="text-xl lg:text-2xl font-semibold">
              1-month supply
            </h4>
            <p className="text-sm lg:text-base font-medium">30 Sticky Tabs</p>
          </div>
          <div className="my-3.5 lg:my-7 space-y-2 lg:space-y-4">
            <h1 className="text-[#1D1F2C] font-bold text-2xl lg:text-[32px]">$149.99</h1>
            <div className="bg-[#D2D2D5] w-[150px] lg:w-[179px] h-0.5 mx-auto"></div>
            <h4 className="text-[#F60] font-semibold text-lg lg:text-xl">(20% discount)</h4>
          </div>
          <button className="lg:text-xl font-bold border border-[#F60] text-[#F60] py-1.5 px-8 lg:py-4 lg:px-12 mb-2 lg:mb-4 rounded-lg group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            Buy Now
          </button>

          <ul className="p-3 space-y-2 mb-1">
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6]  mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Intake doesrft flex, so your nose opens to the size Band you
                wear. We can open your nose up to 100% more,
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Whole Starter kit
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="  w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free Returns
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free shipping with every bundle after 3 month supply
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 font-poppins mb-8">
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
            <h4 className="text-sm font-semibold">5</h4>
            <span className="text-sm text-[#1D1F2C] font-poppins">
              (500+ Reviews)
            </span>
          </div>
        </div>

        <div className="border border-[#D2D2D5] rounded-2xl text-center group hover:cursor-pointer hover:scale-y-105 transition duration-300">
          <div className="bg-[#FFF0E6] text-[#1D1F2C] p-4 lg:p-6 rounded-t-2xl group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            <h4 className="text-xl lg:text-2xl font-semibold">
              1-month supply
            </h4>
            <p className="text-sm lg:text-base font-medium">30 Sticky Tabs</p>
          </div>
          <div className="my-3.5 lg:my-7 space-y-2 lg:space-y-4">
            <h1 className="text-[#1D1F2C] font-bold text-2xl lg:text-[32px]">$240.99</h1>
            <div className="bg-[#D2D2D5] w-[150px] lg:w-[179px] h-0.5 mx-auto"></div>
            <h4 className="text-[#F60] font-semibold text-lg lg:text-xl">(30% discount)</h4>
          </div>
          <button className="lg:text-xl font-bold border border-[#F60] text-[#F60] py-1.5 px-8 lg:py-4 lg:px-12 mb-2 lg:mb-4 rounded-lg group-hover:bg-[#F60] group-hover:text-white transition duration-300">
            Buy Now
          </button>

          <ul className="p-3 space-y-2 mb-1">
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6]  mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Intake doesrft flex, so your nose opens to the size Band you
                wear. We can open your nose up to 100% more,
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className=" w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Whole Starter kit
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="  w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free Returns
              </p>
            </li>
            <li className="flex gap-3">
              <IoCheckmarkSharp className="w-4 h-4 lg:w-6 lg:h-6 p-0.5 lg:p-1 bg-[#DCFAE6] mt-0.5 text-[#17B26A] rounded-full" />
              <p className="text-[#475467] font-poppins w-full lg:w-[322px] text-start text-sm lg:text-base">
                Free shipping with every bundle after 3 month supply
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 font-poppins mb-8">
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
            <h4 className="text-sm font-semibold">5</h4>
            <span className="text-sm text-[#1D1F2C] font-poppins">
              (500+ Reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
