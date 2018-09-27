import React, { Component } from 'react';
import './App.css';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import { Layout, Menu, Breadcrumb, Icon,Table } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'xing',
  dataIndex: 'sex',
  key: 'sex',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];



class App extends Component {

  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    var url = "http://localhost:3000/list.json"
    fetch(url).then((res) => {
      return res.json()
    }).then((res) => {
      this.setState({
        list: res
      })
    })
  }

  idx() {
    console.log('index')
    document.getElementById("index").style.display = "block"
    document.getElementById("list").style.display = "none"
  }
  list() {
    document.getElementById("index").style.display = "none"
    document.getElementById("list").style.display = "block"
  }

  render() {
    return (
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <Header className="header">
            <div className="logo">
              <img src="http://localhost:3000/123.png" alt="" />
              XXX金融管理中心
          </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', float: "right" }}
            >
              <Menu.Item key="1">管理</Menu.Item>
              <Menu.Item key="2">消息</Menu.Item>
              <Menu.Item key="3">我的</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              {/* <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />首页</span>}>
                  <Menu.Item key="1">首页</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu> */}
              <div style={{ width: 200 }}>
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
                >
                  <Menu.Item key="1" onClick={this.idx.bind(this)}>
                    <Icon type="pie-chart" />
                    <span>首页</span>
                  </Menu.Item>
                  <Menu.Item key="2" onClick={this.list.bind(this)}>
                    <Icon type="desktop" />
                    <span>用户列表</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>信息列表</span>
                  </Menu.Item>
                  <SubMenu key="sub1" title={<span><Icon type="mail" /><span>信息管理</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="calendar" /><span>资金管理</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="wallet" /><span>投资管理</span></span>}>
                    <Menu.Item key="11">Option 9</Menu.Item>
                    <Menu.Item key="12">Option 10</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub4" title={<span><Icon type="book" /><span>金融文章</span></span>}>
                    <Menu.Item key="11">Option 9</Menu.Item>
                    <Menu.Item key="12">Option 10</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub5" title={<span><Icon type="bar-chart" /><span>资金数据</span></span>}>
                    <Menu.Item key="11">Option 9</Menu.Item>
                    <Menu.Item key="12">Option 10</Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <div id="index" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ flex: "1", display: "flex" }}>
                    <div id="index1">
                    </div>
                    <div id="index2" >
                    </div>
                  </div>
                  <div style={{ width: "100%", height: "200px", display: "flex" }}>
                    <div id="pie1">
                    </div>
                    <div id="pie2">
                    </div>
                    <div id="pie3">
                    </div>
                  </div>
                </div>

                <div id="list" style={{ height: "100%" }}>
                    <Table dataSource={this.state.list} columns={columns} />
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
