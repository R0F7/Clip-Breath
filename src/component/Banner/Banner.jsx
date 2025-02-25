import Button from "../Button/Button";
import Avatar from '../../assets/Avatar.png';
import Avatar1 from '../../assets/Avatar (1).png';
import Avatar2 from '../../assets/Avatar (2).png';

const Banner = () => {
  return (
    <section
      className="h-[720px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/src/assets/banner-bg.png')",
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center -space-x-2.5 mb-1">
          <img src={Avatar} alt="" />
          <img src={Avatar1} alt="" />
          <img src={Avatar2} alt="" />
          <div className="bg-[#F5F7F9] py-3 px-4 rounded-full">
            <p className="text-[#242A33] text-xs">26k Happy Customers</p>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-semibold text-[75px] leading-[1.02] mb-4">
            Breathe better, <br /> live better!
          </h1>
          <p className="font-poppins font-medium mb-10">
            Discover how effortless breathing can enhance your life. <br /> Take
            the first step Today!
          </p>
        </div>
        <Button text={"Shop Now"} px={"20px"} py={"10px"}></Button>
      </div>
    </section>
  );
};

export default Banner;
