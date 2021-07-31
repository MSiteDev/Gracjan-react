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
                id: this.state.counter
            }),
            currentInputValue: "",
            counter: this.state.counter + 1
        })
    }

    render() {

        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {this.state.list.map((task) => <Task key={task.id} id={task.id} text={task.text}/>)}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={2}>
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
