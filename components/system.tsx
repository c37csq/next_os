/*
 * @Author: c37csq
 * @Date: 2021-12-29 11:35:24
 * @LastEditTime: 2022-01-05 16:02:31
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\system.tsx
 */
import styles from '../styles/System.module.css';
import commonStyles from '../styles/Common.module.css';
import Image from 'next/image';

const System = () => {
  return (
    <div id="systemDiv" className={styles.systemDiv}>
      <div className={styles.systemContainer}>
        <div className={styles.systemContent}>
          <div id="system" className={commonStyles.commonTitle}>
            <div className={styles.system_title_bg}></div>
            <div className={commonStyles.common_title_text}>系统建设</div>
            <div>
              <Image width={26} height={15} src="/images/white_arrow.png" alt="箭头" />
            </div>
          </div>
          <div className={styles.content}>
            <div>
              <img src="/images/system.png" alt="系统建设" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
