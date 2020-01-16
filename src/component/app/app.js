import React,{Component} from "react";
import NewTaskPanel from "../new-task-panel";
import FilterTasksPanel from "../filter-tasks-panel";
import AllTasks from "../all-tasks";

import ServiseStorage from "../service"


import "./app.sass"


export default class App extends Component{
    serviseStorage = new ServiseStorage();

    keyItem = Math.random();

    state = {
      Todo: [],
      filter: "finished"
    };
    createTodoItem = (text, date) => {
        return {
            id: this.keyItem++,
            label:text,
            date:date,
            checked: false}
    };
    addItem = (text, date) => {
        const newItem = this.createTodoItem(text, date);
        this.serviseStorage.Register(newItem);
        this.allTasks();
    };
    allTasks = () => {
        if (this.serviseStorage.AllItemsStorage() === undefined){
            this.setState({Todo:[]})
        } else {
            this.setState({Todo:this.serviseStorage.AllItemsStorage()})
        }
    };
    deleteTask = (id) => {
        this.serviseStorage.DeleteTask(id);
        this.allTasks()
    };
    checkItem = (id) => {
        this.serviseStorage.checkTask(id);
        this.allTasks()
    };
    componentDidMount() {
        this.allTasks()
    }

    filter = (items, filter) => {
        switch (filter) {
            case "all":
                return items;
            case "unfinished":
                return items.filter((item) => !item.checked);
            case "finished":
                return items.filter((item) => item.checked);
            default:
                return items
        }
    };
    onFilterChange = (filter) =>{
        this.setState({filter})
    };
    render() {
        const {Todo, filter} = this.state;

        const checkedCount = Todo
            .filter((el) => el.checked).length;
        const unCheckedCount = Todo.length - checkedCount;
        const allTask = checkedCount + unCheckedCount;

        const visibleItems = this.filter( this.state.Todo, filter);

        return(
            <div className="wrapper">
                <div className="flex-column todo-box">
                    <div className="flex-column bg-list todo-height bg-box__width__radius">
                        <NewTaskPanel Todo={this.state.Todo} onLabelText={this.addItem}/>
                        <FilterTasksPanel
                            finished={checkedCount}
                            unfinished={unCheckedCount}
                            all={allTask}
                            filter={filter}
                            onFilterChange={this.onFilterChange}/>
                        <div className="black-line"></div>
                        <AllTasks Todo={visibleItems}
                                  deleteTask={this.deleteTask}
                                  checkItem={this.checkItem}/>
                    </div>
                </div>
            </div>
        )
    }
}