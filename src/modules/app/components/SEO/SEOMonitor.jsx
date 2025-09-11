/* global PerformanceObserver, performance */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  generateLocalBusinessSchema, 
  generateServiceSchema, 
  _generateProductSchema,
  generateFAQSchema 
} from '@/utility/seo';
import { trackPageView } from '@/utility/analytics';

// SEO monitoring and analytics component
const SEOMonitor = () => {
  const location = useLocation();

  useEffect(() => {
    // Update page title based on route
    updatePageTitle(location.pathname);
    
    // Add page-specific structured data
    addPageStructuredData(location.pathname);
    
    // Track page view
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    trackPageView(pageTitle, pageUrl, location.pathname);
    
    // Monitor page performance for SEO
    monitorPagePerformance();
  }, [location]);

  return null; // This component doesn't render anything
};

// Helper functions
const getPageName = (pathname) => {
  const routes = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/portfolio': 'Portfolio',
    '/contact': 'Contact',
  };
  
  // Handle dynamic routes
  if (pathname.startsWith('/portfolio/')) {
    return 'Portfolio Detail';
  }
  
  return routes[pathname] || 'Page';
};

const _getPageCategory = (pathname) => {
  if (pathname === '/') {
    return 'homepage';
  }
  if (pathname.includes('/about')) {
    return 'company_info';
  }
  if (pathname.includes('/services')) {
    return 'services';
  }
  if (pathname.includes('/portfolio')) {
    return 'portfolio';
  }
  if (pathname.includes('/contact')) {
    return 'contact';
  }
  return 'other';
};

const _getServiceType = (pathname) => {
  if (pathname.includes('/services')) {
    if (pathname.includes('web')) {
      return 'web_development';
    }
    if (pathname.includes('mobile')) {
      return 'mobile_development';
    }
    if (pathname.includes('enterprise')) {
      return 'enterprise_solutions';
    }
    if (pathname.includes('qa')) {
      return 'quality_assurance';
    }
    return 'general_services';
  }
  return 'none';
};

const updatePageTitle = (pathname) => {
  const pageName = getPageName(pathname);
  const baseTitles = {
    'Home': 'Techloom | شركة تطوير البرمجيات في مصر | Software Development Company Egypt',
    'About': 'About Us - Techloom | World-Class Technology Solutions',
    'Services': 'Services - Techloom | Custom Software Development & Technology Solutions',
    'Portfolio': 'Portfolio - Techloom | Our Successful Projects',
    'Portfolio Detail': 'Project Details - Techloom',
    'Contact': 'Contact Us - Techloom | Get Expert Technology Consultation',
  };
  
  const title = baseTitles[pageName] || `${pageName} - Techloom`;
  
  // Only update if different to avoid unnecessary re-renders
  if (document.title !== title) {
    document.title = title;
  }
};

const addPageStructuredData = (pathname) => {
  // Remove existing page-specific structured data
  const existingSchema = document.querySelector('script[data-schema-page]');
  if (existingSchema) {
    existingSchema.remove();
  }
  
  let schema = null;
  
  // Add page-specific structured data
  if (pathname === '/') {
    // Homepage - Local Business Schema
    schema = generateLocalBusinessSchema();
  } else if (pathname === '/services') {
    // Services page - Service Schema
    schema = generateServiceSchema('general');
  } else if (pathname.includes('/services/web')) {
    schema = generateServiceSchema('web-development');
  } else if (pathname.includes('/services/mobile')) {
    schema = generateServiceSchema('mobile-development');
  } else if (pathname.includes('/services/enterprise')) {
    schema = generateServiceSchema('enterprise-solutions');
  } else if (pathname === '/contact') {
    // Contact page - FAQ Schema for common questions
    const commonFAQs = [
      {
        question: 'How much does custom software development cost in Egypt?',
        answer: 'Software development costs vary based on project complexity, features, and timeline. Contact us for a free consultation and detailed quote tailored to your specific requirements.',
      },
      {
        question: 'Do you provide software development services across Egypt?',
        answer: 'Yes, we serve clients across all of Egypt including Cairo, Alexandria, Giza, and other cities. We offer both on-site and remote development services.',
      },
      {
        question: 'What technologies do you use for software development?',
        answer: 'We use modern technologies including React, Node.js, Python, Java, .NET, mobile development frameworks, and cloud platforms to build robust, scalable solutions.',
      },
      {
        question: 'How long does it take to develop custom software?',
        answer: 'Development timelines depend on project scope and complexity. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during planning.',
      },
    ];
    schema = generateFAQSchema(commonFAQs);
  }
  
  if (schema) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};

// Performance monitoring for SEO using modern Performance Observer API
export const monitorPagePerformance = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // Good LCP is under 2.5 seconds
      const lcpValue = lastEntry.startTime;
      sendPerformanceData('LCP', lcpValue);
      
      if (lcpValue > 2500) {
        console.warn(`LCP is ${lcpValue}ms - consider optimizing images and server response time`);
      }
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fidValue = entry.processingStart - entry.startTime;
        sendPerformanceData('FID', fidValue);
        
        if (fidValue > 100) {
          console.warn(`FID is ${fidValue}ms - consider reducing JavaScript execution time`);
        }
      });
    });
    
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Monitor Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0;
      const entries = entryList.getEntries();
      
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      sendPerformanceData('CLS', clsValue);
      
      if (clsValue > 0.1) {
        console.warn(`CLS is ${clsValue} - consider adding size attributes to images and avoiding dynamic content insertion`);
      }
    });
    
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Monitor navigation timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        if (navigationTiming) {
          const pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
          const domContentLoadedTime = navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart;
          
          sendPerformanceData('Page Load Time', pageLoadTime);
          sendPerformanceData('DOM Content Loaded', domContentLoadedTime);
          
          if (pageLoadTime > 3000) {
            console.warn(`Page load time is ${pageLoadTime}ms - consider optimizing resources`);
          }
        }
      }, 0);
    });

  } catch (error) {
    console.warn('Performance monitoring not available:', error);
  }
};

// Helper function to send performance data to analytics
const sendPerformanceData = (metric, value) => {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric,
      value: Math.round(value),
      non_interaction: true,
    });
  }
  
  // Send to GTM dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'web_vitals',
      metric_name: metric,
      metric_value: Math.round(value),
    });
  }
};

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Wait for the page to load before monitoring
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', monitorPagePerformance);
  } else {
    monitorPagePerformance();
  }
}

export default SEOMonitor;
