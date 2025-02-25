import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <section className="container mx-auto flex items-center justify-between py-6">
      {/* logo */}
      <div>
        <h4 className="text-[#FF6600] font-bold text-lg">ClipBreath</h4>
      </div>

      {/* menu items */}
      <div>
        <ul className="flex items-center gap-x-10 text-[#070707]">
          <li>Home</li>
          <li>Why It Works</li>
          <li>Features</li>
          <li>How It Works </li>
          <li>Testimonials</li>
          <li>Before & After </li>
          <li>Science</li>
          <li>FAQs</li>
          <li>Shop Bundles</li>
        </ul>
      </div>

      {/* button */}
      <button className="flex items-center gap-2.5 bg-[#FF6600] text-white px-5 py-2 rounded-full">
        Contact Us
        <i>
          <GoArrowRight />
        </i>
      </button>
    </section>
  );
};

export default Navbar;
