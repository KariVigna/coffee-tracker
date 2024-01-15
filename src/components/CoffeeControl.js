import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import EditCoffeeForm from './EditCoffeeForm';
import CoffeeDetail from './CoffeeDetail';

class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: [],
            selectedCoffee: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedCoffee != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedCoffee: null
            });
        } else {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }))
        };
    }


    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
        this.setState({selectedCoffee: selectedCoffee});
    }

    handleDeletingCoffee = (id) => {
        const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            selectedCoffee: null
        });
    }

    handleEditClick = () => {
        if (this.state.selectedCoffee != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedCoffee: null,
                editing: false
            })
        } else {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
        }
    }

    handleEditingCoffeeInList = (coffeeToEdit) => {
        const editedMainCoffeeList = this.state.mainCoffeeList
            .filter(coffee => coffee.id !== this.state.selectedCoffee.is)
            .concat(coffeeToEdit);
        this.setState({
            mainCoffeeList: editedMainCoffeeList,
            editing: false,
            selectedCoffee: null
        });
    }


    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditCoffeeForm 
                            coffee = {this.state.selectedCoffee}
                            onEditCoffee = {this.handleEditingCoffeeInList} />;
            buttonText = "Return to Coffee List"
        } else if (this.state.selectedCoffee != null) {
            currentlyVisibleState = <CoffeeDetail
                            coffee = {this.state.selectedCoffee}
                            onClickingDelete = {this.handleDeletingCoffee}
                            onClickingEdit = {this.handleEditClick} />;
            buttonText = "Return to Coffee List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm />;
            buttonText = "Return to Coffee List";
        } else {
            currentlyVisibleState = <CoffeeList />
            buttonText = "Add Coffee";        
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