/*
 * @Author: c37csq
 * @Date: 2021-12-31 17:21:59
 * @LastEditTime: 2022-01-07 17:04:15
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\pages\newsDetail.tsx
 */
import { BackTop } from 'antd';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LayoutProps } from '../types';

const NewsDetail1 = dynamic(import('../components/newsDetail1'));

const NewsDetail2 = dynamic(import('../components/newsDetail2'));

const NewsDetail3 = dynamic(import('../components/newsDetail3'));

const NewsDetail = (props: LayoutProps) => {
  const [urlId, setUrlId] = useState<string | string[] | undefined>(undefined);

  const router = useRouter();

  const { changeHeaderStyle, setMenuActive } = props;

  const id = router.query.id;

  const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'development';

  const url = isDev ? '/news' : '/news.html';

  useEffect(() => {
    setUrlId(id);
  }, [id]);

  useEffect(() => {
    changeHeaderStyle('true');
    setMenuActive('newscenter');
  }, []);

  return (
    <div>
      <Head>
        <title>新闻详情</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
        <meta
          name="Description"
          content="宁波链仓科跨境电子商务有限公司是链仓科技旗下的全资子公司,是一家技术为基础的出口跨境品牌电商公司，公司通过Amazon、Walmart、eBay 、Wish等第三方电商平台和垂直品类自营网站向全球消费者销售高品质，独具特色和个性化的产品，包括家具，户外用品，汽车配件，日用品等。同时，公司拥有自己的IT团队，自主开发了完善的跨境仓储物流体系，可以向第三方提供物流服务。公司成立以来，一直秉承“巧手成就卓越，匠心创造非凡”的使命，为满足全球消费者对高品质、多样化，时尚的产品需求，在产品生产端、销售端和供应端持续耕耘，目前已逐步打磨出集产品开发设计，市场运营、供应链管理整合等于一体的能力。在产品段，公司始终坚持高质量的匠心精神，在销售端，公司跨平台以及跨区域的电商网络，建设品牌的多品类延伸能力；在供应端，公司拥有优质的供应商体系、全球仓储物流布局，构建高效供应能力。"
        />
        <meta name="Keywords" content="关于链仓科,产品展示,系统建设,新闻中心,合作公司,联系我们" />
      </Head>
      <NewsDetail1 id={urlId} url={url} />
      <NewsDetail2 id={urlId} url={url} />
      <NewsDetail3 id={urlId} url={url} />
      <BackTop />
    </div>
  );
};

export default NewsDetail;
