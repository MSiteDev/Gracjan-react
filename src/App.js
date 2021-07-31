import './App.css';
import React from "react";
import Task from "./Components/Task";

class App extends React.Component {
    state = {
        list: [],
        currentInputValue: "",
        counter: 0
    }

    onInputChange = e => {
        this.setState({currentInputValue: e.target.value});
    }

    addTask = () => {
        this.setState({
            list: this.state.list.concat({
                text: this.state.currentInputValue,
                id: this.state.counter,
                done: false
            }),
            currentInputValue: "",
            counter: this.state.counter + 1
        })
    }

    updateCompletion = (id, done) => {
        this.setState({
            list: this.state.list.map(task => {
                if (task.id === id) {
                    task.done = done;
                }

                return task
            })
        });
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>#</th>
                </tr>
                </thead>
                <tbody>
                {this.state.list.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        done={task.done}
                        updateCompletion={this.updateCompletion}
                    />
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={3}>
                        <input type="text" value={this.state.currentInputValue}
                               onChange={this.onInputChange}/>
                        <button onClick={this.addTask}>Add new task</button>
                    </td>
                </tr>
                </tfoot>
            </table>
        );
    }
}


export default App;
