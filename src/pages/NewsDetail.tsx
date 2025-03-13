import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../data/News";
import Footer from "../components/Footer"; // ✅ 引入 Footer.tsx

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((n) => n.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!news) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">找不到新聞內容</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] flex flex-col min-h-screen pt-10">
      {/* 🔹 新聞標題區塊 */}
      <div className="bg-[#1A1A1A] py-12 text-center shadow-md">
        <h1 className="text-4xl font-bold text-white">{news.title}</h1>
        <p className="text-gray-400 mt-2">{news.date}</p>
        {/* 🔹 紫色底線 */}
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* 🔹 主要內容區塊 - 根據 `imageFirst` 決定圖片/文字順序 */}
      <div className="container mx-auto px-6 py-12 bg-[#181818] rounded-lg shadow-lg mt-8 flex flex-col space-y-6">
        {news.imageFirst ? (
          <>
            {/* ✅ 圖片在上，文字在下 */}
            <div className="flex flex-col space-y-6">
              {news.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`新聞圖片 ${index + 1}`}
                  className="w-full object-contain rounded-lg shadow-lg"
                />
              ))}
            </div>
            <div className="text-gray-300 whitespace-pre-line">
              {news.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* ✅ 文字在上，圖片在下 */}
            <div className="text-gray-300 whitespace-pre-line">
              {news.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col space-y-6">
              {news.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`新聞圖片 ${index + 1}`}
                  className="w-full object-contain rounded-lg shadow-lg"
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 🔹 分隔線區塊 - 帶有標語，讓頁面更有層次 */}
      <div className="relative mt-16 mx-6">
        <div className="border-t border-gray-600"></div>
        <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] px-4 text-gray-400 text-sm">
          - 星點競技，為玩家帶來最新資訊 -
        </p>
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
