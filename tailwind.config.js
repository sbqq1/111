/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // 確保 Tailwind 正確掃描檔案
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out forwards", // 定義動畫
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [], // 若未來需要其他插件，可在此處擴展
};
