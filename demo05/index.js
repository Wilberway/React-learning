import React,{Component} from "react";
import {render} from 'react-dom';

class NetWork extends Component{
	constructor(props){
		super(props);
		this.state = {source:""};
	}
	render(){
		let source = this.state.source;
		return (
				<div>{source}</div>
		       )
	}
	componentDidMount(){//在加载组件的时候获取数据是一个通常的做法，组件的自带触发事件，与html标签的加载事件类似！
		$.get("http://baidu.com",function(result){//react与其它框架是并存的,这里是有跨域问题存在的，要看到效果需要对应的web服务器的支持
					console.log(result);
					if(this.isMounted()){
						this.setState({source:result});//从网络中获取数据，然后设置初始化属性
					}
				}.bind(this));//bind方法在这里绑定this对象指向当前上下文this对象
	}
}

render(<NetWork/>,document.body);
