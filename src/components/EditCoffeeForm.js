import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {

    function handleEditCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onEditCoffee({name: event.target.name.value, origin: event.target.origin.value, roast: event.target.roast.value})
    }

    return (
        <React.Fragment>
        <ReusableForm 
            formSubmissionHandler={handleEditCoffeeFormSubmission}
            buttonText="Update Coffee" />
        </React.Fragment>
    );
}

EditCoffeeForm.propTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;