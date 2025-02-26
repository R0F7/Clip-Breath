import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import sliderImg from '../../assets/sliderImage/slider image 1.png';
import sliderImg2 from '../../assets/sliderImage/slider image 2.jpg';
import sliderImg3 from '../../assets/sliderImage/slider image 3.webp';

const Slider = () => {
  return (
    <section className="">
      <div className="relative ">
        {/* Custom Navigation Buttons */}
        <div className="absolute -top-24 right-0 flex gap-4">
          <button className="custom-prev text-[#070707] border-[#F60] text-2xl border p-2.5 rounded-full transition-opacity duration-300">
            <HiArrowLeft />
          </button>
          <button className="custom-next text-white text-2xl border bg-[#F60] p-2.5 rounded-full transition-opacity duration-300">
            <HiArrowRight />
          </button>
        </div>

        <Swiper
          speed={1500}
          parallax={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* Slides */}

          <SwiperSlide>
            <div
              className="h-[250px] md:h-[300px] lg:h-[408px] w-[795px] bg-cover bg-center rounded-2xl flex items-end relative p-6 lg:p-12"
              style={{
                backgroundImage:
                  `linear-gradient(270deg,  rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), url(${sliderImg})`,
              }}
            >
              <div className="">
                <h2 className="text-[#070707] font-semibold text-4xl lg:text-[40px] mb-1 lg:mb-4">
                  Reduces Snoring
                </h2>
                <p className="text-[#070707] font-medium w-[320px] md:w-[485px] font-poppins">
                  Our nasal clip is scientifically designed to fits seamlessly
                  into your daily routine.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-[250px] md:h-[300px] lg:h-[408px] w-[795px] bg-cover bg-center rounded-2xl flex items-end relative p-6 lg:p-12"
              style={{
                backgroundImage:
                  `linear-gradient(270deg,  rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), url(${sliderImg2})`,
              }}
            >
              <div className="">
                <h2 className="text-[#070707] font-semibold text-4xl lg:text-[40px] mb-1 lg:mb-4">
                  Reduces Snoring
                </h2>
                <p className="text-[#070707] font-medium w-[320px] md:w-[485px] font-poppins">
                  Our nasal clip is scientifically designed to fits seamlessly
                  into your daily routine.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-[250px] md:h-[300px] lg:h-[408px] w-[795px] bg-cover bg-center rounded-2xl flex items-end relative p-6 lg:p-12"
              style={{
                backgroundImage:
                  `linear-gradient(270deg,  rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), url(${sliderImg3})`,
              }}
            >
              <div className="">
                <h2 className="text-[#070707] font-semibold text-4xl lg:text-[40px] mb-1 lg:mb-4">
                  Reduces Snoring
                </h2>
                <p className="text-[#070707] font-medium w-[320px] md:w-[485px] font-poppins">
                  Our nasal clip is scientifically designed to fits seamlessly
                  into your daily routine.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
