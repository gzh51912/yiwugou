import React, { Component } from 'react'
import "../css/list.css"
import {LeftOutlined,SearchOutlined} from '@ant-design/icons'
import { Input } from 'antd';
import axios from "axios"
export default class list extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftData:["宠物用品", "机械",
             "建材", "汽车用品", "数码", "个护",
              "母婴", "帽类", "办公文教", "喜庆用品",
               "厨卫", "家电", "百货", "五金", "箱包",
                "鞋靴", "内衣", "袜类", "服饰", "辅料",
                 "体育用品", "工艺品", "饰品", "配饰", "玩具"],
            rightData:[]
        }
    }
    componentDidMount(){
        // 组件加载
        // this.getData()
        console.log(this.state.leftData);
        // 请求第一页数据
        // axios.get("https://wap.yiwugo.com/categories?uppertype=939").then(res=>{
        //     console.log(res);
            
        // })
        
    }
    componentWillMount(){
        this.changeData(1)
    }

    // 切换数据请求
    changeData=(index)=>{
        // console.log(index);
        axios.post(`http://47.104.151.138:2020/goods/getlist?index=${index+1}`).then(res=>{
            console.log(res);
            this.setState({
                rightData:res.data
            })
        })
        
    }
    
    render() {
        // console.log(this.props)
        console.log(this.state.rightData);
        let {leftData,rightData} = this.state;
        return (
            <div>
                <div

                    className="site-page-header"
                    style={{background:"#ff6600",height:"50px"}}>
                        <LeftOutlined onClick={this.back} style={{color:"#fff"}}/>
                        <Input size="small" prefix={<SearchOutlined style={{color:"#d9d9d9"}} />} placeholder="请输入关键字" />
                        <span>搜索</span>
                </div>
                <div className="list">
                        <div className="left">
                            {
                                leftData.map((ele,index)=>{
                                return <a key={ele} onClick={this.changeData.bind(this,index)}>{ele}</a>
                                })
                            }
                        </div>
                        <div className="right">
                            <ul>
                                {
                                    rightData.map(ele=>{
                                        return <li><img src={ele.imgSrc} alt="" /><p>{ele.title}</p></li>
                                    })
                                }
                                {/* <li><img src="https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg?x-oss-process=image/resize,w_55,h_55" alt="" /><p>我的姐姐我</p></li>
                                <li><img src="https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg?x-oss-process=image/resize,w_55,h_55" alt="" /><p>我的姐姐我</p></li>
                                <li><img src="https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg?x-oss-process=image/resize,w_55,h_55" alt="" /><p>我的姐姐我</p></li>
                                <li><img src="https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg?x-oss-process=image/resize,w_55,h_55" alt="" /><p>我的姐姐我</p></li>
                                <li><img src="https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg?x-oss-process=image/resize,w_55,h_55" alt="" /><p>我的姐姐我</p></li>
                                <li><img src="https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg?x-oss-process=image/resize,w_55,h_55" alt="" /><p>我的姐姐我</p></li> */}
                            </ul>

                            {/* {
                                rightData.map((ele,index)=>{
                                    return <div key={index} className="itemBox">
                                                {
                                                     ele.map((ele)=>{
                                                        return <div key={ele.classifyId} className="item">
                                                                    
                                                                </div>
                                                                // <img src={}></img>
                                                    })
                                                }
                                           </div>
                                    console.log(ele);
                                   
                                })
                            } */}
                        </div>
                    
                    
                </div>
            </div>
           
        )
    }
}
