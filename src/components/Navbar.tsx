import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion"; // ✅ 引入動畫
import CartPreview from "./CartPreview"; // ✅ 購物車縮圖組件

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ 點擊外部區域時關閉購物車縮圖
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!document.getElementById("cart-preview")?.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <nav className="bg-black/50 backdrop-blur-lg fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 🔹 LOGO區塊 */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)}>
            <img src="/LOGO.png" alt="星點競技" className="h-12 w-auto object-contain" />
          </Link>

          {/* 🔹 導覽連結區 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">首頁</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition">產品系列</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">品牌介紹</Link>
            <Link to="/news" className="text-gray-300 hover:text-white transition">新聞中心</Link>

            {/* 🔹 購物車按鈕 (點擊顯示縮圖) */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative flex items-center bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-white transition shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-semibold">購物車</span>

              {/* 🔥 動畫徽章 */}
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 250, damping: 15 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* 🛒 購物車縮圖 (點擊顯示) */}
      <CartPreview isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
