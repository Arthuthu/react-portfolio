import React from 'react';
import '../css/site.css';

export default function DarkMode({ themeColor, setThemeColor }) {

    console.log(themeColor)

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";

    if (localStorage) {
        const theme = localStorage.getItem("theme");
        if (theme === lightTheme || theme === darkTheme) {
            body.classList.add(theme);
        } else {
            body.classList.add(lightTheme);
        }
    }

    const switchTheme = (e) => {
        if (themeColor === darkTheme) {
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
            <img src={themeColor === "dark" ? "/imgs/moonicon.png" : "/imgs/sunicon.png"}
                className="theme-icon"/>
        </div>
    );
};
