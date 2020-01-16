import React,{Component} from "react";
import "./filterTasksPanel.sass"

export default class FilterTasksPanel extends Component{
    buttons = [
        {name: "all", label: "all task"},
        {name: "finished", label: "finished"},
        {name: "unfinished", label: "unfinished"},
    ];
    render() {
        const {all, finished, unfinished,
            filter,
            onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-active' : 'position-counter';

            switch (name) {
                case "all":
                    return (
                        <div key={name} className="position-counter">
                            <button type="submit" className={`button ${clazz}`}
                                    onClick={() => onFilterChange(name)}>{label}</button>
                            <div className="counter">{all}</div>
                        </div>
                    );
                case "finished":
                    return (
                        <div key={name} className="position-counter">
                            <button type="submit" className={`button ${clazz}`}
                                    onClick={() => onFilterChange(name)}>{label}</button>
                            <div className="counter">{finished}</div>
                        </div>
                    );
                case "unfinished":
                    return (
                        <div key={name} className="position-counter">
                            <button type="submit" className={`button ${clazz}`}
                                    onClick={() => onFilterChange(name)}>{label}</button>
                            <div className="counter">{unfinished}</div>
                        </div>
                    )
                }
            });
        return (
            <div className="task-filter-box todo-padding">
                {buttons}
            </div>
        )
    }
}