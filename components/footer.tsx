/*
 * @Author: c37csq
 * @Date: 2021-12-27 10:05:41
 * @LastEditTime: 2022-01-05 16:04:54
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\footer.tsx
 */
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>Copyright Onetouch Cross-border E-commerce. All rights reserved.</div>
          <div className={styles.copy_msg}>
            <div>版权所有：宁波链仓科跨境电子商务有限公司</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
