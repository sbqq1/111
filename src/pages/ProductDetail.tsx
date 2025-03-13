import React, { useEffect, useState } from 'react'; // ✅ 加入 useState
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Footer from "../components/Footer";
import { useCart } from '../context/CartContext'; // ✅ 正確引入購物車 Hook

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart(); // ✅ 使用購物車 Hook
  
    // ✅ 添加數量管理
  const [quantity, setQuantity] = useState(1);

  //  每次進入這個頁面時，滾動到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 若找不到對應產品，顯示錯誤訊息
  if (!product) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen pt-20 flex items-center justify-center">
        <p className="text-white text-xl">找不到產品</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 產品圖片區 */}
          <div className="space-y-4">
            {product.images.map((image, index) => (
              <div key={index} className="bg-[#111111] rounded-lg p-8">
                <img
                  src={image}
                  alt={`${product.name} - 圖片 ${index + 1}`}
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* 產品資訊區 */}
          <div className="bg-[#111111] rounded-lg p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-2xl text-purple-500 font-bold mb-6">¥{product.price}</p>
            <p className="text-gray-300 mb-8">{product.description}</p>

            {/* 主要特點 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">主要特點</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* 產品規格 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">規格</h2>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">

                  {/* 🔹 根據 type 顯示不同的規格 */}
                  {product.type === "mouse" ? (
                    <>
                      <div>
                        <p className="text-gray-400">DPI範圍</p>
                        <p className="text-white">{product.specifications.dpi}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">感應器</p>
                        <p className="text-white">{product.specifications.sensor}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">按鍵</p>
                        <p className="text-white">{product.specifications.buttons}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">重量</p>
                        <p className="text-white">{product.specifications.weight}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">連接方式</p>
                        <p className="text-white">{product.specifications.connectivity}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-gray-400">材質</p>
                        <p className="text-white">{product.specifications.material}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">厚度</p>
                        <p className="text-white">{product.specifications.thickness}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">尺寸</p>
                        <p className="text-white">{product.specifications.size}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">防水防污</p>
                        <p className="text-white">{product.specifications.waterproof}</p>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>

            {/* ✅ 數量選擇 + 加入購物車 */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >-</button>
              <span className="text-white text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >+</button>
            </div>
            {/* ✅ 修正這裡的 quantity */}
            <button
              onClick={() => addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity, // ✅ 確保這裡的數量是正確的
                image: product.images[0]
              })}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6 text-center">
          {/* 產品介紹標題 */}
          <h2 className="text-4xl font-bold text-white mb-4">產品介紹</h2>
          {/* 紫色底線 */}
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-10"></div>

          {/* 產品介紹圖片區塊 */}
          <div className="flex flex-col items-center space-y-8">
            {product.introductionImages.map((introImage, index) => (
              <img
                key={index}
                src={introImage}
                alt={`產品介紹 - ${product.name} 圖片 ${index + 1}`}
                className="rounded-lg shadow-lg max-w-full w-full"
              />
            ))}
          </div>
        </div>
      </section>
      {/* 📌 新增保修政策區塊 */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6 text-center">
          {/* 🔹 保修政策標題 */}
          <h2 className="text-4xl font-bold text-white mb-4">保修政策</h2>
          {/* 🔹 紫色底線 */}
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-10"></div>

          {/* 🔹 保修條款區塊 */}
          <p className="text-gray-300 max-w-4xl mx-auto mb-6">
            根據《消費者保護法》，我們提供售後保修服務，確保您的產品擁有良好的使用體驗。
            產品符合條件可享有免費維修或更換服務。
          </p>

          {/* 額外補充 */}
          <p className="text-gray-300 leading-relaxed">
            本產品在未拆封情況下仍享有7天無理由退換政策。
          </p>


          {/* 🔹 條款區塊（左右對齊） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* ✅ 左側 - 享受條件 */}
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">享受條件：</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>產品仍在官方提供的保修期內。</li>
                <li>非人為損壞，且經技術人員檢測符合維修條件。</li>
                <li>提供完整購買憑證，如發票或購買記錄。</li>
              </ul>
            </div>

            {/* ✅ 右側 - 注意事項 */}
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">注意事項：</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>如因人為損壞，則無法提供免費維修。</li>
                <li>產品必須經過官方檢測並核實保修資格。</li>
              </ul>
            </div>
          </div>

          {/* 🔹 免責聲明 */}
          <p className="text-gray-400 text-sm mt-6 max-w-3xl mx-auto">
            若產品因不當使用導致損壞，則不適用於本保修政策。
            具體條款可參閱官方網站或聯絡客服人員。
          </p>
        </div>
      </section>
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
