import { Drawer } from 'antd';
import { useContext } from 'react';
import { MenuItem } from '../types';
import { HeaderContext } from './layout';
import styles from '../styles/MenuDrawer.module.css';

interface IProp {
  visible: boolean;
  activeKey: string;
  closeMenuDrawer: () => void;
  headerActive: boolean;
  handleMenuClick: (item: MenuItem) => void;
}

const MenuDrawer = (props: IProp) => {
  const { visible, closeMenuDrawer, headerActive, handleMenuClick, activeKey } = props;

  const { menuList } = useContext(HeaderContext);

  return (
    <Drawer
      className={`drawer_menu ${headerActive ? `${styles.active}` : `${styles.noActive}`}`}
      drawerStyle={{ backgroundColor: `${headerActive ? '#f4f4f4' : '#191C32'}`, transition: 'background 0.5s' }}
      onClose={closeMenuDrawer}
      width={'15rem'}
      closable={false}
      visible={visible}
      placement="right"
    >
      <div id="menu_drawer">
        {menuList.map((item) => {
          return (
            <div
              className={`${styles.menu_drawer_item} ${activeKey === item.key ? `${styles.active_item}` : ''}`}
              key={item.key}
              onClick={() => handleMenuClick(item)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
