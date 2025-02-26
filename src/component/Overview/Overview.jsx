import image from "../../assets/image.png";
import image1 from "../../assets/image (1).png";
import frame from "../../assets/Frame (1).png";

const Overview = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#6B2B00] px-4 md:px-0">
      <div className="container mx-auto">
        {/* top part */}
        <div className="flex items-center flex-col md:flex-row gap-6 md:gap-10 lg:gap-0 mb-12">
          <div className="w-full lg:w-1/2">
            <img src={image} alt="overview image" />
          </div>
          <div className="text-white w-full lg:w-1/2">
            <h4 className="text-3xl lg:text-5xl font-semibold ">Pain Points</h4>
            <h6 className="text-xl lg:text-2xl font-semibold my-2 lg:my-3">
              Struggling with Snoring or Congestion?
            </h6>
            <p className="font-medium mb-4 lg:mb-6 w-full lg:w-[584px] font-poppins text-sm lg:text-base">
              Whether it's snoring, allergies, or breathing difficulties during
              exercise, our nasal clip is here to help. These issues can disrupt
              your sleep, lower your energy, and impact your quality of life.
            </p>
            <ul className="space-y-2 lg:space-y-4 font-semibold ml-1.5">
              <li className="text-white flex items-center">
                <span className="w-3 h-3 bg-[#FF6600] rounded-full"></span>
                <span className="ml-4">Persistent snoring</span>
              </li>
              <li className="text-white flex items-center">
                <span className="w-3 h-3 bg-[#FF6600] rounded-full"></span>
                <span className="ml-4">Nasal congestion</span>
              </li>
              <li className="text-white flex items-center">
                <span className="w-3 h-3 bg-[#FF6600] rounded-full"></span>
                <span className="ml-4">Allergies affecting breathing</span>
              </li>
              <li className="text-white flex items-center">
                <span className="w-3 h-3 bg-[#FF6600] rounded-full"></span>
                <span className="ml-4">
                  Struggling to breathe during workouts
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom part */}
        <div className="flex items-center flex-col md:flex-row-reverse gap-6 md:gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2">
            <img src={image1} alt="overview image 2" />
          </div>
          <div className="text-white w-full lg:w-1/2">
            <h4 className="text-3xl lg:text-5xl font-semibold ">Pain Points</h4>
            <h6 className="text-xl lg:text-2xl font-semibold my-2 lg:my-3">
              Struggling with Snoring or Congestion?
            </h6>
            <p className="font-medium mb-4 lg:mb-6 w-full lg:w-[584px] font-poppins text-sm lg:text-base">
              Our nasal clip is scientifically designed to fits seamlessly into
              your daily routine.
            </p>
            <ul className="space-y-2 lg:space-y-4 font-semibold">
              <li className="text-white flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4">Enhance airflow</span>
              </li>
              <li className="text-white flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4">Reduce snoring</span>
              </li>
              <li className="text-white flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4">Clear nasal passages </span>
              </li>
              <li className="text-white flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4">Made from soft</span>
              </li>
              <li className="text-white flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4">Comfortable Materials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
