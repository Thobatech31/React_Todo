import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import uuid from 'uuid';

class App extends Component {
    constructor(props) {
      super(props)

        this.state={
          todos: [
            {
              id:uuid.v4(),
              title:"Am for the first element",
              completed:false
            },

              {
                  id:uuid.v4(),
                  title:"Am for the second element",
                  completed:true
              },

              {
                  id:uuid.v4(),
                  title:"Am for the third element",
                  completed:false
              },
          ]
        }
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo =>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo;
            })});
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id
                !== id)]});
    }

    //AddTodo
    addTodo = (title) => {
        const newTodo = {
            id:uuid.v4(),
            title:title,
            completed:false
        }
        this.setState({todos:[...this.state.todos, newTodo]});
    }

    render(){

       return (
         <Router>
             <div className="App">
                 <div className="container">
                     <Header />
                     <Route exact path="/" render={ props => (
                         <React.Fragment>
                             <AddTodo addTodo={this.addTodo} />
                             <Todos todos={this.state.todos} markComplete={this.markComplete}
                                    delTodo={this.delTodo} />
                         </React.Fragment>
                     )} />

                     <Route path="/about" component={About} />
                     <Route path="/contact" component={Contact} />
                 </div>
             </div>
         </Router>
        );
    }
       
}



export default App;
