/*
 * @Author: c37csq
 * @Date: 2021-12-29 13:53:14
 * @LastEditTime: 2022-01-05 16:03:49
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\newscenter.tsx
 */
import styles from '../styles/Newscenter.module.css';
import commonStyles from '../styles/Common.module.css';
import { Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Newscenter = () => {
  const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'development';

  const url = isDev ? '/newsDetail' : '/newsDetail.html';

  return (
    <div id="newsDiv" className={styles.newsDiv}>
      <div className={styles.newsContainer}>
        <div className={styles.newsContent}>
          <div id="newscenter" className={commonStyles.commonTitle}>
            <div className={styles.news_title_bg}></div>
            <div className={commonStyles.common_title_text_blue}>新闻中心</div>
            <div>
              <Image width={26} height={15} src="/images/arrow.png" alt="箭头" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.items}>
              <div className={styles.left}>
                <Image width={180} height={160} src="/images/news1.jpg" alt="新闻一" />
              </div>
              <div className={styles.right}>
                <Tooltip title="“把握趋势 引领未来”定制家具设计流行趋势发布会圆满成功！">
                  <div className={`${styles.news_title} ${commonStyles.one_text_overflow}`}>
                    “把握趋势 引领未来”定制家具设计流行趋势发布会圆满成功！
                  </div>
                </Tooltip>
                <div className={styles.title_style}></div>
                <Tooltip title="“把握趋势 引领未来”2021-2022定制家具设计流行趋势发布会合肥站，于6月16日在中国合肥洲际酒店盛大举行，发布会现场星光熠熠，共同见证流行趋势的发布。本次活动是由北京富胜家居用品有限公司、安徽美诺宝家居用品有限公司联">
                  <div className={`${styles.news_msg} ${commonStyles.two_text_overflow}`}>
                    “把握趋势
                    引领未来”2021-2022定制家具设计流行趋势发布会合肥站，于6月16日在中国合肥洲际酒店盛大举行，发布会现场星光熠熠，共同见证流行趋势的发布。本次活动是由北京富胜家居用品有限公司、安徽美诺宝家居用品有限公司联
                  </div>
                </Tooltip>
                <Link href={`${url}?id=1`} passHref>
                  <div className={commonStyles.btn_bg}></div>
                </Link>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.left}>
                <Image width={180} height={160} src="/images/news2.jpg" alt="新闻二" />
              </div>
              <div className={styles.right}>
                <Tooltip title="2021年上半年家居市场六大现象盘点">
                  <div className={`${styles.news_title} ${commonStyles.one_text_overflow}`}>
                    2021年上半年家居市场六大现象盘点
                  </div>
                </Tooltip>
                <div className={styles.title_style}></div>
                <Tooltip title="走过了2020疫情造成的营商环境困难，2021年上半年家居市场的格局悄悄发生变化。在这半年里，传统家居经营模式日渐凸显颓势，大家居、全屋定制、整装、智能家居、互联网新零售异常火热，行业发展迅速，经营者的思维方式也逐步有">
                  <div className={`${styles.news_msg} ${commonStyles.two_text_overflow}`}>
                    走过了2020疫情造成的营商环境困难，2021年上半年家居市场的格局悄悄发生变化。在这半年里，传统家居经营模式日渐凸显颓势，大家居、全屋定制、整装、智能家居、互联网新零售异常火热，行业发展迅速，经营者的思维方式也逐步有
                  </div>
                </Tooltip>
                <Link href={`${url}?id=2`} passHref>
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

export default Newscenter;
