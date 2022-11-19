import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import ProductDetail from "./components/ProductDetail";
import BookingSuccess from "./components/BookingSuccess";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";
import styles from "./Styles/app.module.scss";
import "./Styles/body.module.scss";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
            </>
          }
        >
          <Route
            path="home"
            element={
              <>
                <Search />
                <Categories />
                <RecommendationList />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="login"
            element={
              <>
                <FormLogin />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="register"
            element={
              <>
                <FormRegister />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="product"
            element={
              <>
                <ProductDetail />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="bookingSuccess"
            element={
              <>
                <BookingSuccess />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="booking"
            element={
              <>
                <Booking />
                <Footer />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
