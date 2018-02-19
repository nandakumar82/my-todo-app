import React from 'react';
import ToDo from "comps/ToDo.jsx";

export default class ToDoList extends React.Component {

    componentDidMount() {
        console.log("Inside componentDidMount");
        let list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }

    onToDoClick(i) {
        this.props.onToDoClick(i);
    }

    onToDoRemove(i) {
        this.props.onToDoRemove(i);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((toDoItem, i) =>
                    <ToDo key={i} name={toDoItem.title}
                          onToDoDone={this.onToDoClick.bind(this, i)}
                          onToDRemove={this.onToDoRemove.bind(this, i)}/>
                )}

            </ul>

        );
    }
}