import face from "../../assets/face.png";
import Product_image from "../../assets/Product image.png";

const HowItWorks = () => {
  return (
    <section className="bg-[#6B2B00] py-10 lg:py-20 px-4 md:px-0">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* img */}
          <div className="w-full lg:w-1/2">
            <div className="text-white">
              <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
                How It Works
              </h2>
              <p className="font-medium mb-8 w-full lg:w-[584px] font-poppins">
                Using our nasal clip is effortless and effective. Follow these
                steps to enjoy better airflow and relief from snoring or
                congestion.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <img className="md:w-[450px] lg:w-auto" src={face} alt="face" />
            </div>
          </div>

          {/* card  */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative group hover:bg-[#F60] transition duration-300">
              <h4 className="text-2xl font-semibold mb-3">Clean</h4>
              <p className="font-poppins text-sm lg:text-base">
                Clean your nose thoroughly to remove any dirt or oil from the
                skin. Let your nose dry completely before applying the Tabs.{" "}
                <br />
                <span className="font-semibold">Pro-Tip:</span> Cleanse with
                soap and water or use an alcohol prep pad for best results.
              </p>
              <span className="absolute top-0 right-0 bg-[#F60] group-hover:bg-[#B54800] transition duration-300 sm-btn px-3.5 py-0.5 text-xs font-poppins ">
                Step 1
              </span>
            </div>
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative group hover:bg-[#F60] transition duration-300">
              <h4 className="text-2xl font-semibold mb-3">Apply</h4>
              <p className="font-poppins font-light  text-sm lg:text-base">
                Using the Applicator. apply one adhesive Tab to each side Of
                your nose. just above the nostrils. Press each Tab onto your
                skin to ensure complete contact. Wait a few minutes before
                attaching the band.
              </p>
              <span className="absolute top-0 right-0 bg-[#F60] sm-btn px-3.5 py-0.5 text-xs font-poppins group-hover:bg-[#B54800] transition duration-300">
                Step 2
              </span>
            </div>
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative group hover:bg-[#F60] transition duration-300">
              <h4 className="text-2xl font-semibold mb-3">Tab placement</h4>
              <p className="font-poppins text-sm lg:text-base">
                There are some tips to use I-I-Will.
              </p>
              <ul className="list-disc list- ml-4 font-poppins text-sm lg:text-base">
                <li>
                  Steel disc placed directly above the nostril (not on the
                  nostril)
                </li>
                <li>Contoured indent fits around the nostril</li>
                <li>
                  100% contact with skin on tho nose, not the check Always be
                  sure to apply the Tabs properly. If the Tabs aren't placed
                  well, the Band will not attach well.
                </li>
              </ul>
              <span className="absolute top-0 right-0 bg-[#F60] sm-btn px-3.5 py-0.5 text-xs font-poppins group-hover:bg-[#B54800] transition duration-300">
                Step 3
              </span>
            </div>
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative group hover:bg-[#F60] transition duration-300">
              <h4 className="text-2xl font-semibold mb-3">Attach</h4>
              <p className="font-poppins  text-sm lg:text-base ">
                Place the U-will band over your nose. The magnetic ends of the
                Band will snap onto the Tabs. <br />
                <span className="font-semibold">Pro-Tip:</span> Make sure the Band is
                not upside down. The magnets should be facing down.
              </p>
              <span className="absolute top-0 right-0 bg-[#F60] sm-btn px-3.5 py-0.5 text-xs font-poppins group-hover:bg-[#B54800] transition duration-300">
                Step 4
              </span>
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="mt-12 flex items-end flex-col-reverse lg:flex-row gap-8 lg:gap-14">
          <div className="space-y-4 w-full lg:w-1/2">
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative">
              <h4 className="text-2xl font-semibold mb-4">4 Bands</h4>
              <p className=" font-poppins">
                You can easily choose which works best for you.
              </p>
            </div>
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative">
              <h4 className="text-2xl font-semibold mb-4">15 or 30 Tabs</h4>
              <p className="text-sm font-poppins">
                Tabs are made with 3M tape, they're safe for sensitive skin
              </p>
            </div>
            <div className="p-6 text-white bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] rounded-xl relative">
              <h4 className="text-2xl font-semibold mb-4">Applicator</h4>
              <p className="text-sm font-poppins">
                Use magnetic Applicatorto pick up and attach Tab precisely.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-8">
              What’s in start kit
            </h2>
            <div className="flex justify-center lg:justify-start">
              <img
                className="md:w-[450px] lg:w-auto"
                src={Product_image}
                alt="Product image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
