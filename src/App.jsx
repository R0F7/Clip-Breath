import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Overview from "./component/Overview/Overview";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import WhyChoose from "./component/WhyChoose/WhyChoose";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductDetails></ProductDetails>
      <Overview></Overview>
      <WhyChoose></WhyChoose>
    </main>
  );
};

export default App;
