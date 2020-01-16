import React,{Component} from "react";
import "./newTaskPanel.sass"

export default class NewTaskPanel extends Component{
    state = {
        label: "",
        date:`${new Date().toLocaleDateString()}`,
        err: "err-new-task"
    };
    submitTask = (e) => {
        e.preventDefault();
        if (this.state.label.length < 3) {
            this.setState({
                err: "err-new-task visible"
            })
        } else {
            this.props.onLabelText(this.state.label, this.state.date);
            this.setState({
                label: "",
                err: "err-new-task"
            })
        }

    };
    changeLabel = (e) => {
        if (e.target.value.length >= 3) {
            this.setState({
                label: e.target.value,
                err: "err-new-task"
            })
        }else {
            this.setState({
                label: e.target.value,
                err: "err-new-task visible"
            })
        }
    };
    render() {
        const {label, err} = this.state;
        return (
            <div className="new-task todo-padding">
                <form className="flex-row bg-form-and-input"
                    onSubmit={this.submitTask}>
                    <input type="text" id="todo-new-task" placeholder="Add a new task..."
                           value={label}
                    onChange={this.changeLabel}/>
                    <button type="submit" id="todo-button-new-task" className="button">Go</button>
                </form>
                <div className={err}>Few characters</div>
            </div>
        )
    }
}