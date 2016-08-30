import React,{Component} from 'react';
import {render} from 'react-dom';

class My extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div> hello world!</div>
		       );
	}
}
render(<My/>,document.body);
