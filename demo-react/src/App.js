import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoListComp} from './todoList';
import {TodoFilterComp} from './todoFilter'
import {AddTodoComp} from './addTodo'
import {WeatherListComp} from './weatherList'
import {DatetimeComp} from './datetime'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      todoList: [
        {
          id: 0,
          text: 'do 1',
          complete: false
        },
        {
          id: 1,
          text: 'do 2',
          complete: false
        },
        {
          id: 2,
          text: 'do 3',
          complete: false
        }
      ]
    }
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    });
  }

  toggleComplete = (todo) => {
    let newList = [...this.state.todoList];
    newList.forEach((v, k) => {
      if (v.id === todo.id) {
        v.complete = !v.complete;
      }
    });
    this.setState({
      todoList: newList
    });
  }

  filterList(list) {
    let newList = [];
    list.forEach((v, k) => {
      if (this.state.filter === 'all') {
        newList.push(v);
      } else {
        if(this.state.filter === 'complete' && v.complete) {
          newList.push(v);
        }
        if(this.state.filter === 'incomplete' && !v.complete) {
          newList.push(v);
        }
      }
    });
    return newList;
  }

  addTodo = (value) => {
    let newTodo = {
      id: this.state.todoList.length,
      text: value,
      complete: false
    }
    let newTodoList = [...this.state.todoList];
    newTodoList.push(newTodo);
    this.setState({
      todoList: newTodoList
    });
  } 

  render() {
    const todoList = this.filterList([...this.state.todoList]);
    return (
      <div className="App">
        <DatetimeComp/>
        <WeatherListComp />
        <TodoFilterComp changeFilter={this.changeFilter} filter={this.state.filter}/>
        <TodoListComp list={todoList} toggleComplete={this.toggleComplete}/>
        <AddTodoComp addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
