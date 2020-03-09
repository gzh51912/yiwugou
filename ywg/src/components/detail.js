import React, { Component } from 'react'
import "../../node_modules/swiper/css/swiper.min.css"
import "../../node_modules/swiper/js/swiper"
import '../css/detail.css'
import { Button } from 'antd'
import axios from "axios"
import {LeftOutlined} from '@ant-design/icons'
export default class detail extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.props.location.query.data);
        this.setState({
            data:this.props.location.query.data
        })
        
        
    }
    addCart(data){
        
        console.log("加入购物车");
        // this.props.history.push({pathname:"./cart",query:{data}})
        // 写入数据库
        axios.post("http://47.104.151.138:2020/goods/addCart",this.state.data).then(res=>{
            console.log(res);
            
        })
    }
    render() {
        let {data} = this.state
        return (
            <div>
                <div className="back"><LeftOutlined /></div>
                     <div className="swiper-container" style={{background:"orange",height: "375px"}}>
                    <img src={data.imgSrc} style={{width:"375px",height: "375px"}} alt=""/>
                        
                    </div>
                    <p>{data.title}</p>
                    <p className="price">{data.price}</p>
                    <div className="extra-con"><div className="stock">供货量 10000pcs</div> <div className="freight"><div className="freight-panel"><span>
    
                    发往浙江 ¥<span>6.00</span></span></div></div></div>
                    <div className="shop-con">
                        <div className="left">
                            <img src="//he.yiwugou.detuyun.com/qjjt/5d3d9191a26de.jpg?x-oss-process=image/resize,w_300,h_300" />
                        </div> 
                        <div className="right">
                            <div className="shop-name">{data.shopName}</div>
                        <div className="shop-address">地址：义乌国际商贸城一区东14门2楼2街102632</div>
                        </div>
                    </div>
                    <Button onClick={this.addCart.bind(this,data)} type="primary" block style={{background:"#f60",border:"none"}}>加入购物车</Button>
                    
            </div>
        )
    }
}
