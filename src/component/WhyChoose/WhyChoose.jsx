// import ProductDesign from "../../assets/Product Design.png";
import Slider from "../Slider/Slider";

const WhyChoose = () => {
  return (
    <section className="container mx-auto py-10 lg:py-20 px-4 md:px-0">
      <div className="text-center">
        <h1 className="text-[#070707] text-3xl lg:text-5xl font-semibold">
          Why Choose Our <br /> Nasal Clip?
        </h1>
        <p className="w-full lg:w-[634px] mx-auto font-poppins pt-3 mb-[45px]">
          Our nasal clip provides a simple, effective solution for snoring,
          congestion, and improved airflow during activities, offering comfort
          and relief.
        </p>
      </div>
      <div>
        <div >
          {/* slider  */}
          <div className="lg:ml-[200px] rounded-2xl overflow-hidden">
            <Slider></Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
