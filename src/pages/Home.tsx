import React from 'react';
import { Link } from 'react-router-dom';
import { Mouse, Award, Zap, Shield, Globe, ChevronDown } from 'lucide-react';
import { products } from '../data/products';// 引入產品數據
import ProductCard from '../components/ProductCard';// 引入產品卡片元件
import Footer from "../components/Footer"; // ✅ 引入 Footer.tsx

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* 主視覺區塊 */}
      <header className="relative h-screen">
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('https://chn.wlmouse.com/uploadfile/202412/604bbcddc8f18fe.jpg')",
              backgroundBlendMode: "overlay"
            }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-64px)] flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              專業電競裝備
              <span className="block text-purple-500">為玩家而生</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              源自專業電競賽事的選手推薦，為您帶來頂級遊戲體驗
            </p>
            {/* 按鈕區塊 */}
            <div className="flex space-x-4 justify-center">
              <Link
                  to="/products"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
              >
                立即購買
              </Link>
              <button
                  className="border border-white hover:bg-white hover:text-[#0A0A0A] text-white px-8 py-3 rounded-full text-lg font-semibold transition">
                了解更多
              </button>
            </div>
            {/* "行者無疆 跨越山海" 區塊 (動畫) */}
            <div className="absolute inset-x-0 bottom-16 text-center animate-fade-in">
              <h2 className="text-5xl font-black tracking-wide text-white">
                行者無疆 跨越山海
              </h2>
              <p className="text-xl text-gray-300 tracking-wider mt-2">
                行者系列超輕鎂合金鼠標
              </p>
            </div>
          </div>
        </div>
        {/* 向下指示箭頭 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white"/>
        </div>
      </header>


      {/* Features Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">專業認證</h3>
              <p className="text-gray-400">通過專業電競選手測試認證</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">品質保證</h3>
              <p className="text-gray-400">兩年保固，終身售後服務</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">極致體驗</h3>
              <p className="text-gray-400">多種材質選擇，適配不同需求</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          {/* 熱銷產品標題 + 左右分隔線 */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-grow border-t border-gray-600"></div>
            <h2 className="text-4xl font-bold text-white text-center mx-4">熱銷產品</h2>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* 產品列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
              <Mouse className="w-full h-full" />
            </div>
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">限時優惠</h2>
              <p className="text-xl text-white mb-8">
                新品上市特惠，全場滿300減50，限時特享
              </p>
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition">
                立即搶購
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-16 h-16 text-purple-500 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-6">全球信賴</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            深受全球電競玩家信賴，產品銷往50多個國家和地區
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
