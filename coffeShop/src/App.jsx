import style from "./app.module.css";
import Header from "./header/Header";
import CoffeMain from "./main/CoffeMain";
function App() {
  return (
    <>
      <div className={style.container}>
        <Header/>
        <CoffeMain/>
      </div>
    </>
  );
}

export default App;
