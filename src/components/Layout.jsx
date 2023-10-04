import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    const [themeColor, setThemeColor] = useState("dark");

    return (
        <div>
            <Header themeColor={themeColor} setThemeColor={setThemeColor} />
            <main>
                <Outlet />
            </main>
            <Footer themeColor={themeColor} setThemeColor={setThemeColor}/>
        </div>
    );
}
