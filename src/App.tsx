// import logo from "../images/logo.svg";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';
import CheckoutPage from './components/checkoutPage/CheckoutPage';
import { ShoppingBasketProvider } from './context/ShoppingBasketProvider';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <ShoppingBasketProvider>
          <h1>React Test</h1>
          <Routes>
            <Route index element={<MainPage />}/>
            <Route path="checkout" element={<CheckoutPage />}/>
          </Routes>
        </ShoppingBasketProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
