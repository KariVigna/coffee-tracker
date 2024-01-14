import React from 'react';
import NewTicketForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: []
        };
    }

    render() {
        return(
            <React.Fragment>

            </React.Fragment>
        )

    }
}

export default CoffeeControl;