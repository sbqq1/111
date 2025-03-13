import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function Checkout() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ✅ 產生隨機訂單號碼
    const generateOrderId = () => {
        return `OD-${Math.floor(Math.random() * 1000000)}`;
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        setIsLoading(true);
        setOrderId(generateOrderId()); // 產生訂單號碼

        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);

            // ✅ 模擬 Email 發送
            setTimeout(() => {
                setEmailSent(true); // 2 秒後顯示 "📩 訂單確認 Email 已發送！"

                // ✅ 5 秒後自動返回首頁
                let timer = setInterval(() => {
                    setCountdown((prev) => {
                        if (prev === 1) {
                            clearInterval(timer);
                            clearCart();
                            navigate("/");
                        }
                        return prev - 1;
                    });
                }, 1000);
            }, 2000);
        }, 2000);
    };

    return (
        <div className="bg-[#0A0A0A] min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">結帳</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-400 text-lg text-center">您的購物車是空的。</p>
                ) : (
                    <div className="bg-[#111111] p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-white mb-4">訂單摘要</h2>

                        {/* ✅ 訂單內容 */}
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg border border-gray-700" />
                                    <div className="flex-1 px-4">
                                        <p className="text-white font-semibold">{item.name}</p>
                                        <p className="text-gray-400 text-sm">數量: {item.quantity}</p>
                                    </div>
                                    <p className="text-purple-400 font-bold text-lg">¥{item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-right">
                            <h3 className="text-xl font-bold text-white">總金額: ¥{totalPrice}</h3>
                        </div>

                        {/* ✅ 結帳按鈕 */}
                        <motion.button
                            onClick={handleCheckout}
                            whileHover={{ scale: 1.05, backgroundColor: "#22c55e", boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition"
                            disabled={isLoading}
                        >
                            {isLoading ? "處理中..." : "確認結帳"}
                        </motion.button>
                    </div>
                )}

                <Link to="/cart" className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
                    返回購物車
                </Link>
            </div>

            {/* ✅ Loading 動畫 */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/80"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <motion.div className="w-6 h-6 bg-purple-500 rounded-full animate-bounce"></motion.div>
                            <p className="text-white">正在處理結帳...</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ✅ 優化結帳成功彈窗 + 倒數動畫條 */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/70"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="bg-[#111111] p-8 rounded-xl shadow-xl text-center w-96"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                                className="text-4xl mb-2"
                            >
                                ✅
                            </motion.div>

                            <h2 className="text-2xl font-bold text-green-400 mb-2">結帳成功！</h2>

                            {/* ✅ 訂單編號 & 訂單時間 */}
                            <p className="text-gray-300">訂單編號: <span className="text-white font-bold">{orderId}</span></p>
                            <p className="text-gray-400 text-sm">時間: {new Date().toLocaleString()}</p>

                            {/* ✅ Email 發送訊息 */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="text-gray-300 mt-2"
                            >
                                正在發送 Email...
                            </motion.p>

                            {emailSent && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-purple-400 mt-2"
                                >
                                    📩 訂單確認 Email 已發送！
                                </motion.p>
                            )}

                            <motion.div className="w-full h-2 bg-gray-700 mt-4 rounded-full">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: countdown }}
                                    className="h-2 bg-green-500 rounded-full"
                                ></motion.div>
                            </motion.div>

                            <p className="text-gray-400 mt-4">⏳ {countdown} 秒後自動返回首頁</p>

                            <motion.button
                                onClick={() => navigate("/")}
                                whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition mt-4"
                            >
                                立即返回首頁
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
