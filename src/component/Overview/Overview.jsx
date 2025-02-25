import image from "../../assets/image.png";
import image1 from "../../assets/image (1).png";
import frame from "../../assets/Frame (1).png";

const Overview = () => {
  return (
    <section className="py-20 bg-[#6B2B00]">
      <div className="container mx-auto">
        {/* left part */}
        <div className="flex items-center gap-12">
          <div>
            <img src={image} alt="overview image" />
          </div>
          <div className="text-white">
            <h4 className="text-5xl font-semibold ">Pain Points</h4>
            <h6 className="text-2xl font-semibold my-3">
              Struggling with Snoring or Congestion?
            </h6>
            <p className="font-medium mb-6 w-[584px] font-poppins">
              Whether it's snoring, allergies, or breathing difficulties during
              exercise, our nasal clip is here to help. These issues can disrupt
              your sleep, lower your energy, and impact your quality of life.
            </p>
            <ul className="space-y-4 font-semibold ml-1.5">
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

        {/* right part */}
        <div className="flex items-center flex-row-reverse gap-12">
          <div>
            <img src={image1} alt="overview image 2" />
          </div>
          <div className="text-white">
            <h4 className="text-5xl font-semibold ">Pain Points</h4>
            <h6 className="text-2xl font-semibold my-3">
              Struggling with Snoring or Congestion?
            </h6>
            <p className="font-medium mb-6 w-[584px] font-poppins">
              Our nasal clip is scientifically designed to fits seamlessly into your daily routine.
            </p>
            <ul className="space-y-4 font-semibold">
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
