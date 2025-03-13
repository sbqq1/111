import React from "react";
import { motion } from "framer-motion"; // ✅ 引入動畫庫
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import Footer from "../components/Footer"; // ✅ 引入 Footer.tsx

export default function Products() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-20">
      {/* 🔹 產品標題區塊 - 加入動畫 */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 py-12 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-8">我們的產品</h1>
      </motion.div>

      {/* 🔹 產品展示區 - 卡片動畫 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, // ✅ 讓卡片一個接一個出現
          },
        }}
        className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 分隔線區塊 - 帶動畫 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative mt-16 mx-6"
      >
        <div className="border-t border-gray-600"></div>
        <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] px-4 text-gray-400 text-sm">
          - 星點競技，為玩家帶來最新資訊 -
        </p>
      </motion.div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
