import React from 'react';
import Header from 'comps/Header.jsx';
import Add from "comps/Add.jsx";
import ToDoList from "comps/ToDoList.jsx";
import axios from 'axios';


export default class ToDoManagement extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            selectedToDo: {}
        };

        /*todos: [
         {title: 'PayBills', status: 'PENDING'},
         {title: 'clean room', status: 'COMPLETE'},
         {title: 'do laundry', status: 'PENDING'},
         {title: 'cooking meals', status: 'PENDING'}
         ]*/
        this.apiUrl = 'http://localhost:8080/api/todos';

    }

    /* apiUrl(){
     return 'http://localhost:8080/api/todos';
     }*/

    componentDidMount() {
        // Make HTTP reques with Axios
        axios.get(this.apiUrl)
            .then((res) => {
                // Set state with result
                this.setState({todos: res.data});
            });
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
        let idToBeDeleted = this.state.todos[i].id;

        // Filter all todos except the one to be removed
        const remainder = this.state.todos.filter((todo) => {
            if (todo.id !== idToBeDeleted) return todo;
        });

        // Update state with filter
        axios.delete(this.apiUrl + '/' + idToBeDeleted)
            .then((res) => {
                this.setState({todos: remainder});
            })


    }

    handleAdd(title) {
        const todo = {title: title, status: "PENDING"};
        // Update data
        axios.post(this.apiUrl, todo)
            .then((res) => {
                this.state.todos.push(res.data);
                this.setState(this.state.todos);
            });
    }

    render() {
        return (
            <div>
                <Header title="My ToDo Console"/>
                <Add onAdd={this.handleAdd.bind(this)}/>
                <br/>
                <ToDoList todos={this.state.todos} onToDoClick={this.handleToDoClick.bind(this)}
                          onToDoRemove={this.handleToDoRemove.bind(this)}/>

            </div>
        );
    }
}