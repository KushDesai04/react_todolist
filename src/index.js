import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Task(props) {
  return (
    <p>
      {props.value}
    </p>
  );
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
    };
  }

  renderTask(task) {
    return (
      <Task
        value={task}
        onClick={() => this.deleteTask()}
      />
    );
  }

  deleteTask(i) {
    console.log(this.state.allTasks[i])
    let allTasks = this.state.allTasks.slice()
    allTasks.splice(i, 1)
    this.setState({
      allTasks: allTasks
    })
  }

  addTask(task) {
    const allTasks = this.state.allTasks.slice()
    this.setState({
      allTasks: allTasks.concat([this.renderTask(task)])
    })
  }

  render() {
    const allTasks = this.state.allTasks.slice();
    const tasks = allTasks.map((step, move) => {
      return (
        <li key={move} class='task'>
          {step}
          <button className="square" onClick={() => this.deleteTask(move)}>
            Delete
          </button>
        </li>
      );
    });



    return (
      <div class='Container'>
        <input type='text' id='input'></input><button type='submit' onClick={() => this.addTask(document.getElementById('input').value)}>Add Task</button>
        {tasks}
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDoList />);
