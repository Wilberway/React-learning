import React,{Component} from "react";
import {render} from 'react-dom';
import {ReactCssTransitionGroup} from "react-addons-css-transition-group";

class Anima extends Component{
	constructor(props){
		super(props);
		this.percent = 30;
		this.state={left:[0,1*this.props.width,2*this.props.width]};
	}
	render(){
				let src = JSON.parse(this.props.src);
				let width = this.props.width;
				let height = this.props.height;
				let left = this.state.left;
		return(
				<div style={{overflow:"hidden",width:width,height:height,position:"relative"}}>
					<img src={src[0]} style={{width:width,height:height,position:"absolute",left:left[0]}}/>
					<img src={src[1]} style={{width:width,height:height,position:"absolute",left:left[1]}}/>
					<img src={src[2]} style={{width:width,height:height,position:"absolute",left:left[2]}}/>
				</div>
		       );
	}
	componentDidMount(){//在加载组件的时候获取数据是一个通常的做法，组件的自带触发事件，与html标签的加载事件类似！
		setInterval(()=>{
				let left = this.state.left.map(function(pos){pos =  (pos+this.percent)%(3*this.props.width);if(pos > 2*this.props.width){pos-=3*this.props.width;}return pos;}.bind(this))
				this.setState({left:left});
				},200);
	}
}

render(<Anima width="300" height="200" src='["1.jpg","2.jpg","3.jpg"]' />,document.body);
