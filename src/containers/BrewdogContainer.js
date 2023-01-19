import React, { useEffect, useState } from "react";
import BeerList from "../components/BeerList";
import BeerDetail from "../components/BeerDetail";

const BrewdogContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [favBeers, setFavBeers] = useState([]);


    const getBeers = function() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    // make copy of favBeers and then push the new fav beer
    const addToFav = (beerToAdd) => {
        const copyOfFavBeers = [...favBeers]
        copyOfFavBeers.push(beerToAdd)
        setFavBeers(copyOfFavBeers)
    }



    const onBeerClicked = function (beer) {
        setSelectedBeer(beer);
    }

    useEffect(() => {
        getBeers()
    }, [])

    return (
        <div>
            <h1>Brewdog Beers</h1>
            <BeerList beersAsAProp = {beers} onBeerClicked={onBeerClicked}/>
            {selectedBeer ? <BeerDetail beerProp={selectedBeer} addBeerProp={addToFav}/> : null}
            <h1>Favourite Beers</h1>
            <BeerList beersAsAProp = {favBeers} />
        
        </div>
    )
}




export default BrewdogContainer;