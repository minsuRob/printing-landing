import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainPage from './pages/MainPage';
import TshirtPrintingDetail from './pages/TshirtPrintingDetail';
import MaskDetail from './pages/MaskDetail';
import SneakerDetail from './pages/SneakerDetail';
import BagDetail from './pages/BagDetail';
import HatDetail from './pages/HatDetail';
import FilmDetail from './pages/FilmDetail';
import ProductionGuide from './pages/ProductionGuide';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Checkout from './pages/Checkout';

function App() {
  return (
    <CartProvider>
      <main className="w-full min-h-screen bg-background text-on-surface relative">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tshirt-printing" element={<TshirtPrintingDetail />} />
          <Route path="/mask-printing" element={<MaskDetail />} />
          <Route path="/sneaker-printing" element={<SneakerDetail />} />
          <Route path="/bag-printing" element={<BagDetail />} />
          <Route path="/hat-printing" element={<HatDetail />} />
          <Route path="/film-printing" element={<FilmDetail />} />
          <Route path="/production-guide" element={<ProductionGuide />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
