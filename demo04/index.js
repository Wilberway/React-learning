import React,{Component} from 'react';
import {render} from 'react-dom';

class Button extends Component{
	constructor(props){
		super(props);
		this.state = {hitted:false};
	}

	handleClick(e){
		this.setState({hitted:!this.state.hitted});
	}

	render(){
		let  text = this.state.hitted ? "i am  selected!" : "i am not selected!";//逻辑和表现捆绑,注释同js注释一致，在组件元素中，需要大括号{}包围
		let color = this.state.hitted ? "#eee" : "#666";
		return (
				<div>
				<div>{text}</div>
				<input type="button" style={{backgroundColor:color}} onClick={this.handleClick.bind(this)} value="click here!"/>
				{/*style 的样式是js的对象，而不是html中的直接写法，可以利用这一特性实现类似class的效果*/}
				</div>
		       );
	}
}
render(<Button/>,document.body);
