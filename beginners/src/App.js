import Button from "./Button";
import AppStyle from "./App.module.css";

function App() {
  return (
    <div> 
      <h1 className={AppStyle.title}>Welcome back! </h1>
       <Button text={"Continue"}/>
    </div>
  );
}

export default App;
