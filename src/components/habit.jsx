import React, { PureComponent } from 'react';

class Habit extends PureComponent {
   
    componentDidMount(){
        console.log(`did`);
    }

    componentWillUnmount(){
        console.log(`will un`);
    }


    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        const {name, count} = this.props.habit;
        //const {count} = this.props;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button 
                    className="habit-button habit-increase" 
                    onClick={this.handleIncrement}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button 
                    className="habit-button habit-decrease" 
                    onClick={this.handleDecrement}>
                    <i className="fas fa-minus-circle"></i>
                </button>
                <button 
                    className="habit-button habit-delete" 
                    onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;