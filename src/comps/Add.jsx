import React from 'react';
import axios from 'axios';


export default class Add extends React.Component {

    add() {
        let inputValue = document.getElementById("myInput").value;
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            this.props.onAdd(this.refs.title.value);
            this.refs.title.value = '';
        }
        console.log("Inside Add" + this.props);


    }

    render() {
        return (
            <div className="header">
                <input id="myInput" ref="title" type="text" placeholder="Title..."/>
                <span onClick={this.add.bind(this)} className="addBtn">Add</span>
            </div>
        );
    }
}