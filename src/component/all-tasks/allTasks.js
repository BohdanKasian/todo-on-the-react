import React, {Component} from "react";
import "./allTasks.sass"

// const AllTasks = ({Todo}) => {
//
//     const Tasks = Todo.map((item) => {
//         const {id, label, date} = item;
//         return (
//             <div key={id} className="task-box flex-row todo-padding">
//                 <label className="checkbox">
//                     <input type="checkbox" className="c1"/>
//                     <span className="checkbox-span"></span>
//                 </label>
//                 <div className="flex-column task-detail-box">
//                     <div className="delete-task"></div>
//                     <span type="text" className="task title" onClick={}>{label}</span>
//                 </div>
//                 <p className="date">{date}</p>
//             </div>
//         )
//     });
//     return (
//         <>
//             {Tasks}
//         </>
//     )
//
// };
//
// export default AllTasks

export default class AllTasks extends Component{

    Tasks = () => {
        const {Todo, deleteTask, checkItem} = this.props;

        return (
            Todo.map((item) => {
                const {id, label, date, checked} = item;

                let classChecked = "task title";
                if (checked) {
                    classChecked += " checked-task"
                }

                return (
                    <div key={id} className="task-box flex-row todo-padding">
                        <label className="checkbox">
                            <input type="checkbox" className="c1"
                                   defaultChecked={checked}
                                   onClick={() => checkItem(id)}/>
                            <span className="checkbox-span"></span>
                        </label>
                        <div className="flex-column task-detail-box">
                            <div className="delete-task" onClick={() => deleteTask(id)}></div>
                            <span type="text" className={classChecked}>{label}</span>
                        </div>
                        <p className="date">{date}</p>
                    </div>
                );
            })
        );
    };
    render() {
        return (
            <>
                {this.Tasks()}
            </>
        )
    }
};