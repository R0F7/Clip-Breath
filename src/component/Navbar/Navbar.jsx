import Button from "../Button/Button";

const Navbar = () => {
  return (
    <section className="container mx-auto flex items-center justify-between py-6">
      {/* logo */}
      <div>
        <h4 className="text-[#FF6600] font-bold text-3xl">ClipBreath</h4>
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
      <Button text={"Contact Us"} px={"20px"} py={"10px"}></Button>
    </section>
  );
};

export default Navbar;
