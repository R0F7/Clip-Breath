import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import user1 from "../../assets/person .png";
import user2 from "../../assets/Avatar (1).png";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="lg:w-[800px] mx-auto py-10 px-4 md:px-0">
      <h1 className="text-[#12151A] font-semibold text-3xl lg:text-5xl lg:mb-10 text-center" data-aos="fade-up" data-aos-duration="1000"      >
        Loved by Thousands
      </h1>
      <div className="relative" data-aos="zoom-in" data-aos-duration="1000"
      >
        <Swiper
          speed={2500}
          parallax={true}
          navigation={{
            nextEl: ".custom-next-unique",
            prevEl: ".custom-prev-unique",
          }}
          loop={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper "
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="w-full md:w-[490px] lg:w-[588px] shadow-md p-6 rounded-[30px] mx-auto testimonial-shadow my-6 lg:my-10 border md:border-none">
              <p className="text-lg text-[#242A33] mb-[30px]">
                Finally, a product that actually helps with my snoring! My
                partner sleeps better, and so do I.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 md:w-[60px] h-10 md:h-[60px] rounded-full">
                    <img
                      className="w-full h-full rounded-full"
                      src={user1}
                      alt=""
                    />
                  </div>
                  <h6 className="text-[#323B47] text-xl lg:text-2xl font-semibold uppercase">
                    Alex R
                  </h6>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-lg font-semibold">4.9</span>
                  <i>
                    <FaStar className="text-[#FF6600]"></FaStar>
                  </i>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full md:w-[490px] lg:w-[588px] p-6 rounded-[30px] mx-auto testimonial-shadow my-6 lg:my-10 border md:border-none">
              <p className="text-lg text-[#242A33] mb-[30px]">
                Finally, a product that actually helps with my snoring! My
                partner sleeps better, and so do I.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 md:w-[60px] h-10 md:h-[60px] rounded-full">
                    <img
                      className="w-full h-full rounded-full"
                      src={user2}
                      alt=""
                    />
                  </div>
                  <h6 className="text-[#323B47] text-xl lg:text-2xl font-semibold uppercase">
                    Rion Riyaz
                  </h6>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-lg font-semibold">4.9</span>
                  <i>
                    <FaStar className="text-[#FF6600]"></FaStar>
                  </i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-4 " >
        <button className="custom-next-unique text-[#121212] text-xl border border-[#121212] hover:border-[#F60] p-3 rounded-full hover:bg-[#F60] hover:text-white transition duration-300 lg:-translate-y-[150px] lg:-translate-x-[450px]" >
          <HiArrowLeft />
        </button>
        <button className="custom-prev-unique text-[#121212] text-xl border border-[#121212] hover:border-[#F60] p-3 rounded-full hover:bg-[#F60] hover:text-white transition duration-300 lg:-translate-y-[150px] lg:translate-x-[450px]">
          <HiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;

// import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import user1 from "../../assets/person .png";
// import { FaStar } from "react-icons/fa";

// const Testimonial = () => {
//   return (
//     <section className="container mx-auto py-10">
//       <h1 className="text-[#12151A] font-semibold text-5xl mb-10 text-center">
//         Loved by Thousands
//       </h1>
//       <div className="relative">
//         <Swiper
//           speed={2500}
//           parallax={true}
//           navigation={{
//             nextEl: ".custom-next-unique",
//             prevEl: ".custom-prev-unique",
//           }}
//           loop={true}
//           modules={[Parallax, Pagination, Navigation, Autoplay]}
//           className="mySwiper"
//         >
//           {/* Slides */}
//           <SwiperSlide>
//             <div className="w-[588px] shadow-md p-6 rounded-[30px] mx-auto testimonial-shadow y-20">
//               <p className="text-lg text-[#242A33] mb-[30px]">
//                 Finally, a product that actually helps with my snoring! My
//                 partner sleeps better, and so do I.
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-[60px] h-[60px] rounded-full">
//                     <img
//                       className="w-full h-full rounded-full"
//                       src={user1}
//                       alt="User"
//                     />
//                   </div>
//                   <h6 className="text-[#323B47] text-2xl font-semibold uppercase">
//                     Alex R
//                   </h6>
//                 </div>
//                 <div className="flex items-center gap-2.5">
//                   <span className="text-lg font-semibold">4.9</span>
//                   <i>
//                     <FaStar className="text-[#FF6600]"></FaStar>
//                   </i>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="w-[588px] p-6 rounded-[30px] mx-auto">
//               <p className="text-lg text-[#242A33] mb-[30px]">
//                 Finally, a product that actually helps with my snoring! My
//                 partner sleeps better, and so do I.
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-[60px] h-[60px] rounded-full">
//                     <img
//                       className="w-full h-full rounded-full"
//                       src={user1}
//                       alt="User"
//                     />
//                   </div>
//                   <h6 className="text-[#323B47] text-2xl font-semibold uppercase">
//                     Alex R
//                   </h6>
//                 </div>
//                 <div className="flex items-center gap-2.5">
//                   <span className="text-lg font-semibold">4.9</span>
//                   <i>
//                     <FaStar className="text-[#FF6600]"></FaStar>
//                   </i>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       {/* Custom Navigation Buttons */}
//       <div className="flex justify-center gap-4 mt-10">
//         <button className="custom-next-unique text-[#121212] text-xl border border-[#121212] p-3 rounded-full hover:bg-[#121212] hover:text-white transition duration-300">
//           <HiArrowLeft />
//         </button>
//         <button className="custom-prev-unique text-[#121212] text-xl border border-[#121212] p-3 rounded-full hover:bg-[#121212] hover:text-white transition duration-300 translate-x-[800px] -translate-y-[100px]">
//           <HiArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
