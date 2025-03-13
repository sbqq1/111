import React, { useEffect } from "react";
import { motion } from "framer-motion"; // ✅ 引入動畫庫
import Footer from "../components/Footer"; // ✅ 引入 Footer.tsx

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // 🔹 切換頁面時滾動到頂部
  }, []);

  return (
    <div className="bg-[#0A0A0A] flex flex-col min-h-screen">
      {/* 🔹 主視覺區塊，作為標題背景 */}
      <div className="relative w-full h-[500px]">
        <img
          src="https://chn.wlmouse.com/uploadfile/202412/41dd93e3645a77c.jpg" // ✅ 你的品牌視覺圖
          alt="品牌視覺圖"
          className="w-full h-full object-cover"
        />
        {/* 🔹 文字覆蓋在圖片上方，帶動畫效果 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6"
        >
          <h1 className="text-5xl font-bold mb-4">品牌介紹</h1>
          <p className="text-lg text-gray-300">星點競技，為極致競技體驗而生</p>
        </motion.div>
      </div>

      {/* 🔹 分隔線 */}
      <div className="border-t border-gray-600 mx-6 my-8"></div>

      {/* 🔹 品牌故事區塊 (帶動畫效果) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-12 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">品牌故事</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          星點競技成立於電競發展迅速的時代，我們專注於開發專業級電競外設，
          為全球玩家提供極致的遊戲體驗。我們的團隊由一群熱愛競技遊戲的專業工程師和設計師組成，
          透過持續創新與研發，為玩家打造最符合需求的高品質裝備。
        </p>
      </motion.section>

      {/* 🔹 產品優勢區塊 (帶動畫效果) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">產品優勢</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 核心優勢 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#111111] rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-4">極致輕量設計</h3>
            <p className="text-gray-300">
              採用高強度鎂合金與碳纖維材料，打造超輕量且堅固耐用的滑鼠與鍵盤。
            </p>
          </motion.div>
          {/* 核心優勢 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-[#111111] rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-4">精準操控</h3>
            <p className="text-gray-300">
              採用頂級光學感測器與自訂按鍵回饋設計，提供更高精準度與靈敏度。
            </p>
          </motion.div>
          {/* 核心優勢 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-[#111111] rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-4">專業認證</h3>
            <p className="text-gray-300">
              由職業選手與電競戰隊測試，確保產品在高強度賽事中的穩定表現。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 🔹 分隔線區塊 - 帶有標語，讓頁面更有層次 */}
      <div className="relative mt-16 mx-6">
        <div className="border-t border-gray-600"></div>
        <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] px-4 text-gray-400 text-sm">
          - 星點競技，為玩家帶來最新資訊 -
        </p>
      </div>

      {/* 🔹 Footer 仍固定在最下方 */}
      <Footer />
    </div>
  );
}
