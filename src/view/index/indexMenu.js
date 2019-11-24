
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';

const subMenu = [
    {
        item: "全部",
        path: "/index/all"
    },
    {
        item: "精华",
        path: "/index/good"
    },
    {
        item: "问答",
        path: "/index/ask"
    },
    {
        item: "分享",
        path: "/index/share"
    },
    {
        item: "招聘",
        path: "/index/job"
    },
    {
        item: "测试",
        path: "/index/dev"
    },
]


export default class indexMenu extends Component {
    render() {
        let { id, mode } = this.props;
        return (
            <Menu
                id={id}
                mode={mode}
            >
                {
                    subMenu.map((item, index) =>{
                        <Menu.Item key={index}>
                           <Link to={item.path}>{item.item}</Link>
                        </Menu.Item>
                    })
                    
                }
            </Menu>
        )
    }
}

