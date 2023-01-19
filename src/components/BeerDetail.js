import React from "react";

const BeerDetail = ({beerProp, addBeerProp}) => {
    console.log(addBeerProp)
    return (
        <div>
                <h4>Beer description:</h4> {beerProp.description}
                <h4>Alcohol %:</h4> {beerProp.abv}
            <button type="submit" value="Add-to-favourites" onClick={() => addBeerProp(beerProp)}>Add to favourites</button>
        </div>
    )
}

export default BeerDetail;