import { useEffect, useRef } from 'react';

export type AnimationType = 'slide-up' | 'slide-left' | 'slide-right' | 'fade-in-up' | 'zoom-in';

export const useAdvancedScrollAnimation = (
  animationType: AnimationType = 'slide-up',
  threshold = 0.1,
  delay = 0
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Apply initial animation class
    const animationClass = getAnimationClass(animationType);
    element.classList.add(animationClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('animate');
          }, delay);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay, animationType]);

  return elementRef;
};

const getAnimationClass = (type: AnimationType): string => {
  switch (type) {
    case 'slide-left':
      return 'slide-in-left';
    case 'slide-right':
      return 'slide-in-right';
    case 'fade-in-up':
      return 'fade-in-up';
    case 'zoom-in':
      return 'zoom-in';
    default:
      return 'animate-on-scroll';
  }
};