import "./App.css";
//import Grid from "./components/Grid";
import Header from "./components/Header";
import Authen from "./components/Auth";
import Korzina from "./components/Korzina";
import MakeOrder from "./components/MakeOrder";
import Page404 from "./components/Page404";
import AdminkaOrders from "./components/AdminkaOrders";

function App() {
  return (
    <div className="App">
      <Header />
      <AdminkaOrders />
    </div>
  );
}

export default App;
