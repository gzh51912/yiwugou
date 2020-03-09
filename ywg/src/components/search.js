import React, { Component } from 'react'
import {LeftOutlined,SearchOutlined} from '@ant-design/icons'
import { Input } from 'antd';
import "../css/search.css"
export default class search extends Component {
    constructor(props){
        super(props);
        this.state={
            list:["口罩","一次性口罩","医用口罩","新奇玩具","小家电"]
        }
    }
    componentDidMount(){
        console.log("ee");
        
    }
    changeType=(e)=>{
        e.target.classList.add("active")
    }
    back=()=>{
        this.props.history.push("./home")
    }
    render() {
        var {list} = this.state
        return (
            <div>
                <div
                    className="site-page-header"
                    style={{background:"#ff6600",height:"50px"}}>
                        <LeftOutlined onClick={this.back} style={{color:"#fff"}}/>
                        <Input size="small" prefix={<SearchOutlined style={{color:"#d9d9d9"}} />} placeholder="请输入关键字" />
                        <span>搜索</span>
                </div>
                {/* 搜索类型 */}
                <div className="searchType">
                    <ul>
                        <li onClick={this.changeType} className="active">搜商品</li>
                        <li onClick={this.changeType}>搜商铺</li>
                    </ul>
                </div>
                <div className="hot">
                    <p>热搜</p>
                    <ul>
                        {
                            list.map(ele=>{
                                return <li key={ele}>{ele}</li>
                            })
                        }
                    </ul>
                </div>
                
                <p>历史搜索</p>
            </div>
        )
    }
}
