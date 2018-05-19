import React from 'react';
import { Menu } from 'antd';

// const { SubMenu } = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class AntDesignNav extends React.Component {
  state = {
      current: 'mail',
  }
  handleClick = (e) => {
      this.setState({
          current: e.key,
      });
  }
  render() {
      const { isLight, menuCollection } = this.props;

      return (
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              theme={isLight ? 'light' : 'dark'}
          >
              {
                  menuCollection.map(i => (
                      <Menu.Item key={i.id} disabled={i.disabled}>
                          <a href={i.url} target="_blank" rel="noopener noreferrer">
                              <i className={`fa ${i.icon}`} style={{ marginRight: '15px' }} />
                              {
                                  i.title
                              }
                          </a>
                      </Menu.Item>
                  ))
              }
          </Menu>
      );
  }
}
