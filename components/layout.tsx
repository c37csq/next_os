/*
 * @Author: c37csq
 * @Date: 2021-12-27 10:04:46
 * @LastEditTime: 2022-01-05 15:56:09
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\pages\components\layout.tsx
 */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import Header from './header';
import Footer from './footer';
import Touch from './touch';
import { useRouter } from 'next/router';
import { MenuItem } from '../types';
import { calcHeight } from '../utils/tool';
import React from 'react';
import Head from 'next/head';

export const HeaderContext = React.createContext<{ menuList: MenuItem[] }>({
  menuList: [],
});

const Layout = ({ children }: any, ref: any) => {
  const headerRef = useRef<any>();

  const router = useRouter();

  const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'development';

  // 当前路由
  const route = router.pathname;

  const menuList: MenuItem[] = [
    {
      index: 0,
      key: 'home',
      class: 'indexDiv',
      id: 'indexDiv',
      title: '首页',
      url: '/',
    },
    {
      index: 1,
      key: 'about',
      class: 'aboutDiv',
      id: 'aboutDiv',
      title: '关于链仓科',
      url: '/',
    },
    {
      index: 2,
      key: 'brand',
      class: 'brandDiv',
      id: 'brandDiv',
      title: '产品展示',
      url: isDev ? '/product' : '/product.html',
    },
    {
      index: 3,
      key: 'system',
      class: 'systemDiv',
      id: 'systemDiv',
      title: '系统建设',
      url: '/',
    },
    {
      index: 4,
      key: 'newscenter',
      class: 'newsDiv',
      id: 'newsDiv',
      title: '新闻中心',
      url: isDev ? '/news' : '/news.html',
    },
    {
      index: 5,
      key: 'company',
      class: 'companyDiv',
      id: 'companyDiv',
      title: '合作公司',
      url: '/',
    },
    {
      index: 6,
      key: 'touch',
      class: 'touchDiv',
      id: 'touchDiv',
      title: '联系我们',
      url: '/',
    },
  ];

  // 改变头部主题
  const changeHeaderStyle = (key?: string) => {
    if (key) {
      if (headerRef.current) {
        headerRef.current!.setActive(Boolean(key));
      }
    } else {
      if (route === '/') {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop >= 100) {
          if (headerRef.current) {
            headerRef.current!.setActive(true);
          }
        } else {
          if (headerRef.current) {
            headerRef.current!.setActive(false);
          }
        }
      } else {
        if (headerRef.current) {
          headerRef.current!.setActive(true);
        }
      }
    }
  };

  // 根据计算设置菜单状态
  const setMenuActive = (key?: string) => {
    if (key) {
      if (headerRef.current) {
        headerRef.current!.setMenuActive(key);
      }
      return;
    } else {
      if (route === '/') {
        let list = [];
        for (let i = 0; i < menuList.length; i++) {
          let clientHeight = calcHeight(menuList[i].id);
          list.push(clientHeight);
        }
        const max = Math.max(...list);
        const index = list.findIndex((item) => item === max);
        const activeKey = menuList.find((item) => item.index === index)!.key;
        if (headerRef.current) {
          headerRef.current!.setMenuActive(activeKey);
        }
      }
    }
  };

  useImperativeHandle(ref, () => ({
    changeHeaderStyle: () => changeHeaderStyle(),
    setMenuActive: (key?: string) => setMenuActive(key),
  }));

  return (
    <HeaderContext.Provider value={{ menuList }}>
      <Head>
        <link href="/images/favicon.ico" rel="icon" type="image/x-ico"></link>
      </Head>
      <Header ref={headerRef} />
      <main>{children}</main>
      <Touch />
      <Footer />
    </HeaderContext.Provider>
  );
};

export default forwardRef(Layout);
