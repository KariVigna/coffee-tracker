import React from "react";
import coffeeImage from "./../img/coffeeImage.jpeg"

function Header(){
    return (
        <React.Fragment>
        <h1>Coffee Tracker</h1>
        <img src={coffeeImage} alt="An image of a delicious cup of coffee" />
        </React.Fragment>
    );
}

export default Header;