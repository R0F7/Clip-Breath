// import { GoArrowRight } from "react-icons/go";
// import PropTypes from "prop-types";

// const Button = ({ text, px, py, width }) => {
//   console.log(px, py, width);

//   return (
//     <div>
//       <button
//         className={`flex items-center gap-2.5 bg-[#FF6600] text-white rounded-full px-0 ${
//           width ? "w-full flex justify-center" : "w-auto"
//         }`}
//         style={{
//           paddingLeft: `${px}`,
//           paddingRight: `${px}`,
//           paddingTop: `${py}`,
//           paddingBottom: `${py}`,
//         }}
//       >
//         {text}
//         <i>
//           <GoArrowRight />
//         </i>
//       </button>
//     </div>
//   );
// };

// Button.propTypes = {
//   text: PropTypes.string,
//   px: PropTypes.string,
//   py: PropTypes.string,
//   width: PropTypes.bool,
// };

import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";

const Button = ({ text, px, py, width }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`flex items-center gap-2.5 bg-[#FF6600] text-white rounded-full ${width ? "w-full justify-center" : "w-auto"} 
          ${px ? `px-${px}` : ""} 
          ${py ? `py-${py}` : ""}
        `}
        data-aos="fade-up" data-aos-duration="1000"
      >
        {text}
        <i>
          <GoArrowRight />
        </i>
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  width: PropTypes.bool,
};

export default Button;

