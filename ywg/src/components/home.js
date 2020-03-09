import React, { Component } from 'react'
import axios from "axios"
// import {Route,NavLink,Redirect,Switch} from "react-router-dom"
import { Select } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
const { Option } = Select;
export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
            sortList:[
                {
                    imgSrc:"https://img1.yiwugou.com/icon_index_qgkc.png?v=2",
                    desc:"求购与库存"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_zhuanzu.png?v=2",
                    desc:"转租转让"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_tsbg.png?v=3",
                    desc:"投诉处理"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_map.png?v=3",
                    desc:"地图"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_bbs.png?v=3",
                    desc:"论坛"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_xsms.png?v=3",
                    desc:"限时秒杀"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_qingcang.png?v=3",
                    desc:"尾货清仓"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_help.png?v=3",
                    desc:"帮助中心"
                },{
                    imgSrc:"https://img1.yiwugou.com/icon_index_english.png?v=2",
                    desc:"English"
                }
                
            ],
            fenquList:[
                "https://static.yiwugou.com/mobile/assets/yiqu.png",
                "https://static.yiwugou.com/mobile/assets/yiqudong.png",
                "https://static.yiwugou.com/mobile/assets/erqu.png",
                "https://static.yiwugou.com/mobile/assets/sanqu.png",
                "https://static.yiwugou.com/mobile/assets/siqu.png",
                "https://static.yiwugou.com/mobile/assets/wuqu.png",
                "https://static.yiwugou.com/mobile/assets/huangyuan.png",
                "https://static.yiwugou.com/mobile/assets/shengchanziliao.png",
                "https://wechat-yiwugou.oss-cn-hangzhou.aliyuncs.com/assets/images/chengshiguan.png",
                "https://wechat-yiwugou.oss-cn-hangzhou.aliyuncs.com/assets/images/index_contury.png"
            ],
            list:[]

        }
    }
    // 跳转搜索页
    toSearch=()=>{
        this.props.history.push("./search")
    }
    // 跳转详情页
    toDetail(data){
        this.props.history.push({pathname:"./detail",query:{data}})
    }
    // 请求数据
    componentDidMount(){        
        axios.get("http://47.104.151.138:2020/goods/homelist").then((res)=>{
            if(res.status===200){
                this.setState({
                    list:res.data
                })
            }
        })
    }
    render() {
        var {sortList,fenquList,list} = this.state;
        return (
            <div>
                {/* 头部 */}
                <div className="hometop">
                    <Select className="selectBox" defaultValue="lucy" bordered="false" style={{ width:70,background:"#ff6600 !important" }}>
                      <Option value="jack">义乌</Option>
                      <Option value="lucy">成都</Option>
                    </Select>
                    <div className="searchBox" onClick={this.toSearch}>
                        请输入搜索内容<SearchOutlined />
                    </div>
                </div>
                {/* 分类 */}
                <div className="sortBox" style={{height:"150px"}}>
                    <ul>
                        {
                            sortList.map((ele)=>{
                                return <li key={ele.imgSrc}><img src={ele.imgSrc} alt=""/>{ele.desc}</li>
                            })
                        }
                    </ul>
                </div>
                {/* 分区 */}
                <div className="markets">
                    <ul>
                        {
                            fenquList.map(ele=>{
                                return <li key={ele}><img src={ele} alt="" /></li>
                            })
                        }
                    </ul>
                </div>
                {/* 广告图 */}
                <img style={{width:"100%", height:"166px"}} src="https://img1.yiwugou.com/ywgimages/zt/20200212/images/sjbanner2.jpg" alt="" />
                {/* 列表 */}
                <div className="homeList" >
                    <ul>
                        {
                            list.map(ele=>{
                                return  <li key={ele.id} onClick={this.toDetail.bind(this,ele)}>
                                            <img src={ele.imgSrc} alt="" />
                                            <div className="listRight">
                                                <p className="desc">{ele.title}</p>
                                                <p className="price" >￥{ele.startPrice||"价格与商家联系"}</p>
                                                <p className="atLeast" >{ele.startNum}</p>
                                                <p className="belong" >{ele.shopName}</p>
                                            </div>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            
        )
    }
}
