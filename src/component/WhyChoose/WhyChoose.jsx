// import ProductDesign from "../../assets/Product Design.png";
import Slider from "../Slider/Slider";

const WhyChoose = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="text-center">
        <h1 className="text-[#070707] text-5xl font-semibold">
          Why Choose Our <br /> Nasal Clip?
        </h1>
        <p className="w-[634px] mx-auto font-poppins pt-3 mb-[45px]">
          Our nasal clip provides a simple, effective solution for snoring,
          congestion, and improved airflow during activities, offering comfort
          and relief.
        </p>
      </div>
      <div>
        <div>
          {/* <div
            className="h-[408px] w-[795px] bg-cover bg-center rounded-2xl flex items-end relative p-12"
            style={{
              backgroundImage:
                "linear-gradient(270deg,  rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), url('/src/assets/sliderImage/slider image 1.png')",
            }}
          >
            <div className="">
              <h2 className="text-[#070707] font-semibold text-[40px] mb-4">Reduces Snoring</h2>
              <p className="text-[#070707] font-medium w-[485px] font-poppins">
                Our nasal clip is scientifically designed to fits seamlessly
                into your daily routine.
              </p>
            </div>
          </div> */}

          {/* slider  */}
          <div className="ml-[200px]">
            <Slider></Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
