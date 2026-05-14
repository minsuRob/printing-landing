import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainPage from './pages/MainPage';
import TshirtPrintingDetail from './pages/TshirtPrintingDetail';
import MaskDetail from './pages/MaskDetail';
import SneakerDetail from './pages/SneakerDetail';
import BagDetail from './pages/BagDetail';
import HatDetail from './pages/HatDetail';
import ProductionGuide from './pages/ProductionGuide';
import Portfolio from './pages/Portfolio';
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
          <Route path="/production-guide" element={<ProductionGuide />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
