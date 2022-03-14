import { BackTop } from 'antd';
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Brand.module.css';
import commonStyles from '../styles/Common.module.css';
import Image from 'next/image';
import { LayoutProps } from '../types';
import Link from 'next/link';

const Product = (props: LayoutProps) => {
  const { changeHeaderStyle, setMenuActive } = props;

  useEffect(() => {
    changeHeaderStyle('true');
    setMenuActive('brand');
  }, []);

  return (
    <div id="product" className={styles.product}>
      <Head>
        <title>产品展示</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
        <meta name="Keywords" content="链仓官网产品展示,家具,户外用品,汽车配件,日用品,运动器材" />
        <meta name="Description" content="链仓官网产品展示,家具,户外用品,汽车配件,日用品,运动器材" />
      </Head>
      <div className={commonStyles.imgWrapper}>
        <img style={{ width: '100%' }} src="/images/product_show.png" alt="产品展示" />
      </div>
      <div className={styles.product_container}>
        <div className={styles.product_content}>
          <p className={`${styles.product_bread} ${commonStyles.bread}`}>
            <Link href="/">
              <a className={commonStyles.bread_a}>首页&nbsp;</a>
            </Link>
            &gt; &nbsp;
            <span>产品展示</span>
          </p>
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <div className={styles.item_left_name}>家具</div>
                <div>
                  <Image src="/images/jiaju.png" height="36" width="36" alt="家具" />
                </div>
              </div>
              <div className={styles.item_right}>
                <div>
                  <Image src="/images/1-1.png" height="220" width="220" alt="家具" />
                </div>
                <div>
                  <Image src="/images/1-2.png" height="220" width="220" alt="家具" />
                </div>
                <div>
                  <Image src="/images/1-3.png" height="220" width="220" alt="家具" />
                </div>
                <div>
                  <Image src="/images/1-4.png" height="220" width="220" alt="家具" />
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <div className={styles.item_left_name}>户外用品</div>
                <div>
                  <Image src="/images/huwai.png" height="36" width="36" alt="户外用品" />
                </div>
              </div>
              <div className={styles.item_right}>
                <div>
                  <Image src="/images/2-1.png" height="220" width="220" alt="户外用品" />
                </div>
                <div>
                  <Image src="/images/2-2.png" height="220" width="220" alt="户外用品" />
                </div>
                <div>
                  <Image src="/images/2-3.png" height="220" width="220" alt="户外用品" />
                </div>
                <div>
                  <Image src="/images/2-4.png" height="220" width="220" alt="户外用品" />
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <div className={styles.item_left_name}>汽车配件</div>
                <div>
                  <Image src="/images/qiche.png" height="36" width="36" alt="汽车配件" />
                </div>
              </div>
              <div className={styles.item_right}>
                <div>
                  <Image src="/images/3-1.png" height="220" width="220" alt="汽车配件" />
                </div>
                <div>
                  <Image src="/images/3-2.png" height="220" width="220" alt="汽车配件" />
                </div>
                <div>
                  <Image src="/images/3-3.png" height="220" width="220" alt="汽车配件" />
                </div>
                <div>
                  <Image src="/images/3-4.png" height="220" width="220" alt="汽车配件" />
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <div className={styles.item_left_name}>日用品</div>
                <div>
                  <Image src="/images/riyong.png" height="36" width="36" alt="日用品" />
                </div>
              </div>
              <div className={styles.item_right}>
                <div>
                  <Image src="/images/4-1.png" height="220" width="220" alt="日用品" />
                </div>
                <div>
                  <Image src="/images/4-2.png" height="220" width="220" alt="日用品" />
                </div>
                <div>
                  <Image src="/images/4-3.png" height="220" width="220" alt="日用品" />
                </div>
                <div>
                  <Image src="/images/4-4.png" height="220" width="220" alt="日用品" />
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <div className={styles.item_left_name}>运动器材</div>
                <div>
                  <Image src="/images/yudongqicai.png" height="36" width="36" alt="运动器材" />
                </div>
              </div>
              <div className={styles.item_right}>
                <div>
                  <Image src="/images/5-1.png" height="220" width="220" alt="运动器材" />
                </div>
                <div>
                  <Image src="/images/5-2.png" height="220" width="220" alt="运动器材" />
                </div>
                <div>
                  <Image src="/images/5-3.png" height="220" width="220" alt="运动器材" />
                </div>
                <div>
                  <Image src="/images/5-4.png" height="220" width="220" alt="运动器材" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackTop />
    </div>
  );
};

export default Product;
