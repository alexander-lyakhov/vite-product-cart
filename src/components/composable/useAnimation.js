export const delay = (timeout = 1000) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
};

export const action = async (el, className, startDelay) => {

  startDelay && await delay(startDelay);
  el.classList.add(className);

  return new Promise(resolve => {
    const handler = () => {
      el.removeEventListener('transitionend', handler);
      el.removeEventListener('animationend', handler);

      el.classList.remove(className);

      resolve();
    }

    el.addEventListener('transitionend', handler);
    el.addEventListener('animationend', handler);
  })
};

export const fadeIn = (el, timeout = 0) => {
  return action(el, 'fade-in', timeout);
}

export const fadeOut = (el, startDelay = 0) => {
  return action(el, 'fade-out', startDelay);
}


export default function useAnimation () {
  return {
    delay,
    action,
    fadeIn,
    fadeOut,
  }
};
