import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
    const { coffee, onClickingDelete } = props;

    return (
        <React.Fragment>
        <h1>{coffee.name}, {coffee.origin}: {coffee.price}</h1>
        <button onClick={ props.onClickingEdit }>Update Coffee</button> 
        <button onClick={()=> onClickingDelete(coffee.id) }>Close details</button>
        <hr/>
        </React.Fragment>
    );
}

CoffeeDetail.propTypes = {
    coffee: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
}


export default CoffeeDetail;