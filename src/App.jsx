import Banner from "./component/Banner/Banner";
import ChoosePlan from "./component/ChoosePlan/ChoosePlan";
import FAQ from "./component/FAQ/FAQ";
import Feedback from "./component/Feedback/Feedback";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import Navbar from "./component/Navbar/Navbar";
import Overview from "./component/Overview/Overview";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import ProductInfo from "./component/ProductInfo/ProductInfo";
import Results from "./component/Results/Results";
import Testimonial from "./component/Testimonial/Testimonial";
import WhyChoose from "./component/WhyChoose/WhyChoose";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductDetails></ProductDetails>
      <Overview></Overview>
      <WhyChoose></WhyChoose>
      <Testimonial></Testimonial>
      <HowItWorks></HowItWorks>
      <Results></Results>
      <Feedback></Feedback>
      <ProductInfo></ProductInfo>
      <FAQ></FAQ>
      <ChoosePlan></ChoosePlan>
    </main>
  );
};

export default App;
