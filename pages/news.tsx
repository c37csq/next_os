import styles from '../styles/News.module.css';
import commonStyles from '../styles/Common.module.css';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { LayoutProps } from '../types';
import { Tooltip } from 'antd';
import Link from 'next/link';

const News = (props: LayoutProps) => {
  const { changeHeaderStyle, setMenuActive } = props;

  const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'development';

  const url = isDev ? '/newsDetail' : '/newsDetail.html';

  useEffect(() => {
    changeHeaderStyle('true');
    setMenuActive('newscenter');
  }, []);

  return (
    <div id="newscenter" className={styles.newsContainer}>
      <Head>
        <title>新闻中心</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
        <meta
          name="Description"
          content="“把握趋势 引领未来”2021-2022定制家具设计流行趋势发布会合肥站，于6月16日在中国合肥洲际酒店盛大举行，发布会现场星光熠熠，共同见证流行趋势的发布。本次活动是由北京富胜家居用品有限公司、安徽美诺宝家居用品有限公司联合主办，合肥论坛、家居安徽共同承办。走过了2020疫情造成的营商环境困难，2021年上半年家居市场的格局悄悄发生变化。在这半年里，传统家居经营模式日渐凸显颓势，大家居、全屋定制、整装、智能家居、互联网新零售异常火热，行业发展迅速，经营者的思维方式也逐步有了新的转变。与去年相比，全国建材家居景气指数(BHI)持续攀升，消费需求旺盛当前，境外疫情仍在持续蔓延，国内部分地区相继出现聚集性关联疫情，此次德尔塔变异毒株传染强，传播快，轨迹复杂，使得“外防输入、内防反弹”的风险进一步加大。根据省市疫情防控的要求，结合公司实际，就从严从实抓好近期公司疫情防控作如下要求：一、继续强化防控意识，要高度重视，毫不松懈持续抓好疫"
        />
        <meta
          name="Keywords"
          content="把握趋势 引领未来”定制家具设计流行趋势发布会圆满成功！,2021年上半年家居市场六大现象盘点,疫情形势严峻 常态化不松懈"
        />
      </Head>
      <div className={commonStyles.imgWrapper}>
        <img style={{ width: '100%' }} src="/images/news_img.png" alt="新闻中心" />
      </div>
      <div className={styles.news_container}>
        <div className={styles.news_content}>
          <p className={`${styles.bread} ${commonStyles.bread}`}>
            <Link href="/">
              <a className={commonStyles.bread_a}>首页&nbsp;</a>
            </Link>
            &gt;&nbsp;
            <span>新闻中心</span>
          </p>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.left}>
                <Image width={180} height={160} src="/images/news1.jpg" alt="新闻一" />
              </div>
              <div className={styles.right}>
                <Tooltip title="“把握趋势 引领未来”定制家具设计流行趋势发布会圆满成功！">
                  <div className={`${styles.right_title} ${commonStyles.one_text_overflow}`}>
                    “把握趋势 引领未来”定制家具设计流行趋势发布会圆满成功！
                  </div>
                </Tooltip>
                <Tooltip
                  title="“把握趋势
                    引领未来”2021-2022定制家具设计流行趋势发布会合肥站，于6月16日在中国合肥洲际酒店盛大举行，发布会现场星光熠熠，共同见证流行趋势的发布。本次活动是由北京富胜家居用品有限公司、安徽美诺宝家居用品有限公司联合主办，合肥论坛、家居安徽共同承办。"
                >
                  <div className={`${styles.right_msg} ${commonStyles.two_text_overflow}`}>
                    “把握趋势
                    引领未来”2021-2022定制家具设计流行趋势发布会合肥站，于6月16日在中国合肥洲际酒店盛大举行，发布会现场星光熠熠，共同见证流行趋势的发布。本次活动是由北京富胜家居用品有限公司、安徽美诺宝家居用品有限公司联合主办，合肥论坛、家居安徽共同承办。
                  </div>
                </Tooltip>
                <Link href={`${url}?id=1`} passHref>
                  <div className={commonStyles.btn_bg}></div>
                </Link>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.left}>
                <Image width={180} height={160} src="/images/news2.jpg" alt="新闻二" />
              </div>
              <div className={styles.right}>
                <Tooltip title="2021年上半年家居市场六大现象盘点">
                  <div className={`${styles.right_title} ${commonStyles.one_text_overflow}`}>
                    2021年上半年家居市场六大现象盘点
                  </div>
                </Tooltip>
                <Tooltip title="走过了2020疫情造成的营商环境困难，2021年上半年家居市场的格局悄悄发生变化。在这半年里，传统家居经营模式日渐凸显颓势，大家居、全屋定制、整装、智能家居、互联网新零售异常火热，行业发展迅速，经营者的思维方式也逐步有了新的转变。与去年相比，全国建材家居景气指数(BHI)持续攀升，消费需求旺盛…">
                  <div className={`${styles.right_msg} ${commonStyles.two_text_overflow}`}>
                    走过了2020疫情造成的营商环境困难，2021年上半年家居市场的格局悄悄发生变化。在这半年里，传统家居经营模式日渐凸显颓势，大家居、全屋定制、整装、智能家居、互联网新零售异常火热，行业发展迅速，经营者的思维方式也逐步有了新的转变。与去年相比，全国建材家居景气指数(BHI)持续攀升，消费需求旺盛…
                  </div>
                </Tooltip>
                <Link href={`${url}?id=2`} passHref>
                  <div className={commonStyles.btn_bg}></div>
                </Link>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.left}>
                <Image width={180} height={160} src="/images/news3.jpg" alt="新闻三" />
              </div>
              <div className={styles.right}>
                <Tooltip title="疫情形势严峻 常态化不松懈">
                  <div className={`${styles.right_title} ${commonStyles.one_text_overflow}`}>
                    疫情形势严峻 常态化不松懈
                  </div>
                </Tooltip>
                <Tooltip title="当前，境外疫情仍在持续蔓延，国内部分地区相继出现聚集性关联疫情，此次德尔塔变异毒株传染强，传播快，轨迹复杂，使得“外防输入、内防反弹”的风险进一步加大。根据省市疫情防控的要求，结合公司实际，就从严从实抓好近期公司疫情防控作如下要求：一、继续强化防控意识，要高度重视，毫不松懈持续抓好疫…">
                  <div className={`${styles.right_msg} ${commonStyles.two_text_overflow}`}>
                    当前，境外疫情仍在持续蔓延，国内部分地区相继出现聚集性关联疫情，此次德尔塔变异毒株传染强，传播快，轨迹复杂，使得“外防输入、内防反弹”的风险进一步加大。根据省市疫情防控的要求，结合公司实际，就从严从实抓好近期公司疫情防控作如下要求：一、继续强化防控意识，要高度重视，毫不松懈持续抓好疫…
                  </div>
                </Tooltip>
                <Link href={`${url}?id=3`} passHref>
                  <div className={commonStyles.btn_bg}></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
