import React, { Component } from 'react'
import { List, Checkbox, Flex } from 'antd-mobile';
import "../../node_modules/antd-mobile/dist/antd-mobile.css"
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
export default class cart extends Component {
    constructor(props){
        super(props);
        this.state={
            cartList:{}
        }
    }
    allCheck=()=>{
        console.log("全选");
    }
    componentDidMount(){
        // console.log(this.props.location.query.data);
        // this.setState({
        //     cartList:this.props.location.query.data
        // })
        
    }
    render() {
        const {cartList} = this.state
        return (
            <div>
            <List>
               {/* {
               cartList.map(i => ( */}
                 <CheckboxItem style={{height:"82px"}} >
                    <img style={{float:"left",height:"60px",width:"60px"}} src={cartList.imgSrc} alt="" />
                   <div className="right" style={{float:"left"}}>
                        {cartList.title}
                        <p className="price">{cartList.price}</p>
                   </div> 
                 </CheckboxItem>
               {/* ))} */}
            </List>
             <Flex>
                <Flex.Item>
                  <AgreeItem data-seed="logId" onChange={this.allCheck}>
                    全选
                  </AgreeItem>
                </Flex.Item>
              </Flex>
             
            </div>
        )
    }
}
