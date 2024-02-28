// import logo from "../images/logo.svg";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <h1>React Test</h1>
        <Routes>
          <Route index element={<MainPage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
