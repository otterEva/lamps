import "./App.css";
//import Grid from "./components/Grid";
import Header from "./components/Header";
import Authen from "./components/Auth";
import Korzina from "./components/Korzina";
import MakeOrder from "./components/MakeOrder";

function App() {
  return (
    <div className="App">
      <Header />
      <Korzina />
      <MakeOrder />
    </div>
  );
}

export default App;
