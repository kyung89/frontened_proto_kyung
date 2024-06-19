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
    },
  },
  plugins: [],
};
