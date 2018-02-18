import React from 'react';

export default class ToDo extends React.Component {

    onToDoClick() {
        this.props.onToDoDone();
    }

    onToDoRemove(e) {
        this.props.onToDRemove();
        e.stopPropagation();
    }

    render() {
        return (
            <div>
                <li onClick={this.onToDoClick.bind(this)}>{this.props.name}<span className="btn btn-danger"
                                                                                 onClick={this.onToDoRemove.bind(this)}>×</span>
                </li>
            </div>
        );
    }
}