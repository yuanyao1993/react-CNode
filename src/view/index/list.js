import React, { Component } from 'react'
import fetch from "cross-fetch"

export default class IndexList extends Component {
    constructor (arg) {
        super(arg);
        this.state = {
            page: 1
        };

    }
    getData (tab, page) { // 首页列表类型、页数

    }   
    render() {
        return (
            <div>
                {this.props.tab}
            </div>
        )
    }
}
