import before from "../../assets/before.png";
import after from "../../assets/after.png";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

const Results = () => {
  return (
    <section className="container mx-auto py-10 lg:py-20 px-4 md:px-0">
      <div className="text-center">
        <h1 className="text-[#070707] text-3xl leading-none lg:text-5xl font-semibold lg:leading-[55px]">
          Real Results You <br /> Can Feel
        </h1>
        <p className="w-full lg:w-[356px] mx-auto font-poppins pt-3 mb-6 lg:mb-12">
          See the difference our nasal clip can make for snoring and airflow.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* before section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <img className="w-full h-[300px] md:h-[370px] lg:h-[494px]" src={before} alt="before" />
          </div>
          <ul className="mt-6 lg:mt-12 space-y-5 lg:space-y-[42px] w-full lg:w-[595px]">
            <li>
              <div className="flex gap-2">
                <RxCross2 className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#4A4C56] p-1 text-white rounded-full" />
                <h2 className="text-[#4A4C56] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Flimsy
                </h2>
              </div>
              <p className="text-[#4A4C56] font-poppins pr-6 font-normal">
                Nasal strips have very little structure. When you inhale, they
                can still collapse,
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <RxCross2 className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#4A4C56] p-1 text-white rounded-full" />
                <h2 className="text-[#4A4C56] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Unsupportive
                </h2>
              </div>
              <p className="text-[#4A4C56] font-poppins pr-6 font-normal">
                Nasal strips don't hold your nose open as wide as Intake.
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <RxCross2 className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#4A4C56] p-1 text-white rounded-full" />
                <h2 className="text-[#4A4C56] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Falls off
                </h2>
              </div>
              <p className="text-[#4A4C56] font-poppins pr-6 font-normal">
                Don't wake up With your nasal strip stuck to your Pillow again.
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <RxCross2 className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#4A4C56] p-1 text-white rounded-full" />
                <h2 className="text-[#4A4C56] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Hurts your skin
                </h2>
              </div>
              <p className="text-[#4A4C56] font-poppins pr-6 font-normal">
                Nasal strips stick to the bridge of your nose using an
                aggressive adhesive. When you pull it off, your skin goes with
                it,
              </p>
            </li>
            <li>
              <div className="flex items-cente gap-2">
                <RxCross2 className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#4A4C56] p-1 text-white rounded-full" />
                <h2 className="text-[#4A4C56] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Pulls forward
                </h2>
              </div>
              <p className="text-[#4A4C56] font-poppins pr-6 font-normal">
                Nasal strips rely on the leverage of your nose bridge to widen
                the
              </p>
            </li>
          </ul>
        </div>

        {/* after section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <img className="w-full h-[300px] md:h-[370px] lg:h-[494px]" src={after} alt="after" />
          </div>
          <ul className="mt-6 lg:mt-12 space-y-5 lg:space-y-6 w-full lg:w-[600px]">
            <li>
              <div className="flex gap-2">
                <IoCheckmarkSharp className="w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#FF6600] p-1 text-white rounded-full" />
                <h2 className="text-[#070707] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Actually opens your nose
                </h2>
              </div>
              <p className="text-[#070707] font-poppins pr-6 font-normal">
                Intake doesrft flex, so your nose opens to the size Band you
                wear. We can open your nose up to 100% more,
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <IoCheckmarkSharp className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#FF6600] p-1 text-white rounded-full" />
                <h2 className="text-[#070707] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Durable
                </h2>
              </div>
              <p className="text-[#070707] font-poppins pr-6 font-normal">
                Intake is built strong and durable so your nose Stays open right
                where you want it, as long as you want it.
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <IoCheckmarkSharp className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#FF6600] p-1 text-white rounded-full" />
                <h2 className="text-[#070707] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Stays on all day/night{" "}
                </h2>
              </div>
              <p className="text-[#070707] font-poppins pr-6 font-normal">
                Intake will be precisely where you left it when you awaken,
                keeping your nasal passages open for uninterrupted breathing,
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <IoCheckmarkSharp className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#FF6600] p-1 text-white rounded-full" />
                <h2 className="text-[#070707] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Skin safe
                </h2>
              </div>
              <p className="text-[#070707] font-poppins pr-6 font-normal">
                Intake uses a strong magnetic Band to hold your nose open, not
                the bridge of your nose. We use less adhesive and we care that
                your skin stays where it belongs-—on your nose.
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <IoCheckmarkSharp className=" w-5 lg:w-7 h-5 lg:h-7 mt-1 lg:mt-0.5 bg-[#FF6600] p-1 text-white rounded-full" />
                <h2 className="text-[#070707] text-xl lg:text-2xl font-semibold mb-2 lg:mb-4">
                  Pulls outward
                </h2>
              </div>
              <p className="text-[#070707] font-poppins pr-6 font-normal">
                Intake pulls out on your nose. Using the suction cup like Tabs,
                the Band.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Results;
