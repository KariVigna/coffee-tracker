import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
    return (
        <React.Fragment>

        <hr/>
        </React.Fragment>
    );
}

Coffee.propTypes = {
    name: PropTypes.string.isRequired,
    origin: PropTypes.string,
    price: PropTypes.number.isRequired,
    roast: PropTypes.string
};

export default Coffee;