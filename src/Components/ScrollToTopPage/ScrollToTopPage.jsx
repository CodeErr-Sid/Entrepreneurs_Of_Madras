import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]); // Trigger when route changes

  return null;
}

export default ScrollToTopPage;