import React, {useState} from "react";
import styles from "./Styles/app.module.scss";
import Search from "./components/Search";
import Categories from "./components/Categories";
import RecommendationList from "./components/RecommendationList";
                
export default function LandingPage(){
    const [dateBooking , setDateBooking] = useState();
    const [location, setLocation] = useState()
    const [filterBy, setFilterBy] = useState()
    return(
        <div className={styles.appContainer}>
                <Search setDateBooking={setDateBooking} setLocation={setLocation}/>
                <Categories  setFilterBy={setFilterBy} />
                <RecommendationList dateBooking={dateBooking} location={location} filterBy={filterBy} />
        </div>

    )
}