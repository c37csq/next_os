/*
 * @Author: c37csq
 * @Date: 2022-01-05 17:50:54
 * @LastEditTime: 2022-01-07 17:04:43
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\pages\_app.tsx
 */
import '../styles/global.css';
import '../styles/antd.custom.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import 'windi.css';
import 'antd/dist/antd.css';
import { useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const layoutRef = useRef<any>();

  // 改变头部
  const changeHeader = (key?: string) => {
    if (layoutRef.current) {
      layoutRef.current.changeHeaderStyle(key);
    }
  };

  // 设置菜单状态
  const setMenu = (key?: string) => {
    if (layoutRef.current) {
      layoutRef.current.setMenuActive(key);
    }
  };

  return (
    <Layout ref={layoutRef}>
      <Component
        setMenuActive={(key?: string) => setMenu(key)}
        changeHeaderStyle={(key?: string) => changeHeader(key)}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
