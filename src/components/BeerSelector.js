

const BeerSelector = ({beersAsAProop}) => {

    const beerOptions = beersAsAProop.map((beer, index) => {
        return (
            <OptionItem beer={beer} index={index}/>
        )
    })

    return (
        <>{beerOptions}</>
    )
}