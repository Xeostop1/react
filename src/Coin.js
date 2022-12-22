// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   //패치에서 받아온 데이터를 useState로 관리
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => setCoins(json));
//     setLoading(false);
//   }, []);
//   return (
//     <div className="App">
//       <h1>The Conins! ({coins.length})개</h1>
//       <input type="text" placeholder="돈 입력" />
//       {loading ? <strong>Loading.....</strong> : null}
//       <ul>
//         {coins.map((coin) => (
//           <select>
//             <option>
//               {coin.name} ({coin.symbol}):{coin.quotes.USD.price} USD
//             </option>
//           </select>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// //return에 {} 넣으면 js사용
