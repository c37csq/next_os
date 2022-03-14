/*
 * @Author: c37csq
 * @Date: 2022-01-05 17:50:54
 * @LastEditTime: 2022-01-10 09:00:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\pages\index.tsx
 */
import { BackTop } from 'antd';
import { useEffect } from 'react';
import Head from 'next/head';
import Banner from '../components/banner';
import About from '../components/about';
import Product from '../components/product';
import System from '../components/system';
import Newscenter from '../components/newscenter';
import Company from '../components/company';
import { LayoutProps } from '../types';
import { debounce } from '../utils/tool';

const Home = (props: LayoutProps) => {
  const { changeHeaderStyle, setMenuActive } = props;

  const setDebounceActive = () => {
    return debounce(setMenuActive) as any;
  };

  useEffect(() => {
    setMenuActive();
    changeHeaderStyle();
    window.addEventListener('scroll', () => changeHeaderStyle(), true);
    window.addEventListener('scroll', setDebounceActive(), true);

    return () => {
      window.removeEventListener('scroll', () => changeHeaderStyle(), true);
      window.removeEventListener('scroll', setDebounceActive(), true);
    };
  }, []);

  return (
    <div id="indexPage">
      <Head>
        <title>链仓官网首页</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
        <meta
          name="Description"
          content="宁波链仓科跨境电子商务有限公司是链仓科技旗下的全资子公司,是一家技术为基础的出口跨境品牌电商公司，公司通过Amazon、Walmart、eBay 、Wish等第三方电商平台和垂直品类自营网站向全球消费者销售高品质，独具特色和个性化的产品，包括家具，户外用品，汽车配件，日用品等。同时，公司拥有自己的IT团队，自主开发了完善的跨境仓储物流体系，可以向第三方提供物流服务。公司成立以来，一直秉承“巧手成就卓越，匠心创造非凡”的使命，为满足全球消费者对高品质、多样化，时尚的产品需求，在产品生产端、销售端和供应端持续耕耘，目前已逐步打磨出集产品开发设计，市场运营、供应链管理整合等于一体的能力。在产品段，公司始终坚持高质量的匠心精神，在销售端，公司跨平台以及跨区域的电商网络，建设品牌的多品类延伸能力；在供应端，公司拥有优质的供应商体系、全球仓储物流布局，构建高效供应能力。"
        />
        <meta name="Keywords" content="关于链仓科,产品展示,系统建设,新闻中心,合作公司,联系我们" />
      </Head>
      <Banner />
      <About />
      <Product />
      <System />
      <Newscenter />
      <Company />
      <BackTop />
    </div>
  );
};

export default Home;
