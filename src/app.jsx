import React, { Component, Fragment } from 'react';
import "./app.css";
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
          {id:1,name:'Reading',count:0},        
          {id:2,name:'Running',count:0},        
          {id:3,name:'Coding',count:0},
      ]
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return{...habit, count:habit.count+1} //디컨스트럭팅 오브젝트
      }
      return item;
    });
    // console.log(`handleIncrement ${habit.name}`);
    // console.log(`${habit}`);
    // const habits = [...this.state.habits];
    // console.log(habits);
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    //this.setState({habits:habits});
    this.setState({habits});

}

handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    // const habits = [...this.state.habits]; // 스프레이드 오퍼레이터 : 직접적으로 스테이트의 값을 수정하면 좋지않음.
    // //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    // const index = habits.indexOf(habit);
    // const count = habits[index].count-1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = item.count-1;
        return{...habit, count:count < 0 ? 0 : count} //디컨스트럭팅 오브젝트
      }
      return item;
    });

    this.setState({habits});
}

handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});

}

handleAdd = name => {
  // const habits = [...this.state.habits]; //스프ㅔ드 오퍼레이터
  // habits.push({id:habits.length,name:name,count:0});
  const habits = [...this.state.habits, {id:Date.now(), name, count:0}];
  this.setState({habits});
  
}

handleReset=()=>{
  // const habits = this.state.habits.map(habit=>{
  //   console.log(habit);
  //   habit.count = 0;
  //   console.log(habit);
  //   return habit;
  // });

  const habits = this.state.habits.map(item=>{
    if(item.count > 0){
      return {...item, count:0};
    }else{
      return item;
    }

  })

  console.log(habits);
  this.setState({habits:habits});
}

  render() {
    const habits = this.state.habits;

    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
      <Habits
        habits={habits}
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
      />

      </>
    );
  }
}

export default App;

