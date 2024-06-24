module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 구글 폰트를 추가합니다.
        sans: ["Roboto", "sans-serif"],
        // 기존에 정의된 폰트에 추가적인 폰트를 설정합니다.
        Nuecha: ["Neucha"],
        Lemon: ["Lemon"],
        indie_Flower: ["indie Flower"],
        Dela_Gothic_One: ["Dela Gothic One"],
      },
      colors: {
        "kakao-yellow": "#FEE500",
        "naver-green": "#03C75A",
      },
      backgroundImage: {
        profile: "url('../img/')",
        "profile-bg": "url('./img/forrest1.jpg')",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "4px 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "6px 6px 8px rgba(0, 0, 0, 0.1)",
        xl: "8px 8px 10px rgba(0, 0, 0, 0.1)",
        "2xl": "10px 10px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "4px 4px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          "text-shadow": "4px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-lg": {
          "text-shadow": "6px 6px 8px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-xl": {
          "text-shadow": "8px 8px 10px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-2xl": {
          "text-shadow": "10px 10px 12px rgba(0, 0, 0, 0.1)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
