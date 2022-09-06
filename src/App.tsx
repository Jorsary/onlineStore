import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import MainPage from "./pages/MainPage";
import './App.scss'

function App() {
  return (
      <div className='app'>
        <div className='app__wrapper'>
          <Cart />
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
