import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormLogin from "./components/FormLogin";
//import Search from "./components/Search";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Header></Header>
      <Categories/>
      <Footer></Footer>
    </div>
  );
}

export default App;
