/*
 * @Author: c37csq
 * @Date: 2021-12-27 14:16:42
 * @LastEditTime: 2022-01-05 16:04:37
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\touch.tsx
 */
import styles from '../styles/Touch.module.css';
import commonStyles from '../styles/Common.module.css';
import Image from 'next/image';

const Touch = () => {
  return (
    <div id="touchDiv" className={styles.touchDiv}>
      <div className={styles.touchContainer}>
        <div className={styles.touchContent}>
          <div className={commonStyles.commonTitle}>
            <div className={styles.touch_title_bg}></div>
            <div className={commonStyles.common_title_text}>联系我们</div>
            <div>
              <Image width={26} height={15} src="/images/white_arrow.png" alt="箭头" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.touch_left}>
              <div className={styles.left_item}>
                <div>
                  <Image width={14} height={18} src="/images/address.png" alt="地址" />
                </div>
                <p className={styles.desc}>浙江省宁波市鄞州区天童北路933号和邦大厦C座3210室</p>
              </div>
              <div className={styles.left_item}>
                <Image width={14} height={15} src="/images/phone.png" alt="电话" />
                <p className={styles.desc}>+86 574 83861395</p>
              </div>
              <div className={styles.left_item}>
                <Image width={15} height={14} src="/images/telephone.png" alt="电话" />
                <p className={styles.desc}>+86 574 83861399</p>
              </div>
            </div>
            <div className={styles.touch_right}>
              <div>
                <img src="/images/QRcode.png" alt="二维码" />
              </div>
              <p className={styles.operate}>
                <span>【扫一扫】</span>
                <span>关注</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
