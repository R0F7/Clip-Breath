import Button from "../Button/Button";

const Advertising = () => {
  return (
    <section className="md:container md:mx-auto bg-[#6B2B00] py-10 lg:py-[60px] rounded-2xl mx-4">
      <h1 className="text-white text-3xl lg:text-5xl text-center leading-[1.07] mb-8 font-semibold" data-aos="fade-up" data-aos-duration="1000"
      >Choose you plan today and <br /> start breathing easier tomorrow</h1>
      <Button
        text="Order Now"
        px="3 md:px-4 lg:px-5"
        py="2 md:py-2 lg:py-2.5"
        width={false}
      />
    </section>
  );
};

export default Advertising;
