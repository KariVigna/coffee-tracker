import React from "react";
import Coffee from "./Coffee";

function CoffeeList(){
    return (
        <React.Fragment>
            {props.coffeeList.map((coffee) =>
            <Coffee
            whenCoffeeClicked = { props.onCoffeeSelection }
            name={coffee.name}
            origin={coffee.origin}
            price={coffee.price}
            roast={coffee.roast}
            id={coffee.id}
            key={coffee.id}/>
        )}
        </React.Fragment>
        
    );
}

CoffeeList.propTypes = {
    coffeeList: PropTypes.array,
    onCoffeeSelection: PropTypes.func
}

export default CoffeeList;