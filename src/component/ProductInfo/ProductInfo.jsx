import image from "../../assets/image (1).png";
import VideoIcon from "../../assets/video icon.png";
import frame from "../../assets/Frame (1).png";
import testingImg from "../../assets/testing image.png";

const ProductInfo = () => {
  return (
    <section className="bg-[#6B2B00] py-10 lg:py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid col-span-3 lg:grid-cols-5 gap-5 pb-5 lg:pb-10">
          <div
            className="flex items-center justify-center col-span-1 h-[200px] lg:h-auto"
            style={{
              borderRadius: "31.687px",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%), url(${testingImg})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              className="w-[60px] h-[60px] lg:w-[85.556px] lg:h-[85.556px]"
              src={VideoIcon}
              alt="Video Icon"
              data-aos="zoom-in"
            />
          </div>

          <div className="h-[300px] md:h-[400px] lg:h-[630.577px] flex-1 col-span-1 lg:col-span-3">
            <img
              className="w-full h-full"
              src={image}
              alt="image 2"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="-[287.562px] -[630.577px] flex items-center justify-center col-span-1 h-[200px] lg:h-auto"
            style={{
              borderRadius: "31.687px",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%), url(${testingImg})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              className="w-[60px] h-[60px] lg:w-[85.556px] lg:h-[85.556px]"
              src={VideoIcon}
              alt="Video Icon"
              data-aos="zoom-in"
            />
          </div>
        </div>

        {/* second part */}
        <div className="pt-10 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="text-white w-full lg:w-1/2">
            <h1
              className="text-3xl lg:text-5xl font-semibold mb-3.5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Backed by Science
            </h1>
            <p
              className="font-medium w-full lg:w-[482px] font-poppins mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our product is backed by clinical studies that show significant
              improvement in airflow and reduction in snoring for consistent
              users.
            </p>
            <ul className="space-y-4">
              <li
                className="flex items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={frame} alt="frame" />
                <span className="ml-4 mt-1 w-full lg:w-[446px] font-semibold font-poppins">
                  Clinical study shows 80% improvement in nasal airflow
                </span>
              </li>
              <li
                className="text-white flex items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={frame} alt="frame" />
                <span className="ml-4 mt-1 w-full lg:w-[446px] font-semibold font-poppins">
                  70% of users report reduced snoring after 2 weeks
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={testingImg}
              alt="testingImg"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
