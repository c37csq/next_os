//是否是移动端
export const IsMobile = () => {
  let userAgent = navigator.userAgent,
    Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return Agents.some((i) => {
    return userAgent.includes(i);
  });
};

let timer = null;

// 滚动
export const scrollDistanceSmooth = (fromId: string, toId: string, speed: number = 180) => {
  let from = document.querySelector(`#${fromId}`);
  let to = document.querySelector(`#${toId}`);
  let fromTop = from!.getBoundingClientRect().top;
  let toTop = to!.getBoundingClientRect().top;
  let distance = fromTop - toTop;

  if (IsMobile()) {
    const step = () => {
      if (distance < 0) {
        const toDown = (speed) => {
          window.scrollBy(0, speed);
          let toDom = document.querySelector(`#${toId}`);
          let top = toDom!.getBoundingClientRect().top;
          if (toId === 'touchDiv') {
            if (top <= window.innerHeight - 600) {
              clearTimeout(timer);
            } else {
              timer = setTimeout(() => {
                toDown(speed);
              }, 16);
            }
          } else {
            if (top <= 64) {
              clearTimeout(timer);
            } else {
              if (top <= speed + 64 && top >= 64) {
                window.scrollBy(0, top - 64);
                clearTimeout(timer);
              } else {
                timer = setTimeout(() => {
                  toDown(speed);
                }, 16);
              }
            }
          }
        };
        toDown(speed);
      } else {
        const toTop = (speed) => {
          window.scrollBy(0, -speed);
          let toDom = document.querySelector(`#${toId}`);
          let top = toDom!.getBoundingClientRect().top;
          if (top >= 64) {
            clearTimeout(timer);
          } else {
            if (top >= 64 - speed && top <= 64) {
              window.scrollBy(0, top - 64);
              clearTimeout(timer);
            } else {
              timer = setTimeout(() => {
                toTop(speed);
              }, 16);
            }
          }
        };
        toTop(speed);
      }
    };
    step();
  } else {
    if (to) {
      to.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }
};

// 滚动条置顶
export const setScrollTop = () => {
  document.documentElement.scrollTop = window.pageYOffset = document.body.scrollTop = 0;
};

// 计算div在视口高度
export const calcHeight = (id: string) => {
  const container = document.querySelector(`#${id}`);
  const clientInfo = container!.getBoundingClientRect();
  const { top, bottom } = clientInfo;

  // 减头部高度
  const clientHeight = window.innerHeight - 64;
  const realTop = top - 64;
  const realBottom = bottom - 64;

  if (realTop >= 0 && realTop <= clientHeight) {
    return clientHeight - realTop;
  } else if (realTop < 0) {
    if (realBottom >= 0) {
      return realBottom;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};

/**
 * 防抖(debounce)：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
 * @param func
 * @param delay
 */
export const debounce = (func, delay = 200) => {
  let timeout = null;
  return function () {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(this, arguments);
    }, delay);
  };
};
