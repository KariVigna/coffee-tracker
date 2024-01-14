import React from "react";
import Coffee from "./Coffee";

function CoffeeList(){
    return (
        <React.Fragment>
            {mainCoffeeList.map((coffee, index) =>
            <Coffee name={coffee.name}
            origin={coffee.origin}
            price={coffee.price}
            roast={coffee.roast}
            key={index}/>
        )}
        </React.Fragment>
        
    );
}

export default CoffeeList;