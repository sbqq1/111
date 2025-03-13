import React from "react";
import { Mouse } from "lucide-react";
/*底部 footer */
const Footer = () => {
  return (
    
    <footer className="bg-[#111111] py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* 公司資訊 */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/LOGO.png"  // ✅ 你的 Logo 圖片路徑
                alt="星點競技"
                className="h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // ✅ 點擊後平滑滾動到頂部
              />
            </div>
            <p className="text-gray-400">專注電競外設研發製造</p>
          </div>
          
          {/* 產品系列 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">產品系列</h4>
            <ul className="space-y-2 text-gray-400">
              <li>遊戲滑鼠墊</li>
              <li>專業鍵盤</li>
              <li>電競滑鼠</li>
              <li>遊戲耳機</li>
            </ul>
          </div>

          {/* 服務支援 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">服務支援</h4>
            <ul className="space-y-2 text-gray-400">
              <li>購買指南</li>
              <li>保固政策</li>
              <li>技術支援</li>
              <li>線上客服</li>
            </ul>
          </div>

          {/* 關注我們 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">關注我們</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 星點競技。保留所有權利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

