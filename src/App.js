import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//return에 {} 넣으면 js사용
/* <BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</BrowserRouter>*/
// 이게 최신버전!
