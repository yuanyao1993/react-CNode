import React, { Component } from 'react'
import { Card } from 'antd';

import data from './data'

export default class Book extends Component {
    render () {
        return (
            <div className="wrap">
                {
                    data.map((item, index) =>{
                        return <Card
                            type="inner"
                            title={item.title}
                            key={index}
                        >
                            <div dangerouslySetInnerHTML = {{ __html: item.content }} />
                        </Card>
                    })
                }
                
            </div>
        );
    }
}