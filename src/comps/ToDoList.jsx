import React from 'react';
import ToDo from "comps/ToDo.jsx";

export default class ToDoList extends React.Component {
    onToDoClick(i) {
        this.props.onToDoClick(i);
    }

    onToDoRemove(i) {
        this.props.onToDoRemove(i);
    }

    render() {
        return (
            <div className="row">
                {this.props.todos.map((toDoItem, i) =>
                    <ToDo key={i} name={toDoItem.title}
                          onToDoDone={this.onToDoClick.bind(this, i)}
                          onToDRemove={this.onToDoRemove.bind(this, i)}/>
                )}

            </div>

        );
    }
}