import React, { Component } from 'react'
import Home from "./home"
import List from "./list"
import Cart from "./cart"
import Mine from "./mine"
import Note from "./note"
import Search from "./search"
import Login from "./login"
import Reg from "./reg"
import Detail from "./detail"
import '../css/home.css';
import {HomeOutlined,UnorderedListOutlined,MessageOutlined,
    ShoppingCartOutlined,UserDeleteOutlined} from '@ant-design/icons';
import {Route,NavLink,Redirect,Switch,BrowserRouter} from "react-router-dom"
export default class Tabdar extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }
   
//     componentDidMount(){  //监听路由的变化
//         console.log(window.location.pathname);
//         if(window.location.pathname==="/search"){
//             this.setState({
//             visible:false
//             })
//         }else{
//             this.setState({
//                 visible:true
//             })
//         }
//    }

    render() {
        return (
            <div>
                <BrowserRouter>
                  <nav style={{"display":this.state.visible?'':"none"}}>
                  <NavLink to="/home"><HomeOutlined />首页</NavLink>
                  <NavLink to="/list"><UnorderedListOutlined />列表</NavLink>
                  <NavLink to="/note"><MessageOutlined />消息</NavLink>
                  <NavLink to="/cart"><ShoppingCartOutlined />购物车</NavLink>
                  <NavLink to="/mine"><UserDeleteOutlined />我的</NavLink>
                  </nav>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/note" component={Note} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/search" component={Search} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />

                    <Route path="/detail" component={Detail} />
                    <Redirect from="/" to="/home" exact />
                  </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
