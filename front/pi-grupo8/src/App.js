import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Search from "./components/Search";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";

function App() {
  return (
    <div>
      <Header></Header>
      <Categories />
      <RecommendationList />
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
