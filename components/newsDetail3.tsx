/*
 * @Author: c37csq
 * @Date: 2022-01-04 13:39:25
 * @LastEditTime: 2022-01-05 16:06:04
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\newsDetail3.tsx
 */

import styles from '../styles/newsDetail3.module.css';
import commonStyles from '../styles/Common.module.css';
import { NewsDetailProps } from '../types';
import Link from 'next/link';

const NewsDetail3 = (props: NewsDetailProps) => {
  const { id, url } = props;

  return (
    <div style={{ display: id === '3' ? 'block' : 'none' }} className={styles.newsDetail3}>
      <div className={commonStyles.imgWrapper}>
        <img style={{ width: '100%' }} src="/images/news_img.png" alt="新闻中心" />
      </div>
      <div className={styles.news3_detail}>
        <div className={styles.news3_content}>
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
          <div className={styles.news3_detail_content}>
            <div className={styles.news3_detail_title}>疫情形势严峻 常态化不松懈</div>
            <div className={`${styles.text_indent} ${styles.text_style}`}>
              当前，境外疫情仍在持续蔓延，国内部分地区相继出现聚集性关联疫情，此次德尔塔变异毒株传染强，传播快，轨迹复杂，使得“外防输入、内防反弹”的风险进一步加大。根据省市疫情防控的要求，结合公司实际，就从严从实抓好近期公司疫情防控作如下要求：
            </div>
            <div className={styles.point}>
              <div className={`${styles.point_title} ${styles.text_indent}`}>一、继续强化防控意识</div>
              <p className={`${styles.text_style} ${styles.text_indent}`}>
                要高度重视，毫不松懈持续抓好疫情防控各项工作。要结合实际，完善常态化防控和专项应急预案，储备好相关卫生防护物资。
              </p>
            </div>
            <div className={styles.point}>
              <div className={`${styles.point_title} ${styles.text_indent}`}>二、梳理疫苗接种登记</div>
              <p className={`${styles.text_style} ${styles.text_indent}`}>
                要认真梳理、统计本单位新冠疫苗接种完成情况，对符合接种条件但未接种或未全程接种疫苗的员工，要及时督促完成。
                要认真梳理、统计本单位新冠疫苗接种完成情况，对符合接种条件但未接种或未全程接种疫苗的员工，要及时督促完成.
              </p>
            </div>
            <div className={styles.point}>
              <div className={`${styles.point_title} ${styles.text_indent}`}>三、加强健康码检查</div>
              <p className={`${styles.text_style} ${styles.text_indent}`}>
                要继续落实&quot;健康码&quot;管理机制，加强员工健康检监测，做好员工健康管理，加强外来人员信息登记和健康码核查工作，接待期间微好人员防护措施，避免接待高风险地区来司人员.
                要继续落实“健康码”管理机制，加强员工健康检监测，做好员工健康管理，加强外来人员信息登记和健康码核查工作，接待期间微好人员防护措施，避免接待高风险地区来司人员.
              </p>
            </div>
            <div className={styles.point}>
              <div className={`${styles.point_title} ${styles.text_indent}`}>四、减少外出避免风险</div>
              <p className={`${styles.text_style} ${styles.text_indent}`}>
                要密切关注现有业务涉及的相关地区疫情形势，及时了解掌握疫情动态，避免高风险地区的出差或途径停留。如确因工作需到省内或非高风险地区出差，须严格按照要求做好个人安全防护目前正值暑期，提醒员工及家庭成员调整家庭出游计划，尽量避免外出旅行。
              </p>
            </div>
            <div className={styles.point}>
              <div className={`${styles.point_title} ${styles.text_indent}`}>五、强化个人健康意识</div>
              <p className={`${styles.text_style} ${styles.text_indent}`}>
                要自觉履行个人防护责任义务，注意或庭及个人卫生，养成勤洗手、戴口罩、使用公筷公勺、少聚集聚餐等健康行为习惯。
              </p>
            </div>
            <div className={styles.bottom_img}>
              <img src="/images/news3.jpg" alt="新闻图片" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail3;
