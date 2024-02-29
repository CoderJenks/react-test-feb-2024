// import logo from "../images/logo.svg";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';
import CheckoutPage from './components/checkoutPage/CheckoutPage';
import { ShoppingBasketProvider } from './context/ShoppingBasketProvider';
import SingleProductPage from './components/singleProductPage/SingleProductPage';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <ShoppingBasketProvider>
          <h1>React Test</h1>
          <NavBar />
          <Routes>
            <Route index element={<MainPage />}/>
            <Route path="checkout" element={<CheckoutPage />}/>
            <Route path="products/:productId" element={<SingleProductPage />}/>
          </Routes>
        </ShoppingBasketProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
