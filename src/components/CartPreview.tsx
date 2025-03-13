import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface CartPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPreview({ isOpen, onClose }: CartPreviewProps) {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ 監聽點擊外部來關閉購物車縮圖
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!document.getElementById("cart-preview")?.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="cart-preview"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-16 right-6 w-72 bg-[#181818] text-white p-5 rounded-lg shadow-xl border border-gray-700 z-50"
        >
          <div className="flex justify-between items-center border-b border-gray-600 pb-2">
            <h3 className="text-lg font-semibold">購物車內容</h3>
            {/* 🔹 關閉按鈕 (✕) */}
            <button onClick={onClose} className="text-gray-400 hover:text-white transition">
              ✕
            </button>
          </div>

          {/* ✅ 商品列表 */}
          <div className="space-y-3 mt-3">
            {cart.length > 0 ? (
              cart.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  {/* 🔹 商品圖片 */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover border border-gray-700"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-purple-400 text-xs">¥{item.price} x {item.quantity}</p>
                  </div>
                  {/* 🔹 移除按鈕 */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm text-center mt-4">您的購物車是空的。</p>
            )}
          </div>

          {/* ✅ 總金額區塊 */}
          {cart.length > 0 && (
            <div className="text-right mt-4 border-t border-gray-600 pt-2">
              <h4 className="text-lg font-semibold text-white">總金額: <span className="text-purple-400">¥{totalPrice}</span></h4>
            </div>
          )}

          {/* ✅ 操作按鈕 */}
          <div className="mt-4 flex flex-col space-y-2">
            {cart.length > 0 && (
              <>
                <Link
                  to="/cart"
                  className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
                  onClick={onClose}
                >
                  查看購物車
                </Link>
                <Link
                  to="/checkout"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
                  onClick={onClose}
                >
                  快速結帳
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
