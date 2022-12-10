import Search from "./components/Search";
import ProductDetail from "./components/ProductDetail";
import BookingSuccess from "./components/BookingSuccess";
import Booking from "./components/Booking";
import ProductSuccess from "./components/ProductSucess";
import "./Styles/body.module.scss";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";
import styles from "./Styles/app.module.scss";
import "./Styles/body.module.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import AdminForm from "./components/AdminForm/AdminForm";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <Search />
                <Categories />
                <RecommendationList />
              </>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
          <Route path="bookingSuccess" element={<BookingSuccess />}></Route>
          <Route path="productSuccess" element={<ProductSuccess />}></Route>
          <Route path="booking" element={<Booking />}></Route>
          <Route path="admin" element={<AdminForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
