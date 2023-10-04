import React from "react";
import DarkMode from "../components/DarkMode";

export default function Header({ themeColor, setThemeColor }) {
    return (
        <header>
            <DarkMode themeColor={themeColor} setThemeColor={setThemeColor} />
        </header>
    );
}
