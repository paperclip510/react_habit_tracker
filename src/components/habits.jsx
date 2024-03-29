import React, { Component, Fragment } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
   

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }

    handleAdd = name => {
        this.props.onAdd(name);
    }
    
    render() {
        return ( 
            <div>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>

                {
                    this.props.habits.map(habit => (
                            <Habit 
                                key={habit.id} 
                                habit={habit}
                                //count={habit.count}
                                //name={habit.name}
                                onIncrement={this.handleIncrement} 
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />
                    ))
                } 
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>reset</button>
            </div>
        );
    }
}

export default Habits;