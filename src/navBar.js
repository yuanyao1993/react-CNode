import React , { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor (arg) {
        super(arg);
        this.state = {
            now: "1"
        }
    }
    render () {
        let { mode, id, theme} = this.props
        return (
            <Menu
                mode={mode}
                id={id}
                theme={theme}
                selectedKeys={[this.state.now]}
            >
                <Menu.Item key="index">
                    <Link to="/index/all"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="book">
                    <Link to="/book"><Icon type="book" />教程</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about"><Icon type="link" />关于</Link>
                </Menu.Item>
            </Menu>
        );
    }
}