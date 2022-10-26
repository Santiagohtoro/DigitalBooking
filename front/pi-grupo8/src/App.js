import Header from "./components/Header";
import Footer from "./components/Footer";
//import Search from "./components/Search";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";
import styles from "./Styles/app.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header></Header>
      <Categories />
      <RecommendationList />
      <Footer></Footer>
    </div>
  );
}

export default App;
