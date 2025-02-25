import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Overview from "./component/Overview/Overview";
import ProductDetails from "./component/ProductDetails/ProductDetails";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductDetails></ProductDetails>
      <Overview></Overview>
    </main>
  );
};

export default App;
