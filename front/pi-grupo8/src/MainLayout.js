import React from "react";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function MainLayout() {
    return(
        <div>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
}