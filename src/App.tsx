import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <div className="flex flex-col items-center box-border px-20">
        <div className="bg-white max-w-6xl w-full rounded-2xl shadow-2xl  my-6">
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
