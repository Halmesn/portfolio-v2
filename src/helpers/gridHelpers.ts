import { Variants } from 'framer-motion';

const durationsVisible: number[] = [];
const delaysVisible: number[] = [];
const durationsClose: number[] = [];
const delaysClose: number[] = [];

const generateAnimation = (pos: number): Variants => {
  const variants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0,
      },
    },
    close: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0,
      },
    },
  };

  const scale = pos % 2 === 0 ? 'scaleY' : 'scaleX';

  const durationVisible: number = pos === 9 ? 0.4 : 0.04 + pos * 0.02;
  durationsVisible.push(durationVisible);

  const durationClose: number = pos === 9 ? 0.55 : 0.08 + pos * 0.01;
  durationsClose.push(durationClose);

  const delayVisible: number =
    pos === 0 ? 0 : delaysVisible[pos - 1] + durationsVisible[pos - 1];
  delaysVisible.push(delayVisible);

  const delayClose: number =
    pos === 0 ? 0 : delaysClose[pos - 1] + durationsClose[pos - 1];
  delaysClose.push(delayClose);

  variants.hidden[scale] = 0;
  variants.visible[scale] = 1;
  variants.visible.transition.duration = durationVisible;
  variants.visible.transition.delay = delayVisible;
  variants.close[scale] = 0;
  variants.close.transition.duration = durationClose;
  variants.close.transition.delay = delayClose;

  return variants;
};

export const gridItem0: Variants = generateAnimation(0);
export const gridItem1: Variants = generateAnimation(1);
export const gridItem2: Variants = generateAnimation(2);
export const gridItem3: Variants = generateAnimation(3);
export const gridItem4: Variants = generateAnimation(4);
export const gridItem5: Variants = generateAnimation(5);
export const gridItem6: Variants = generateAnimation(6);
export const gridItem7: Variants = generateAnimation(7);
export const gridItem8: Variants = generateAnimation(8);
export const gridItem9: Variants = generateAnimation(9);

export const gridText: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: 1.4,
    },
  },
  close: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};
