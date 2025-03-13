import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ 引入 Framer Motion 動畫庫
import { newsData } from "../data/News";
import Footer from "../components/Footer"; // ✅ 引入 Footer.tsx

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A0A0A] flex flex-col min-h-screen pt-10">
      {/* 🔹 視覺圖區塊 - 新聞中心標題內嵌在圖片中 */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full"
      >
        {/* 視覺圖 - 加入淡入 + 滑入動畫 */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://chn.wlmouse.com/uploadfile/202503/554c537000520c3.jpg"
          alt="新聞中心視覺圖"
          className="w-full h-[500px] object-cover"
        />

        {/* 🔹 標題文字 - 疊加在視覺圖上，增加淡入動畫 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/40"
        >
          <h1 className="text-5xl font-bold text-white">新聞中心</h1>
          <p className="text-lg text-gray-300 mt-2">探索星點競技最新動態</p>
        </motion.div>
      </motion.div>

      {/* 🔹 新聞列表區塊 */}
      <div className="flex-1 container mx-auto px-6 py-12 bg-[#181818] rounded-lg shadow-lg mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }, // ✅ 讓新聞卡片逐一出現
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsData.map((news) => (
            <motion.div
              key={news.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to={`/news/${news.id}`} className="block">
                <div className="bg-[#222222] rounded-lg p-6 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  {/* 🔹 日期 */}
                  <h2 className="text-xl font-bold text-white">{news.date}</h2>

                  {/* 🔹 標題 */}
                  <p className="text-lg text-white font-semibold mt-2">
                    {news.title}
                  </p>

                  {/* 🔹 摘要 */}
                  <p className="text-gray-400 mt-2">{news.description}</p>

                  {/* 🔹 新聞縮圖 - 只在新聞中心顯示 */}
                  {news.thumbnail && (
                    <div className="mt-4">
                      <img
                        src={news.thumbnail}
                        alt={news.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
