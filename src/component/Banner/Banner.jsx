import Button from "../Button/Button";
import Avatar from "../../assets/Avatar.png";
import Avatar1 from "../../assets/Avatar (1).png";
import Avatar2 from "../../assets/Avatar (2).png";

const Banner = () => {
  return (
    <section
      className="h-[400px] lg:h-[720px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/src/assets/banner-bg.png')",
      }}
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center -space-x-2.5 mb-1">
          <img src={Avatar} alt="Avatar" className="w-8 h-8 md:w-12 md:h-12" />
          <img
            src={Avatar1}
            alt="Avatar1"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <img
            src={Avatar2}
            alt="Avatar2"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <div className="bg-[#F5F7F9] py-1.5 md:py-3 px-2 md:px-4 rounded-full">
            <p className="text-[#242A33] text-xs md:text-sm">
              26k Happy Customers
            </p>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-semibold text-4xl md:text-[50px] lg:text-[75px] leading-none lg:leading-[1.02] mb-4">
            Breathe better, <br /> live better!
          </h1>
          <p className="font-poppins font-medium text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-10">
            Discover how effortless breathing can enhance your life. <br /> Take
            the first step today!
          </p>
        </div>
        <div className="inline-block">
          <Button
            text="Shop Now"
            px="3 md:px-4 lg:px-5"
            py="2 md:py-2 lg:py-2.5"
            width={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
