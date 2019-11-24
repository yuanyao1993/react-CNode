import React, { Component } from 'react'
import { Row, Col } from 'antd';

import IndexMenu from "./indexMenu";
import IndexList from "./list";

export default class Index extends Component {
    render() {
        let tab = this.props.match.params.id
        return (
            <div>
                <Row className="wrap">
                    <Col
                        xs={0}
                        md={6}
                        className="indexSider"
                    >
                        <IndexMenu id="indexMenu" mode="vertical"></IndexMenu>
                    </Col>
                    <Col 
                        xs={24}
                        md={0}
                    >
                        <IndexMenu id="indexXsMenu" mode="horizontal"></IndexMenu>
                    </Col>
                    <Col
                        xs={24}
                        md={18}
                        className="indexList"
                    >
                        <IndexList tab={tab}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
