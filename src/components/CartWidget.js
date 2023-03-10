import React from "react";
import carrito from "../components/imagenes/carrito.png"
import CartWidgetStyles from "./Cartwidget.css"

function CartWidget() {



    return (

        <a className="nav-link position-absolute top-0 end-0" href="#">
            <img src={carrito} width="44" height="40" />
            <span className="contador">1</span>
        </a>
    )
}

export default CartWidget