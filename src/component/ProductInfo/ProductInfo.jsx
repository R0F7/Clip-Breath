import image from "../../assets/image (1).png";
import VideoIcon from "../../assets/video icon.png";
import frame from "../../assets/Frame (1).png";
import testingImg from "../../assets/testing image.png";

const ProductInfo = () => {
  return (
    <section className="bg-[#6B2B00] py-20">
      <div className="container mx-auto">
        <div className="flex gap-5 pb-10">
          <div
            className="w-[287.562px] h-[630.577px] flex items-center justify-center"
            style={{
              borderRadius: "31.687px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%), url('src/assets/image (1).png') lightgray 50% / cover no-repeat",
            }}
          >
            <img
              className="w-[85.556px] h-[85.556px]"
              src={VideoIcon}
              alt="Video Icon"
            />
          </div>
          <div className="-[602px] h-[630px] flex-1">
            <img className="w-full h-full" src={image} alt="image 2" />
          </div>
          <div
            className="w-[287.562px] h-[630.577px] flex items-center justify-center"
            style={{
              borderRadius: "31.687px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%), url('src/assets/image (1).png') lightgray 50% / cover no-repeat",
            }}
          >
            <img
              className="w-[85.556px] h-[85.556px]"
              src={VideoIcon}
              alt="Video Icon"
            />
          </div>
        </div>

        {/* second part */}
        <div className="pt-10 flex items-center gap-12">
          <div className="text-white">
            <h1 className="text-5xl font-semibold mb-3.5">Backed by Science</h1>
            <p className="font-medium w-[482px] font-poppins mb-6">
              Our product is backed by clinical studies that show significant
              improvement in airflow and reduction in snoring for consistent
              users.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4 mt-1 w-[446px] font-semibold font-poppins">
                  Clinical study shows 80% improvement in nasal airflow
                </span>
              </li>
              <li className="text-white flex items-center">
                <img src={frame} alt="frame" />
                <span className="ml-4 mt-1 w-[446px] font-semibold font-poppins">
                  70% of users report reduced snoring after 2 weeks
                </span>
              </li>
            </ul>
          </div>
          <div>
            <img src={testingImg} alt="testingImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
