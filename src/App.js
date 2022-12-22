import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [change, setChange] = useState(0);
  //const [money, setMoney] = useEffect([]);
  //패치에서 받아온 데이터를 useState로 관리
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);

  const Changemoney = (it) => {
    console.log(money / it.target.value);
    console.log(money);
  };

  const onChange = (event) => {
    setMoney(event.target.value);
    console.log(money);
  };

  return (
    <div className="App">
      <h1>The Conins! ({coins.length})개</h1>
      <input
        onChange={onChange}
        className="input_money"
        type="text"
        placeholder="돈 입력"
      />
      <input type="button" value="환전" onClick={Changemoney} />
      {loading ? <strong>Loading.....</strong> : null}
      <br />
      <select onChange={Changemoney}>
        {coins.map((coin) => (
          <option value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}):{coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <h2>당신은 {}</h2>
      <input type="text" />
    </div>
  );
}

export default App;

//return에 {} 넣으면 js사용
