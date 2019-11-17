import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Dropdown, Button, Icon } from 'antd';
import NavBar from './navBar'

const { Header, Footer, Sider, Content } = Layout;

export default class Head extends Component{
    render() {
        return (
            <Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider className="headerDivider" type="vertical" />
                        <NavBar
                            mode="horizontal"
                            theme="light"
                            id="nav"
                        >
                        </NavBar>
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                    <Dropdown 
                        overlay={
                            <NavBar
                                mode="vertical"
                                theme="light"
                                id="xsNav"
                            >
                            </NavBar>
                        }
                        trigger={["click","touchend"]}
                        placement="topRight"
                    >
                       <Button><Icon type="bars" /></Button>
                    </Dropdown>
                    </Col>
                </Row>
            </Header>
        )
    }
}``