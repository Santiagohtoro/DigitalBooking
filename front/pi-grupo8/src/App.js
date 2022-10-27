import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";
import styles from "./Styles/app.module.scss";
import './Styles/body.module.scss'
import FormLogin from "./components/FormLogin"
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom'

function App() {
  return (
    <div className={styles.appContainer}>
        <Routes>
          <Route path="/" element={<><Header/></>}>
              <Route path="home" element={<><Search/><Categories/><RecommendationList/><Footer/></>}></Route>
              <Route path="login" element={<><FormLogin/><Footer/></>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
