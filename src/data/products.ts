// 引入 Product 型別，確保數據符合定義
import { Product } from '../types';

// 定義 `products` 陣列，存放所有產品數據
export const products: Product[] = [
  {
    id: "wl-pad-1", // 產品唯一 ID
    name: "WL-PAD 圖案系列-貓貓蛇", // 產品名稱
    description: "中性偏控制（粗面亂紋）", // 產品簡介
    price: 159.00, // 產品價格
    type: "mousepad", // 🔹 設定這個產品是滑鼠墊

    // 產品主要特點
    features: [
      "超細纖維表面",
      "4mm厚度",
      "490x420mm",
      "防水防污"
    ],

    // 🔹 滑鼠墊的專屬規格
    specifications: {
      material: "超細纖維布面", 
      thickness: "4mm",
      size: "490x420mm",
      waterproof: "是"
    },


    // 產品主圖
    images: [
      "https://chn.wlmouse.com/uploadfile/202502/f6a3f7c2a5a0dda.png"
    ],

    // 產品介紹區塊的圖片（可以有多張）
    introductionImages: [
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/1739266759722409.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/173951975956a2a9.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/1739266759053546.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/173926676082b685.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/1739266760196482.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/173926676086534a.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202502/17392667607afa75.jpg",
    ],

    isHot: true // 是否為熱銷產品
  },

  {
    id: "wl-pad-2",
    name: "WL-PAD 圖案系列-七殺",
    description: "泛用型（細絨）",
    price: 159.00,
    type: "mousepad", // 🔹 設定這個產品是滑鼠墊

    features: [
      "細致絨面",
      "3mm厚度",
      "900x400mm",
      "出色耐用性"
    ],

    // 🔹 滑鼠墊的專屬規格
    specifications: {
      material: "細致絨面", 
      thickness: "3mm",
      size: "490x420mm",
      waterproof: "是"
    },


    images: [
      "https://chn.wlmouse.com/uploadfile/202501/21aa086ca18f12e.png"
    ],

    // 新增「多張」產品介紹圖片
    introductionImages: [
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/173675510017aead.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736755100400b26.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736755100e28163.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/17367551012ec514.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736755101df6052.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/17367551012f89c4.jpg"
    ],

    isHot: true
  },

  {
    id: "wl-mouse-1",
    name: "萬靈(影)系列鍛碳滑鼠",
    description: "專業電競（速度型）",
    price: 799.00,
    type: "mouse", // 🔹 設定這個產品是滑鼠

    features: [
      "鍛炭材質",
      "37g超輕量",
      "高精度感應器",
      "8000hz"
    ],

    specifications: {
      dpi: "100-26000",
      sensor: "PAW3950HS",
      buttons: "6個可編程按鍵",
      weight: "37g",
      connectivity: "2.4GHz/USB-C"
    },

    images: [
      "https://chn.wlmouse.com/uploadfile/202501/c1a8c0bdf4b7c55.png"
    ],

    // 這裡放入「多張」產品介紹圖片
    introductionImages: [
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/17368203331549b0.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820333f8fc80.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820334026eda.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820335b904a2.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820335902bb2.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820335104122.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820335812571.jpg",
      "https://chn.wlmouse.com/uploadfile/ueditor/image/202501/1736820335b98944.jpg",
    ],

    isHot: true
  }
];
