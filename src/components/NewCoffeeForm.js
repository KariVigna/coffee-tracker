import React from "react";
import ReusableForm from "./ReusableForm"

function NewCoffeeForm(props){
    return (
        <React.Fragment>
        <ReusableForm
            formSubmissionHandler={handleNewCoffeeFormSubmission}
            buttonText="Add New Coffee" />
        </React.Fragment>
    );
}

export default NewCoffeeForm;