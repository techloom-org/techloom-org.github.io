import { Container } from '@mui/material';
import Carousel from '../../components/Carousel';
import Intro from '../../components/Intro';
import Video from '../../components/Video';

// Import only existing images
import heroImage1 from '../../../../assets/images/portfolio/tupperware/hero-1-main-interface.png';
import heroImage2 from '../../../../assets/images/portfolio/tupperware/hero-2-product-catalog.png';
import heroImage3 from '../../../../assets/images/portfolio/tupperware/hero-3-cart-orders.png';
import promoVideo from '../../../../assets/videos/portfolio/tupperware/promo.mp4';

// Product Catalog Images (only existing ones)
import catalogBrowse from '../../../../assets/images/portfolio/tupperware/product-catalog-1-browse.png';
import catalogDetails from '../../../../assets/images/portfolio/tupperware/product-catalog-2-details.png';
import catalogSearch from '../../../../assets/images/portfolio/tupperware/product-catalog-3-search.png';
import catalogCategories from '../../../../assets/images/portfolio/tupperware/product-catalog-4-categories.png';

// Shopping Cart Images (only existing ones)
import cartAdd from '../../../../assets/images/portfolio/tupperware/shopping-cart-1-add-items.png';
import cartManage from '../../../../assets/images/portfolio/tupperware/shopping-cart-2-manage.png';
import cartCheckout from '../../../../assets/images/portfolio/tupperware/shopping-cart-3-checkout.png';

// Order Management Images (only existing ones)
import orderHistory from '../../../../assets/images/portfolio/tupperware/order-management-2-history.png';
import orderStatus from '../../../../assets/images/portfolio/tupperware/order-management-3-status.png';

// Payment & Delivery Images (only existing ones)
import paymentConfirmation from '../../../../assets/images/portfolio/tupperware/payment-delivery-2-confirmation.png';
import paymentTracking from '../../../../assets/images/portfolio/tupperware/payment-delivery-3-tracking.png';

// WhatsApp Integration Images (only existing ones)
import whatsappSupport from '../../../../assets/images/portfolio/tupperware/whatsapp-integration-2-support.png';

// Admin Panel Images (only existing ones)
import adminInventory from '../../../../assets/images/portfolio/tupperware/admin-panel-2-inventory.png';
import adminOrders from '../../../../assets/images/portfolio/tupperware/admin-panel-3-orders.png';
import adminSettings from '../../../../assets/images/portfolio/tupperware/admin-panel-5-settings.png';

export default function TupperwareStore() {
  const heroImages = [{ src: heroImage1 }, { src: heroImage2 }, { src: heroImage3 }];

  const keyFeatures = [
    'E-commerce Platform',
    'WhatsApp Integration',
    'Admin Dashboard',
    'Order Management',
    'Payment Processing',
    'Mobile Responsive',
    'Real-time Notifications',
    'Inventory Management',
  ];

  const techStack = ['Android Native', 'Java', 'Firebase', 'WhatsApp API'];

  // Only existing project images
  const allProjectImages = [
    // Product Catalog Images
    { src: catalogBrowse },
    { src: catalogDetails },
    { src: catalogSearch },
    { src: catalogCategories },

    // Shopping Cart Images
    { src: cartAdd },
    { src: cartManage },
    { src: cartCheckout },

    // Order Management Images
    { src: orderHistory },
    { src: orderStatus },

    // Payment & Delivery Images
    { src: paymentConfirmation },
    { src: paymentTracking },

    // WhatsApp Integration
    { src: whatsappSupport },

    // Admin Panel Images
    { src: adminInventory },
    { src: adminOrders },
    { src: adminSettings },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Intro
        title="Tupperware Store"
        description="A comprehensive e-commerce platform designed specifically for Tupperware products, featuring WhatsApp integration, advanced admin dashboard, and seamless shopping experience. Built with modern web technologies to provide customers with an intuitive and efficient online shopping journey."
        images={heroImages}
        keyFeatures={keyFeatures}
        techStack={techStack}
      />

      {/* Promo Video */}
      <Video
        title="Platform Demo"
        description="Watch how the Tupperware Store platform works in action"
        videoSrc={promoVideo}
      />

      {/* All Project Images Gallery */}
      <Carousel title="Project Showcase" images={allProjectImages} />
    </Container>
  );
}
