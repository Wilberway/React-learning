import React,{Component} from "react";
import {render} from 'react-dom';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Anima extends Component{
	constructor(props){
		super(props);
		this.i = 0;
		this.src = JSON.parse(this.props.src);
		this.imgs = this.src.map((imgaddr,key)=>{
			return(<img src={imgaddr} key={imgaddr} style={{width:this.props.width,height:this.props.height,position:"absolute"}}/>);
		});
		this.state = {img:this.imgs[0]};
	}
	render(){
				let img = this.state.img;
		return(
				<div style={{overflow:"hidden",width:this.props.width,height:this.props.height,position:"relative"}}>
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={this.duration} transitionLeaveTimeout={this.duration}>
						{img}
					</ReactCSSTransitionGroup>
				</div>
		       );
	}
	componentDidMount(){//在加载组件的时候获取数据是一个通常的做法，组件的自带触发事件，与html标签的加载事件类似！
		setInterval(()=>{
				this.i++;
				console.log(this.i);
				this.setState({img:this.imgs[this.i%3]});
				},1000);
	}
}

render(<Anima width="300" height="200" src='["1.jpg","2.jpg","3.jpg"]' duration="1000" />,document.body);
