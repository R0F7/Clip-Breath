import Button from "../Button/Button";
import logo from "../../assets/ClipBreath logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <section className="container mx-auto flex items-center justify-between py-4 lg:py-6 px-4 md:px-0">
      {/* logo */}
      <div className="md:flex items-center gap-2 hidden">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <h4 className="text-[#FF6600] font-bold text-2xl lg:text-3xl">
          ClipBreath
        </h4>
      </div>

      {/* hamburger menu */}
      <div className="border rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-200 md:hidden">
        <i>
          <GiHamburgerMenu className="text-2xl p-0.5" />
        </i>
      </div>

      {/* menu items & button */}
      <div className="flex items-center gap-6">
        <ul className="lg:flex items-center gap-x-7 text-[#070707] hidden ">
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
        {/* button */}
        <Button
          text="Contact Us"
          px="3 md:px-4 lg:px-5"
          py="2 md:py-2 lg:py-2.5"
          width={true}
        />
      </div>
    </section>
  );
};

export default Navbar;
