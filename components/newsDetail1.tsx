import styles from '../styles/newsDetail1.module.css';
import commonStyles from '../styles/Common.module.css';
import { NewsDetailProps } from '../types';
import Link from 'next/link';

const NewsDetail1 = (props: NewsDetailProps) => {
  const { id, url } = props;

  return (
    <div style={{ display: id === '1' ? 'block' : 'none' }} className={styles.newsDetail1}>
      <div className={commonStyles.imgWrapper}>
        <img style={{ width: '100%' }} src="/images/news_img.png" alt="新闻中心" />
      </div>
      <div className={styles.news1_detail}>
        <div className={styles.news1_content}>
          <p className={`${styles.bread} ${commonStyles.bread}`}>
            <Link href="/">
              <a className={commonStyles.bread_a}>首页 </a>
            </Link>
            &gt;&nbsp;
            <Link href={url}>
              <a className={commonStyles.bread_a}>新闻中心 </a>
            </Link>
            &gt; 新闻详情
          </p>
          <div className={styles.news1_detail_content}>
            <div className={styles.news1_detail_title}>“把握趋势 引领未来”定制家具设计流行趋势发布会圆满成功！</div>
            <div className={styles.news1_content1}>
              <span>
                {' '}
                “把握趋势
                引领未来”2021-2022定制家具设计流行趋势发布会合肥站，于6月16日在中国合肥洲际酒店盛大举行，发布会现场星光熠熠，共同见证流行趋势的发布。{' '}
              </span>
              <span>
                本次活动是由北京富胜家居用品有限公司、安徽美诺宝家居用品有限公司联合主办，合肥论坛、家居安徽共同承办。
              </span>
            </div>
            <div className={styles.news1_img1}>
              <img src="/images/news1.jpg" alt="新闻图片" />
            </div>
            <div className={styles.show_person}>
              <p>出席本次活动的嘉宾有：</p>
              <p>1.凯斯宝玛亚太区销售总监 文丽娅</p>
              <p>2.北京富胜家居用品有限公司总经理 韩磊</p>
              <p>3.安徽美诺宝家居用品有限公司总经理 秦雷振</p>
              <p>4.北京富胜家居用品有限公司副总经理 郑凯</p>
              <p>5.慕尚设计 杨红雨</p>
              <p>6.合肥论坛家居频道总经理 陈旻</p>
              <p>7.木里木外总经理 刘跃</p>
            </div>
            <div className={styles.news1_img2}>
              <img src="/images/news1-2.jpg" alt="新闻图片" />
            </div>
            <p className={styles.news_desc}>
              {' '}
              在现场观众的掌声中，主办方北京富胜家居用品有限公司总经理韩磊致开幕词。韩磊从家居用材的角度分析设计，以另一个视角去预见设计，从而掌握家居设计的支撑点。
            </p>
            <div className={styles.news1_img3}>
              <img src="/images/news1-3.jpg" alt="新闻图片" />
            </div>
            <p className={styles.news_desc}>
              {' '}
              接着，安徽美诺宝家居用品有限公司总经理秦雷振发表致辞，表示现在五金在家居全屋定制中的占比越来越多，美诺宝作为高端五金品牌会为用户带去更多的帮助，让家居更加智能。
            </p>
            <div className={styles.news1_img4}>
              <img src="/images/news1-4.jpg" alt="新闻图片" />
            </div>
            <div className={styles.news_footer}>
              <div>
                接下来就进入到此次活动的重点环节—2021-2022定制家具设计流行趋势的发布，由凯斯宝玛亚太区销售总监文丽娅担任主讲嘉宾，北京富胜家居用品有限公司副总经理郑凯现场翻译。文丽娅从色彩、用材、外观、照明、全屋定制、多用途空间、收纳与功能、智能化七个方面现场解析流行趋势。
              </div>
              <p>色彩：深灰色主题还会延续，以黑白灰与自然色搭配为主，莫兰迪色系应用。</p>
              <p>用材：哑光表面仍是主流，出现针织物表面质感，天然材料，可回收材料，继续沿用多种混搭的风格。</p>
              <p>
                外观：延续现代简约设计风格，直线条，无拉手设计，纤薄，大门板营造出统一的整体感，“外部极简化，内部功能化”趋势明显。
              </p>
              <p>照明：见光不见灯，智能灯控，无主灯设计。</p>
              <p>全屋定制：中国进展领先全球。</p>
              <p>多用途空间：通过移门定义空间用途，书房&娱乐，卧室&客厅，客厅&厨房等。</p>
              <p>收纳与功能：更注重细化分类和功能细节。</p>
              <p>智能化：满足人们“懒”的愿望，帮助极简设计的实现</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail1;
