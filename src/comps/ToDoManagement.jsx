import React from 'react';
import Header from 'comps/Header.jsx';
import Add from "comps/Add.jsx";
import ToDoList from "comps/ToDoList.jsx";

export default class ToDoManagement extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {title: 'PayBills', status: 'OPEN'},
                {title: 'clean room', status: 'COMPLETE'},
                {title: 'do laundry', status: 'OPEN'},
                {title: 'do laundry  1', status: 'OPEN'}

            ],
            selectedToDo: {}
        };
    }

    /*

     componentDidMount(){
     $.ajax({
     url: 'https://api.myjson.com/bins/466wk',
     method: 'GET'
     }).then((data) => this.setState({companies:data, selectedCompany:data[0]}));
     }

     handleAdd(name, desc){
     let newComp = {name:name, desc:desc, bgc: '#'+Math.floor(Math.random()*0xffffff).toString(16)};
     let companies = this.state.companies;
     companies.push(newComp);
     this.setState({companies});
     }

     handleCompanyClick(i){
     //console.log(i);
     let selectedCompany = this.state.companies[i];
     this.setState({selectedCompany});
     }

     handleCompanyRemove(i){
     //console.log(i);
     let companies = this.state.companies;
     companies.splice(i,1);
     let selectedCompany;
     if(companies.length > 0)
     {
     selectedCompany = companies[0];

     }else{
     selectedCompany = {};
     }

     this.setState({companies,selectedCompany});// this.setState({companies:companies,selectedCompany:selectedCompany});
     }

     render(){
     return(
     <div>
     <Header title="Company Management Console"/>

     <Add onAdd={this.handleAdd.bind(this)}/>
     <br />

     <CompaniesList companies={this.state.companies}
     onCompanyClick={this.handleCompanyClick.bind(this)}
     onCompanyRemove={this.handleCompanyRemove.bind(this)}/>

     <CompanyDetails currentCompany={this.state.selectedCompany}/>
     </div>
     );
     }
     */
    handleToDoClick(i) {
        console.log(i);
        let selectedToDo = this.state.todos[i];
        this.setState({selectedToDo});
    }

    handleToDoRemove(i) {
        console.log(i);
        let todos = this.state.todos;
        todos.splice(i, 1);
        let selectedToDo;
        if (todos.length > 0) {
            selectedToDo = todos[0];

        } else {
            selectedToDo = {};
        }

        this.setState({todos, selectedToDo});// this.setState({companies:companies,selectedCompany:selectedCompany});
    }

    handleAdd(title) {
        let newTitle = {title: title, status: 'OPEN'};
        let toDos = this.state.todos;
        toDos.push(newTitle);
        this.setState({toDos});
    }

    render() {
        return (
            <div className="header">
                <Header title="My ToDo Console"/>
                <Add onAdd={this.handleAdd.bind(this)}/>
                <br/>
                <ToDoList todos={this.state.todos} onToDoClick={this.handleToDoClick.bind(this)}
                          onToDoRemove={this.handleToDoRemove.bind(this)}/>

            </div>
        );
    }
}