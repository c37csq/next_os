import styles from '../styles/Header.module.css';
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { MenuItem } from '../types';
import { scrollDistanceSmooth, setScrollTop } from '../utils/tool';
import { HeaderContext } from './layout';
import dynamic from 'next/dynamic';

const Logo = dynamic(import('./logo'));

const MenuDrawer = dynamic(import('./MenuDrawer'));

const Header = (_: {}, ref: any) => {
  const [headerActive, setHeaderActive] = useState<boolean>(false);

  const [visible, setVisible] = useState(false);

  const { menuList } = useContext(HeaderContext);

  const [activeKey, setActiveKey] = useState<string>('');

  const router = useRouter();

  const currentRoute = router.pathname;

  useImperativeHandle(ref, () => ({
    setActive: (val: boolean) => {
      setHeaderActive(val);
    },
    setMenuActive: (val: string) => {
      setActiveKey(val);
      window.sessionStorage.setItem('activeKey', val);
    },
  }));

  // 打开抽屉
  const openMenuDrawer = () => {
    setVisible(true);
  };

  // 关闭抽屉
  const closeMenuDrawer = () => {
    setVisible(false);
  };

  // 点击菜单事件
  const handleMenuClick = (item: MenuItem) => {
    const { key, id, url } = item;
    const fromId = menuList.find((item) => item.key === activeKey).id;
    if (activeKey === key) {
      return;
    }
    if (currentRoute === '/') {
      if (key === 'brand' || key === 'newscenter') {
        router.push(url!);
        return;
      } else {
        scrollDistanceSmooth(fromId, id);
      }
    } else {
      if (key === 'brand' || key === 'newscenter') {
        router.push(url);
        return;
      } else {
        if (key === 'home') {
          setHeaderActive(false);
          setScrollTop();
        }
        router.push(url!);
        if (url === '/') {
          setTimeout(() => {
            scrollDistanceSmooth('indexDiv', id);
          }, 500);
        }
        setActiveKey(key);
        window.sessionStorage.setItem('activeKey', key);
      }
    }
  };

  useEffect(() => {
    const key = window.sessionStorage.getItem('activeKey') || 'home';
    setActiveKey(key);
  }, []);

  return (
    <div className={`${styles.header} ${headerActive ? `${styles.header_active}` : ''}`}>
      <div className={styles.header_content}>
        <Logo active={headerActive} />
        <div className={styles.header_menu_wrapper}>
          <div className={styles.header_menu}>
            {menuList.map((item) => {
              return (
                <div
                  key={item.key}
                  onClick={() => handleMenuClick(item)}
                  className={`${activeKey === item.key ? `${styles.active}` : ''} ${styles.header_menu_item}`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <div onClick={openMenuDrawer} className={styles.header_icon}>
          <MenuOutlined style={{ fontSize: '3rem', color: `${headerActive ? '#000000' : '#FFFFFF'}` }} />
        </div>
        <MenuDrawer
          activeKey={activeKey}
          handleMenuClick={handleMenuClick}
          headerActive={headerActive}
          closeMenuDrawer={closeMenuDrawer}
          visible={visible}
        />
      </div>
    </div>
  );
};

export default forwardRef(Header);
