import React from 'react';
import NewTicketForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: [],
            selectedCoffee: null
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
        this.setState({selectedTicket: selectedTicket});
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.selectedCoffee != null) {
            currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} />
            buttonText = "Return to Ticket List";
        }
        else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm />;
            buttonText = "Return to Ticket List";
        } else {
            currentlyVisibleState = <CoffeeList />
            buttonText = "Add Ticket";        
        }
        
        return(
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        )

    }
}

export default CoffeeControl;