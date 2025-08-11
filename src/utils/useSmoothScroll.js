import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const id = target.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      if (element) {
        scroll.scrollTo(element.offsetTop, {
          duration: 800,
          smooth: 'easeInOutQuart',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
};