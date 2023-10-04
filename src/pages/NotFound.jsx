import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <>
            <div className="not-found">Pagina não encontrada</div>
            <div className="center-margin">
                <Link to="/" className="portfolio-button-anchor">Inicio</Link>
            </div>
        </>
    )
}