import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewCoffeeForm(props){

    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: parseFloat(event.target.price.value),
            qty: parseInt(event.target.qty.value),
            id: v4()
        })
    }

    return (
        <React.Fragment>
        <ReusableForm
            formSubmissionHandler={handleNewCoffeeFormSubmission}
            buttonText="Add New Coffee" />
        </React.Fragment>
    );
}

NewCoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;