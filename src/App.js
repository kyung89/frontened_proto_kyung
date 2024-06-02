//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// 내가 구현하는 기능 외에 인규님이 구현하시는 기능 페이지도 구현되었다고 가정하고 설계에 포함시켜 구현한다

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full mx-auto h-screen overflow-y-hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
