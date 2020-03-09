import React, { Component } from 'react'
import "../css/mine.css"
export default class mine extends Component {
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
                }
                
            ],
            username:"请登录"
        }
    }
    tologin=()=>{
        this.props.history.push("./login")
    }
    componentDidMount(){
        console.log(localStorage);
        this.setState({
            username:localStorage.username
        })
    }
    logout=(e)=>{
        localStorage.removeItem("username");
        console.log(localStorage);
        this.setState({
            username:"请登录"
        })
    }
    render() {
        let {sortList,username} = this.state
        return (
            <div>
                <div className="topLogo">
                    <div className="left" ><img onClick={this.tologin} src="https://static.yiwugou.com/mobile/assets/app-logo.jpg" alt="" /></div>
                    <div className="right"><p>义乌购</p><p>{username||"请登录"}</p></div>
                </div>
                <div className="sortBox">
                    <ul>
                        {
                            sortList.map((ele)=>{
                                return <li key={ele.imgSrc} style={{width:"25%"}}><img src={ele.imgSrc} alt=""/>{ele.desc}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="btnBox"><div onClick={this.logout} class="btn">退出登陆</div></div>
            </div>
        )
    }
}
