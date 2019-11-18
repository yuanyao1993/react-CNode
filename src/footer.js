import React , { Component } from 'react';
import { Layout } from 'antd'
const {Footer} = Layout;

export default class Foot extends Component {
    render () {
        return (
            <Footer 
                className="footer" 
                style={{
                    textAlign:"center"
                }}
            >
                COPYRIGHT © 2002-2018 深圳市互联在线信息技术有限公司 ALL RIGHTS RESERVED
            </Footer>
        )
    }
}