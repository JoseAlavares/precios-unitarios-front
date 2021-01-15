import React from 'react'
import { Menu , Layout} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          className="menu"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
            <Menu.Item key="1">agregar</Menu.Item>
            <Menu.Item key="2">editar</Menu.Item>
            <Menu.Item key="3">consultar</Menu.Item>
            <Menu.Item key="4">eliminar</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Catalogos">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>          
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar