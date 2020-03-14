import React , { Component } from 'react';
import Aux from '../../highoc/Auxilary';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux> 
                <Burger/>
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;