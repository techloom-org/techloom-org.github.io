// Google Analytics 4 and Google Tag Manager setup for Techloom software company
// These IDs should be set in environment variables
export const GA4_MEASUREMENT_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX';
export const GTM_CONTAINER_ID = process.env.REACT_APP_GTM_CONTAINER_ID || 'GTM-KKM8LBG4';

// Google Analytics 4 configuration for software company
export const ga4Config = {
  custom_map: {
    custom_parameter_1: 'service_type',
    custom_parameter_2: 'project_category',
    custom_parameter_3: 'customer_segment',
    custom_parameter_4: 'technology_stack',
    custom_parameter_5: 'project_size',
  },
  currency: 'EGP',
  country: 'EG',
  language: 'en',
  custom_parameters: {
    business_type: 'software_development',
    target_market: 'egypt',
    service_area: 'mena_region',
  },
};

// Initialize Google Analytics 4
export const initializeGA4 = () => {
  if (
    typeof window === 'undefined' ||
    !GA4_MEASUREMENT_ID ||
    GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX'
  ) {
    console.warn('GA4 Measurement ID not configured');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    ...ga4Config,
    send_page_view: false, // We'll send custom page views
  });
};

// Initialize Google Tag Manager
export const initializeGTM = () => {
  if (typeof window === 'undefined' || !GTM_CONTAINER_ID || GTM_CONTAINER_ID === 'GTM-XXXXXXX') {
    console.warn('GTM Container ID not configured');
    return;
  }

  // GTM script
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
  `;
  document.head.appendChild(gtmScript);

  // GTM noscript iframe
  const gtmNoScript = document.createElement('noscript');
  gtmNoScript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(gtmNoScript);
};

// Enhanced page view tracking with software company context
export const trackPageView = (page_title, page_location, page_path) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  // Determine page category and service type
  const pageCategory = getPageCategory(page_path);
  const serviceType = getServiceType(page_path);
  const customerSegment = getCustomerSegment(page_path);

  window.gtag('event', 'page_view', {
    page_title,
    page_location,
    page_path,
    page_category: pageCategory,
    service_type: serviceType,
    customer_segment: customerSegment,
    business_type: 'software_development',
    target_market: 'egypt',
    content_group1: pageCategory,
    content_group2: serviceType,
    content_group3: customerSegment,
  });

  // Send to GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_category: pageCategory,
    service_type: serviceType,
    customer_segment: customerSegment,
  });
};

// Track service inquiries and contact form submissions
export const trackServiceInquiry = (serviceType, contactMethod = 'form') => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'generate_lead', {
    event_category: 'engagement',
    event_label: serviceType,
    service_type: serviceType,
    contact_method: contactMethod,
    customer_segment: 'potential_client',
    value: 1,
  });

  // Send to GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'service_inquiry',
    service_type: serviceType,
    contact_method: contactMethod,
    inquiry_value: 'high_intent',
  });
};

// Track project portfolio views
export const trackPortfolioView = (projectName, projectCategory, technologies) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'view_item', {
    event_category: 'portfolio',
    event_label: projectName,
    item_category: projectCategory,
    item_name: projectName,
    project_category: projectCategory,
    technologies: technologies.join(', '),
    content_type: 'portfolio_project',
  });

  // Send to GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'portfolio_view',
    project_name: projectName,
    project_category: projectCategory,
    technologies: technologies,
  });
};

// Track WhatsApp clicks (important for Egyptian market)
export const trackWhatsAppClick = (source = 'header') => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'click', {
    event_category: 'contact',
    event_label: 'whatsapp',
    contact_method: 'whatsapp',
    click_source: source,
    customer_intent: 'high',
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    source: source,
    contact_preference: 'instant_messaging',
  });
};

// Track phone calls
export const trackPhoneClick = (source = 'header') => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'click', {
    event_category: 'contact',
    event_label: 'phone',
    contact_method: 'phone',
    click_source: source,
    customer_intent: 'very_high',
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'phone_click',
    source: source,
    contact_preference: 'direct_call',
  });
};

// Track email clicks
export const trackEmailClick = (source = 'contact_page') => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'click', {
    event_category: 'contact',
    event_label: 'email',
    contact_method: 'email',
    click_source: source,
    customer_intent: 'medium',
  });
};

// Track service page engagement
export const trackServiceEngagement = (serviceName, actionType = 'view') => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', actionType, {
    event_category: 'service_engagement',
    event_label: serviceName,
    service_name: serviceName,
    engagement_type: actionType,
    page_type: 'service_page',
  });
};

// Track technology interest (for portfolio filtering)
export const trackTechnologyInterest = (technology, context = 'portfolio_filter') => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'select_content', {
    event_category: 'technology_interest',
    event_label: technology,
    technology: technology,
    context: context,
    content_type: 'technology_filter',
  });
};

// Helper functions
const getPageCategory = (path) => {
  if (path === '/' || path === '') {
    return 'home';
  }
  if (path.includes('/about')) {
    return 'about';
  }
  if (path.includes('/services')) {
    return 'services';
  }
  if (path.includes('/portfolio')) {
    return 'portfolio';
  }
  if (path.includes('/contact')) {
    return 'contact';
  }
  return 'other';
};

const getServiceType = (path) => {
  if (path.includes('/services')) {
    if (path.includes('web')) {
      return 'web_development';
    }
    if (path.includes('mobile')) {
      return 'mobile_development';
    }
    if (path.includes('enterprise')) {
      return 'enterprise_solutions';
    }
    if (path.includes('qa') || path.includes('testing')) {
      return 'quality_assurance';
    }
    return 'general_services';
  }
  return 'none';
};

const getCustomerSegment = (path) => {
  // Infer customer segment based on page content
  if (path.includes('/enterprise')) {
    return 'enterprise';
  }
  if (path.includes('/startup')) {
    return 'startup';
  }
  if (path.includes('/small-business')) {
    return 'small_business';
  }
  if (path === '/' || path === '') {
    return 'mixed';
  }
  return 'general';
};

// Initialize analytics when the module loads
if (typeof window !== 'undefined') {
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeGA4();
      initializeGTM();
    });
  } else {
    initializeGA4();
    initializeGTM();
  }
}
