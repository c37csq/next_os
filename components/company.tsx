/*
 * @Author: c37csq
 * @Date: 2021-12-29 16:01:39
 * @LastEditTime: 2022-01-05 16:04:02
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\company.tsx
 */
import styles from '../styles/Company.module.css';
import commonStyles from '../styles/Common.module.css';
import Image from 'next/image';

const Company = () => {
  return (
    <div id="companyDiv" className={styles.companyDiv}>
      <div className={styles.companyContainer}>
        <div className={styles.companyContent}>
          <div id="company" className={commonStyles.commonTitle}>
            <div className={styles.company_bg_title}></div>
            <div className={commonStyles.common_title_text_blue}>合作公司</div>
            <div>
              <Image width={26} height={15} src="/images/arrow.png" alt="箭头" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/amazon.png" alt="amazon" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/ebay.png" alt="ebay" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/ups.png" alt="ups" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/usps.png" alt="usps" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/fedex.png" alt="FedEx" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/wayfair.png" alt="wayfair" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/discovery.png" alt="DISCOVERY" />
            </div>
            <div className={styles.company_item}>
              <Image width={240} height={110} src="/images/walmart.png" alt="Walmart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
