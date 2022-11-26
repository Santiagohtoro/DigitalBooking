import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import ProductDetail from "./components/ProductDetail";
import BookingSuccess from "./components/BookingSuccess";
import Booking from "./components/Booking";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";
import styles from "./Styles/app.module.scss";
import "./Styles/body.module.scss";
import Login from "./components/Login";
import FormRegister from "./components/FormRegister";
import { Route, Routes } from "react-router-dom";

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
                <Login />
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
            path="/home/product/:id"
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
