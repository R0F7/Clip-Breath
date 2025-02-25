import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import ProductDetails from "./component/ProductDetails/ProductDetails";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductDetails></ProductDetails>
    </main>
  );
};

export default App;
