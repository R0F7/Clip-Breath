import { FaStar } from "react-icons/fa";
import Ellipse from "../../assets/Ellipse 8.png";
import Feedback_Img from "../../assets/Feedback Img.png";
import Elliza from "../../assets/Elliza.png";
import Zachika from "../../assets/Zachika.png";

const Feedback = () => {
  return (
    <section className="container mx-auto py-10 lg:py-20 px-4 md:px-0">
      <h2 className="text-[#161721] text-3xl lg:text-5xl font-bold mb-8 lg:mb-[56px]" data-aos="fade-up" data-aos-duration="1000"
      >
        Customer Feedback
      </h2>

      {/* feedbacks */}
      <div>
        <div className="border-t pt-5 lg:pt-10">
          <div className="flex justify-between mb-4 lg:mb-8" data-aos="fade-up" data-aos-duration="1000"          >
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="w-10 lg:w-auto">
                <img className="w-full h-full" src={Ellipse} alt="Ellipse" />
              </div>
              <h3 className="text-[#161721] font-bold text-lg md:text-2xl lg:text-[40px]">
                Arlene McCoy
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-10 lg:h-10"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.9975 2.6665C11.9872 2.6665 9.38683 5.35849 6.31154 6.3397C5.06111 6.73868 4.43588 6.93816 4.18286 7.21937C3.92983 7.50058 3.85574 7.9115 3.70755 8.73334C2.12183 17.5278 5.58779 25.6585 13.8537 28.8232C14.7418 29.1632 15.1858 29.3332 16.0019 29.3332C16.8179 29.3332 17.2621 29.1632 18.1501 28.8232C26.4154 25.6584 29.8781 17.5278 28.2919 8.73334C28.1437 7.91136 28.0695 7.50037 27.8165 7.21916C27.5634 6.93794 26.9382 6.73857 25.6878 6.33982C22.6113 5.3587 20.0081 2.6665 15.9975 2.6665Z"
                  fill="#1A9959"
                  stroke="#1A9959"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17.3333C12 17.3333 13.3333 17.3333 14.6667 20C14.6667 20 18.902 13.3333 22.6667 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <button className="px-3 py-2 lg:px-6 lg:py-3 bg-[rgba(159,203,204,0.23)] border border-[#C3DAD6] rounded-[10px]">
                1 Week Ago
              </button>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-4 mb-4" data-aos="fade-up" data-aos-duration="1000"          >
            <ul className="flex gap-1 lg:gap-2.5 text-lg lg:text-xl mt-1">
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
            </ul>

            <span className="w-0.5 h-8 bg-[#A5A5AB]"></span>
            <div className="flex items-center gap-2 lg:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-8 lg:h-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.9475 5.32554C22.3719 3.13231 19.2513 4.01615 17.3766 5.42402C16.6078 6.00128 16.2235 6.28991 15.9974 6.28991C15.7713 6.28991 15.387 6.00128 14.6182 5.42402C12.7436 4.01615 9.62285 3.13231 6.04731 5.32554C1.35482 8.20392 0.293022 17.6999 11.1168 25.7112C13.1784 27.2371 14.2091 28 15.9974 28C17.7857 28 18.8165 27.2371 20.8781 25.7112C31.7018 17.6999 30.6399 8.20392 25.9475 5.32554Z"
                  fill="#CB3B4E"
                />
              </svg>
              <p className="text-[#1D1F2C] text-lg font-medium">(1.5K)</p>
            </div>
          </div>
          <p className="text-[#4A4C56] text-base lg:text-xl font-poppins w-full lg:w-[825px]" data-aos="fade-up" data-aos-duration="1000"          >
            This nasal clip has helped me reduce snoring and breathe easier at
            night. Comfortable and barely noticeable!
          </p>
          <div className="my-6" >
            <img src={Feedback_Img} alt="Feedback Img" data-aos="zoom-in" data-aos-duration="1000"            />
          </div>
        </div>

        <div className="border-t pt-5 lg:pt-10">
          <div className="flex justify-between mb-4 lg:mb-8" data-aos="fade-up" data-aos-duration="1000"
          >
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="w-10 lg:w-auto">
                <img className="w-full h-full" src={Elliza} alt="Elliza" />
              </div>
              <h3 className="text-[#161721] font-bold text-lg md:text-2xl lg:text-[40px]">
                Ralph Edwards
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-10 lg:h-10"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.9975 2.6665C11.9872 2.6665 9.38683 5.35849 6.31154 6.3397C5.06111 6.73868 4.43588 6.93816 4.18286 7.21937C3.92983 7.50058 3.85574 7.9115 3.70755 8.73334C2.12183 17.5278 5.58779 25.6585 13.8537 28.8232C14.7418 29.1632 15.1858 29.3332 16.0019 29.3332C16.8179 29.3332 17.2621 29.1632 18.1501 28.8232C26.4154 25.6584 29.8781 17.5278 28.2919 8.73334C28.1437 7.91136 28.0695 7.50037 27.8165 7.21916C27.5634 6.93794 26.9382 6.73857 25.6878 6.33982C22.6113 5.3587 20.0081 2.6665 15.9975 2.6665Z"
                  fill="#1A9959"
                  stroke="#1A9959"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17.3333C12 17.3333 13.3333 17.3333 14.6667 20C14.6667 20 18.902 13.3333 22.6667 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <button className="px-3 py-2 lg:px-6 lg:py-3 bg-[rgba(159,203,204,0.23)] border border-[#C3DAD6] rounded-[10px]">
                1 Week Ago
              </button>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-4 mb-4" data-aos="fade-up" data-aos-duration="1000"
          >
            <ul className="flex gap-1 lg:gap-2.5 text-lg lg:text-xl mt-1">
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
            </ul>

            <span className="w-0.5 h-8 bg-[#A5A5AB]"></span>
            <div className="flex items-center gap-2 lg:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-8 lg:h-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.9475 5.32554C22.3719 3.13231 19.2513 4.01615 17.3766 5.42402C16.6078 6.00128 16.2235 6.28991 15.9974 6.28991C15.7713 6.28991 15.387 6.00128 14.6182 5.42402C12.7436 4.01615 9.62285 3.13231 6.04731 5.32554C1.35482 8.20392 0.293022 17.6999 11.1168 25.7112C13.1784 27.2371 14.2091 28 15.9974 28C17.7857 28 18.8165 27.2371 20.8781 25.7112C31.7018 17.6999 30.6399 8.20392 25.9475 5.32554Z"
                  fill="#CB3B4E"
                />
              </svg>
              <p className="text-[#1D1F2C] text-lg font-medium">(1.5K)</p>
            </div>
          </div>
          <p className="text-[#4A4C56] text-base lg:text-xl font-poppins w-full lg:w-[825px]" data-aos="fade-up" data-aos-duration="1000"
          >
            I use this nasal clip during my runs, and it really improves
            airflow. I can breathe more freely and last longer during intense
            sessions.
          </p>
          <div className="my-6" >
            <img src={Feedback_Img} alt="Feedback Img" data-aos="zoom-in" data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="border-t pt-5 lg:pt-10">
          <div className="flex justify-between mb-4 lg:mb-8" data-aos="fade-up" data-aos-duration="1000"
          >
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="w-10 lg:w-auto">
                <img className="w-full h-full" src={Zachika} alt="Zachika" />
              </div>
              <h3 className="text-[#161721] font-bold text-lg md:text-2xl lg:text-[40px]">
                Cameron Williamson
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-10 lg:h-10"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.9975 2.6665C11.9872 2.6665 9.38683 5.35849 6.31154 6.3397C5.06111 6.73868 4.43588 6.93816 4.18286 7.21937C3.92983 7.50058 3.85574 7.9115 3.70755 8.73334C2.12183 17.5278 5.58779 25.6585 13.8537 28.8232C14.7418 29.1632 15.1858 29.3332 16.0019 29.3332C16.8179 29.3332 17.2621 29.1632 18.1501 28.8232C26.4154 25.6584 29.8781 17.5278 28.2919 8.73334C28.1437 7.91136 28.0695 7.50037 27.8165 7.21916C27.5634 6.93794 26.9382 6.73857 25.6878 6.33982C22.6113 5.3587 20.0081 2.6665 15.9975 2.6665Z"
                  fill="#1A9959"
                  stroke="#1A9959"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17.3333C12 17.3333 13.3333 17.3333 14.6667 20C14.6667 20 18.902 13.3333 22.6667 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <button className="px-3 py-2 lg:px-6 lg:py-3 bg-[rgba(159,203,204,0.23)] border border-[#C3DAD6] rounded-[10px]">
                1 Week Ago
              </button>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-4 mb-4" data-aos="fade-up" data-aos-duration="1000"
          >
            <ul className="flex gap-1 lg:gap-2.5 text-lg lg:text-xl mt-1">
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
              <li>
                <FaStar className="text-[#FAAF3E]"></FaStar>
              </li>
            </ul>

            <span className="w-0.5 h-8 bg-[#A5A5AB]"></span>
            <div className="flex items-center gap-2 lg:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-8 lg:h-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.9475 5.32554C22.3719 3.13231 19.2513 4.01615 17.3766 5.42402C16.6078 6.00128 16.2235 6.28991 15.9974 6.28991C15.7713 6.28991 15.387 6.00128 14.6182 5.42402C12.7436 4.01615 9.62285 3.13231 6.04731 5.32554C1.35482 8.20392 0.293022 17.6999 11.1168 25.7112C13.1784 27.2371 14.2091 28 15.9974 28C17.7857 28 18.8165 27.2371 20.8781 25.7112C31.7018 17.6999 30.6399 8.20392 25.9475 5.32554Z"
                  fill="#CB3B4E"
                />
              </svg>
              <p className="text-[#1D1F2C] text-lg font-medium">(1.5K)</p>
            </div>
          </div>
          <p className="text-[#4A4C56] text-base lg:text-xl font-poppins w-full lg:w-[825px]" data-aos="fade-up" data-aos-duration="1000"
          >
            I’ve been using the nasal clip to combat my chronic nasal
            congestion, and it’s made a world of difference. Highly effective
            and comfortable!
          </p>
          <div className="my-6" >
            <img src={Feedback_Img} alt="Feedback Img" data-aos="zoom-in" data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
