import React from 'react';
import '../css/site.css';

export default function DarkMode({ setThemeColor }) {

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
        if (theme === lightTheme || theme === darkTheme) {
            body.classList.add(theme);
        } else {
            body.classList.add(lightTheme);
        }
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            setThemeColor(lightTheme);
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            setThemeColor(darkTheme);
        }
    }

    return (
        <div className="center-text" onClick={(e) => switchTheme(e)}>
            <img src={theme === "dark" ? "/imgs/moon-icon.png" : "/imgs/sun-icon.png"}
                className="theme-icon"/>
        </div>
    );
};
