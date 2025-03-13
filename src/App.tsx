import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from "./pages/About"; // 🔹 確保引入 About 頁面
import News from "./pages/News"; // ✅ 改名 (原 support)
import NewsDetail from "./pages/NewsDetail"; // 新增新聞詳情頁
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart"; // ✅ 引入購物車頁面
import Checkout from './pages/Checkout'; // ✅ 引入結帳頁面

function App() {
  return (
    <CartProvider> {/* ✅ 用 CartProvider 包裹應用程式 */}
      <Router>
        <div className="min-h-screen bg-[#0A0A0A]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} /> {/* ✅ 設定 "品牌介紹" 頁面 */}
            <Route path="/news" element={<News />} /> {/* ✅ 變更路由 */}
            <Route path="/cart" element={<Cart />} /> {/* ✅ 添加購物車路由 */}
            <Route path="/checkout" element={<Checkout />} /> {/* ✅ 新增結帳頁面 */}
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
