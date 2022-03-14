/*
 * @Author: c37csq
 * @Date: 2021-12-28 09:03:47
 * @LastEditTime: 2022-01-05 16:04:13
 * @LastEditors: c37csq
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \liangcang_os\components\banner.tsx
 */
import { Carousel } from 'antd';
import { useRef, useState } from 'react';
import styles from '../styles/Banner.module.css';
import Image from 'next/image';

const Banner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bannerActive, setBannerActive] = useState<boolean>(false);

  // 轮播图改变事件
  const bannerAfterChange = (current: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      // 第一页
      if (current === 0) {
        setBannerActive(false);
        videoRef.current.play();
      } else {
        setBannerActive(true);
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className={styles.indexDiv} id="indexDiv">
      <Carousel afterChange={bannerAfterChange} autoplaySpeed={8000} autoplay={true} effect="fade">
        <div className={styles.carousel_item}>
          <Image layout="fill" src="/images/banner1.png" alt="轮播图" />
          <div className={styles.logo}>
            <video
              x5-playsinline="true"
              x5-video-player-type="h5"
              playsInline={true}
              webkit-playsinline="true"
              className={styles.video}
              ref={videoRef}
              autoPlay
              muted
              loop
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              <source src="/videos/video.ogg" type="video/ogg" />
              <source src="/videos/video.webm" type="video/webm" />
              <object data="/videos/video.mp4">
                <embed src="/videos/video.swf" />
              </object>
            </video>
            {/* <video
              x5-playsinline="true"
              x5-video-player-type="h5"
              playsInline={true}
              webkit-playsinline="true"
              className={styles.video}
              ref={videoRef}
              autoPlay
              muted
              loop
            >
              <source src="/videos/flower.webm" type="video/webm" />
              <source src="/videos/flower.mp4" type="video/mp4" />
            </video> */}
          </div>
        </div>
        <div className={styles.carousel_item}>
          <Image layout="fill" src="/images/banner2.png" alt="轮播图" />
          <div className={`${styles.banner2_logos} ${bannerActive ? `${styles.active}` : ''}`}>
            <div className={styles.banner2_logo1}>
              <img src="/images/banner2_logo1.png" alt="巧手成就卓越" />
            </div>
            <div className={styles.banner2_logo2}>
              <img src="/images/banner2_logo2.png" alt="匠心创造非凡" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
