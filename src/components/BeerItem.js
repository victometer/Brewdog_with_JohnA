import React from "react";

const BeerItem = ({beer, onBeerClicked}) => {

    const handleClick = function () {
        console.log(`Clicked on ${beer.name}`)
        onBeerClicked(beer);
    }


    return(
        <li onClick={handleClick}> {beer.name}</li>
    )
    
}



export default BeerItem