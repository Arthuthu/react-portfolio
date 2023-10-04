import React from "react";
import DarkMode from "../components/DarkMode";

export default function Header({ themeColor, setThemeColor }) {
    return (
        <header>
            <div>Hello</div>
            <DarkMode themeColor={themeColor} setThemeColor={setThemeColor} />
        </header>
    );
}
