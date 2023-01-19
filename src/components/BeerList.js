import React from "react";
import BeerItem from "./BeerItem";

const BeerList = ({beersAsAProp, onBeerClicked}) => {
    const arrayOfBeers = beersAsAProp.map(beer => {
        return(
            <BeerItem beer={beer} onBeerClicked={onBeerClicked}/>
        )
    })
    return(
        <ol>
            <>
                {arrayOfBeers}
            </>
        </ol>
    )
}




export default BeerList;