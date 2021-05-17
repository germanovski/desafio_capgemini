import React from 'react';
import { Layout as LayoutAntd, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Layout(props) {

    const { Header, Content, Footer } = LayoutAntd;

    return (
        <LayoutAntd className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <span>Anuncios</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span>Relatórios</span>
                        <Link to="/relatorios" />
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>DivultaTudo - 2020</Footer>
        </LayoutAntd>
    )
}