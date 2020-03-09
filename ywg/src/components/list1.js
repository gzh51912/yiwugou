import React, { Component } from 'react'

export default class list1 extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    img:"https://img1.yiwugou.com/i004/2019/11/14/75/3a90dbb78e66fb85a0f581860094d328.jpg",
                    name:"宠物窝"
                },
                {
                    img:"https://img1.yiwugou.com/i004/2019/11/14/93/1f195a710844440c93376e8ab0f5c9cd.jpg",
                    name:"宠物清洁用品"
                },
                {
                    img:"https://img1.yiwugou.com/i004/2019/11/14/80/ff983d03f036af69e8bedcd43fef787e.jpg",
                    name:"宠物服饰"
                },
                {
                    img:"https://img1.yiwugou.com/i004/2019/11/14/99/ca047a029c818b20ecb3f4b5867c9549.jpg",
                    name:"宠物出行用品"
                },
                {
                    img:"https://img1.yiwugou.com/i004/2019/11/14/04/f6b41c2f7d5c8bd4e34ba60335b76b86.jpg",
                    name:"宠物玩具"
                },
                {
                    img:"https://img1.yiwugou.com/i004/2019/11/14/35/4f4215eb94a0681bdeeed9b656a08664.jpg",
                    name:"宠物食品"
                }
            ]
        }
    }
    render() {
         let {data} = this.state
        return (
           
            <div>
                {
                    data.map(ele=>{
                        return <li key={ele.name}><img src={ele.img} alt="" /><p>{ele.name}</p></li>
                        
                    })
                }
            </div>
        )
    }
}
