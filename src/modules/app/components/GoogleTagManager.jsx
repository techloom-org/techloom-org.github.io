import { GTM_CONTAINER_ID } from '@/utility/analytics';
import { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    // Only load GTM if GTM_CONTAINER_ID is valid
    if (!GTM_CONTAINER_ID || GTM_CONTAINER_ID === 'GTM-XXXXXXX' || typeof window === 'undefined') {
      console.warn('GTM not loaded: Invalid container ID');
      return;
    }
    // Check if GTM is already loaded
    if (window.dataLayer && window.google_tag_manager) {
      return;
    }

    // GTM Head Script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
    `;
    document.head.appendChild(gtmScript);

    // GTM NoScript fallback
    const gtmNoScript = document.createElement('noscript');
    gtmNoScript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;

    // Insert noscript as first child of body
    if (document.body) {
      document.body.insertBefore(gtmNoScript, document.body.firstChild);
    }

    // Clean up function
    return () => {
      // Remove GTM scripts if component unmounts (though this rarely happens)
      const scripts = document.querySelectorAll(
        `script[src*="googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}"]`
      );
      scripts.forEach((script) => script.remove());

      const noScripts = document.querySelectorAll(
        `noscript iframe[src*="googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}"]`
      );
      noScripts.forEach((noScript) => noScript.parentNode?.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default GoogleTagManager;
