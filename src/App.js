import { Component } from "react";
import TodoList from "./TodoList";

const initialData = [
  {
    title: 'Learn English',
    desc: 'It is my favorite goal',
    done: false,
    key: 1
  },
  {
    title: 'Go out',
    desc: 'Really go and really out',
    done: false,
    key: 2
  }
]

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { data: initialData };
    this.setDone = this.setDone.bind(this); 
  }

  setDone(key) {
    const deed = this.state.data.find((current) => current.key === key);
    if ( deed ) {
      deed.done = true;    
    }
    this.setState(state => ({}))
  }

  render() {
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="content px-6 mt-6">
          <TodoList list = {this.state.data} setDone = { this.setDone } />
        </main>
      </div>
    )
  }
}
