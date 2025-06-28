import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content } = Layout;

export const VimuLayout = ({ children }) => {
    const items = Array.from({ length: 15 }).map((_, index) => ({
        key: index + 1,
        label: `nav ${index + 1}`,
    }));

    return (<Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>

        </Header>
        <Content>
            { children }
        </Content>
    </Layout>)
}