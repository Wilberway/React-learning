import React,{Component} from "react";
import {render} from 'react-dom';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Anima extends Component{
	constructor(props){
		super(props);
		this.i = 0;this.src = JSON.parse(this.props.src);this.imgs = [];this.buttons = [];
		this.src.forEach((v,i)=>{
				this.imgs.push(<img src={v} key={v} style={{width:this.props.width,height:this.props.height,position:"absolute"}}/>);
				this.buttons.push(<div key={i} onClick={this.click.bind(this,i)} style={{position:"absolute",zIndex:10,height:10,width:10,borderRadius:10,border:"1px solid #444",bottom:20,right:i*20+10}} ></div>);

				});
		this.state = {img:this.imgs[0]};
	}
	render(){
		return(
				<div style={{overflow:"hidden",width:this.props.width,height:this.props.height,position:"relative"}}>
					{this.buttons}
					<div style={{zIndex:9,position:"absolute"}}>
					{this.state.imgNow}
					</div>
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={this.props.duration} transitionLeaveTimeout={this.props.duration}>
						{this.state.img}
					</ReactCSSTransitionGroup>
				</div>
		       );
	}
	componentDidMount(){//在加载组件的时候获取数据是一个通常的做法，组件的自带触发事件，与html标签的加载事件类似！
		this.timer = setInterval(()=>{
				this.i++;
				this.setState({img:this.imgs[this.i%3]});
				},this.props.duration);
	}
	click(i){
		clearInterval(this.timer);
		this.i = i;
		this.setState({imgNow:this.imgs[this.i%3],img:this.imgs[this.i%3]});
		this.timer = setInterval(()=>{
				this.setState({img:this.imgs[this.i%3],imgNow:''});
				this.i++;
				},this.props.duration);
	}
}

render(<Anima width={300} height={200} src='["1.jpg","2.jpg","3.jpg"]' duration={2000} />,document.body);
