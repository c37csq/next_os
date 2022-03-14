/*
 * @Author: c37csq
 * @Date: 2021-12-29 10:45:56
 * @LastEditTime: 2022-01-05 16:03:36
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\product.tsx
 */
import styles from '../styles/Product.module.css';
import commonStyles from '../styles/Common.module.css';
import Image from 'next/image';

const Product = () => {
  return (
    <div id="brandDiv" className={styles.brandDiv}>
      <div className={styles.brandContainer}>
        <div className={styles.brandContent}>
          <div id="product" className={commonStyles.commonTitle}>
            <div className={styles.brand_title_bg}></div>
            <div className={commonStyles.common_title_text_blue}>产品展示</div>
            <div className="arrow_down">
              <Image width={26} height={15} src="/images/arrow.png" alt="箭头" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={styles.item_title}>家具</div>
              <div>
                <Image width={36} height={36} src="/images/furniture.png" alt="家具" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title}>户外用品</div>
              <div>
                <Image width={36} height={36} src="/images/outdoor.png" alt="户外用品" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title}>汽车配件</div>
              <div>
                <Image width={36} height={36} src="/images/car.png" alt="汽车配件" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title}>日用品</div>
              <div>
                <Image width={36} height={36} src="/images/life.png" alt="日用品" />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title}>运动器材</div>
              <div>
                <Image width={36} height={36} src="/images/yundong.png" alt="运动器材" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
