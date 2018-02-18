import React from 'react';


export default class Add extends React.Component{

	add(){
		this.props.onAdd(this.refs.title.value);
		this.refs.title.value = '';
	}

	render(){
		return(
			<div className="row">
				<div className="col-md-2">
					<input ref="title" type="text"  placeholder="Title" className="form-control"/>
				</div>
				<button className="btn btn-success" onClick={this.add.bind(this)}>Add</button>
			</div>
		);
	}
}