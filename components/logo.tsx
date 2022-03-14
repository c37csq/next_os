import router from 'next/router';
import styles from '../styles/Logo.module.css';
import { setScrollTop } from '../utils/tool';

const Logo = (props: { active: boolean }) => {
  // 去首页
  const goHome = () => {
    setScrollTop();
    router.push('/');
  };

  return (
    <div onClick={goHome} className={styles.logoWrapper}>
      <div className={props.active ? `${styles.logo_white}` : `${styles.logo_black}`}></div>
    </div>
  );
};

export default Logo;
