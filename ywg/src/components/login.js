import React, { Component } from 'react'
import {LeftOutlined,EllipsisOutlined } from '@ant-design/icons'
import { Input,Button,message } from 'antd';
import axios from 'axios'
export default class login extends Component {
    constructor(props){
        super(props);
        this.state={
            disabled : true,
            phone : false,
            pwd : false,
            phoneValue:"",
            pwdValue:""
        }
    }
    // 手机号验证
    phoneChange=(e)=>{
        let flag = /^1[3456789]\d{9}$/.test(e.target.value)
        if(flag){
            message.success('手机号验证通过');
            this.setState({
                phone : true,
                phoneValue : e.target.value
            })
            this.bothTrue()
        }        
        if(!flag && e.target.value.length===11) message.error('手机号格式错误');
    }
    // 密码验证
    passwordChange=(e)=>{
        let flag = e.target.value.length>=6 && e.target.value.length<=20
        if(flag){
            this.setState({
                pwd : true,
                pwdValue : e.target.value
            })
            this.bothTrue()
        }
    }
    // 验证都统过按钮变为可用状态
    bothTrue=()=>{
        if(this.state.phone && this.state.pwd){
            this.setState({
                disabled : false,
            })
        }
    }
    // 点击登录
    login=()=>{
        let {phoneValue,pwdValue} = this.state
        console.log(phoneValue,pwdValue);

        axios.post("http://47.104.151.138:2020/user/login",{phoneValue,pwdValue}).then((res)=>{
            console.log(res);
            
            if(res.status===200){
                if(res.data.status=="success"){
                    message.success('登录成功');
                    localStorage.setItem("username",res.data.phoneValue)
                    this.props.history.push({pathname:"./mine",query:{localStorage}})
                };
                if(res.data.status=="incompelete")message.warning('用户名或密码不能为空');
                if(res.data.status=="error")message.error('登录失败,用户不存在');
            }
            console.log(res);

        }).catch((err) => {console.log(err);
        })
    }
    toReg=()=>{
        this.props.history.push("./reg")
    }

    render() {
        return (
            <div>
                <div
                    className="site-page-header"
                    style={{background:"#ff6600",height:"50px"}}>
                        <LeftOutlined onClick={this.back} style={{color:"#fff"}}/>
                        <p style={{width:"300px",margin:"auto 0","fontSize":"20px"}}>用户登录</p>
                        <EllipsisOutlined style={{"fontSize":"20px"}}/>
                </div>
                <div className="example-input">
                    <Input maxLength="11" size="large" onChange={this.phoneChange} placeholder="请输入手机号" prefix="手机号" />
                    <Input maxLength="20" size="large" onChange={this.passwordChange} placeholder="请输入6-20位密码" type="password" prefix="密码" />
                  </div>
                  
                  <p>注册即视为同意<span style={{color:"#586c94"}}>《义乌购用户注册协议》</span></p>
                  <Button  type="primary" block onClick={this.login}>登录 </Button>
                  <p onClick={this.toReg}>未注册，去注册</p>
            </div>
        )
    }
}
