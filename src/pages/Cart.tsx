import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion"; // ✅ 引入動畫庫

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false); // ✅ 控制「清空購物車」確認框

  // ✅ **進入畫面時自動滾動到頂部**
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ 計算總金額
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-[#0A0A0A] min-h-screen flex flex-col justify-between">
      <div className="max-w-5xl w-full px-4 py-16 mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">購物車</h1>

        {/* ✅ 如果購物車是空的，讓提示「淡入」 */}
        <AnimatePresence>
          {cart.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center text-center bg-[#111111] px-8 py-12 rounded-lg shadow-lg border border-gray-600 max-w-md mx-auto"
            >
              <p className="text-gray-400 text-lg mb-6">您的購物車是空的。</p>
              <Link 
                to="/products"
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
              >
                繼續購物
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ 商品列表 */}
        <AnimatePresence>
          {cart.length > 0 && (
            <div className="space-y-6">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#181818] p-6 rounded-lg flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    {/* ✅ 商品圖片 */}
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover border border-gray-700" />
                    <div>
                      <h2 className="text-lg font-bold text-white">{item.name}</h2>
                      <p className="text-purple-400">¥{item.price}</p>
                      <div className="flex items-center mt-2">
                        {/* 🔹 數量調整按鈕 */}
                        <button
                          onClick={() => addToCart({ ...item, quantity: item.quantity > 1 ? -1 : 1 })}
                          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                        >
                          -
                        </button>

                        {/* 🔹 數量變化動畫 */}
                        <motion.span
                          key={item.quantity}
                          initial={{ scale: 1 }}
                          animate={{ scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 250, damping: 12 }}
                          className="mx-6 text-white text-lg"
                        >
                          {item.quantity}
                        </motion.span>

                        <button
                          onClick={() => addToCart({ ...item, quantity: 1 })}
                          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 🔹 刪除按鈕 */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
                  >
                    移除
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* ✅ 總金額 & 結帳區塊 */}
        {cart.length > 0 && (
          <div className="bg-black/80 p-8 rounded-lg mt-12 text-right shadow-lg flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-white">總金額: ¥{totalPrice}</h2>

            {/* ✅ 按鈕區塊 */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {/* ✅ 清空購物車按鈕（點擊後彈出確認框） */}
              <motion.button
                onClick={() => setShowConfirm(true)}
                whileHover={{ scale: 1.05, backgroundColor: "#5B5B5B" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition"
              >
                清空購物車
              </motion.button>

              {/* ✅ 進行結帳按鈕 */}
              <Link to="/checkout">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700"
                >
                  進行結帳
                </motion.button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ✅ 清空購物車的確認對話框 */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70"
          >
            <div className="bg-[#222] p-6 rounded-lg text-center">
              <p className="text-white mb-4">確定要清空購物車嗎？</p>
              <button onClick={() => { clearCart(); setShowConfirm(false); }} className="bg-red-600 px-6 py-3 text-white rounded-lg mr-4">
                確定
              </button>
              <button onClick={() => setShowConfirm(false)} className="bg-gray-600 px-6 py-3 text-white rounded-lg">
                取消
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 🔹 分隔線區塊 - 帶有標語，讓頁面更有層次 */}
      <div className="relative mt-16 mx-6">
        <div className="border-t border-gray-600"></div>
        <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] px-4 text-gray-400 text-sm">
          - 星點競技，為玩家帶來最新資訊 -
        </p>
      </div>
      <Footer />
    </div>
  );
}
