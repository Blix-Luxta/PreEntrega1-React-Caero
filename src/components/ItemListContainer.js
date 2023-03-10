import React from "react";

function ItemListContainer(props) {
    return (
        <div>
            <h1 className="saludo">{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer