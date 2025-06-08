import { Close, ZoomIn } from '@mui/icons-material';
import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({ title, images, mode = 'gallery' }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  // Single image mode configuration
  const singleModeConfig = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50,
    effect: 'slide',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: true,
    modules: [Pagination, Navigation, Autoplay],
    speed: 800,
    loop: true,
  };

  // Gallery mode configuration (current behavior)
  const galleryModeConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 80,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: true,
    modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
    speed: 500,
    loop: true,
  };

  const swiperConfig = mode === 'single' ? singleModeConfig : galleryModeConfig;

  return (
    <Box sx={{ py: 8, minHeight: '700px' }}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Explore the comprehensive features and interface designs
          </Typography>
        </motion.div>
      )}

      <Box
        sx={{
          padding: '40px 0',
          '& .swiper': {
            width: '100%',
            paddingTop: '60px',
            paddingBottom: '60px',
            overflow: 'visible',
          },
          // Gallery mode styles (current behavior)
          ...(mode === 'gallery' && {
            '& .swiper-slide': {
              background: 'transparent',
              width: '320px',
              height: '550px',
              cursor: 'pointer',
              borderRadius: '20px',
              overflow: 'visible',
              transform: 'scale(0.85)',
              transition: 'transform 0.2s ease',
              opacity: 0.8,
            },
            '& .swiper-slide-active': {
              transform: 'scale(1)',
              opacity: 1,
              zIndex: 10,
            },
            '& .swiper-slide-next, & .swiper-slide-prev': {
              transform: 'scale(0.92)',
              opacity: 0.9,
            },
          }),
          // Single mode styles
          ...(mode === 'single' && {
            '& .swiper-slide': {
              background: 'transparent',
              width: '100%',
              height: '600px',
              cursor: 'pointer',
              borderRadius: '20px',
              overflow: 'visible',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }),
          '& .swiper-pagination-bullet': {
            background: theme.palette.primary.main,
            opacity: 0.3,
            transition: 'all 0.3s ease',
          },
          '& .swiper-pagination-bullet-active': {
            background: theme.palette.primary.main,
            opacity: 1,
            transform: 'scale(1.2)',
          },
          '& .swiper-button-next, & .swiper-button-prev': {
            color: theme.palette.primary.main,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            marginTop: '-25px',
            border: `2px solid ${theme.palette.primary.main}20`,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: theme.palette.primary.main,
              color: 'white',
              transform: 'scale(1.1)',
            },
            '&::after': {
              fontSize: '20px',
              fontWeight: 'bold',
            },
          },
        }}
      >
        <Swiper {...swiperConfig}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box
                onClick={() => handleImageClick(image)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  borderRadius: '20px',
                  overflow: 'visible',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover .image-container': {
                    boxShadow:
                      mode === 'single'
                        ? `0 25px 50px rgba(0,0,0,0.3), 0 0 40px ${theme.palette.primary.main}30`
                        : `0 20px 40px rgba(254, 207, 29, 0.4), 0 0 30px rgba(254, 207, 29, 0.3)`,
                  },
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  className="image-container"
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    display: 'inline-block',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    backgroundColor: 'transparent',
                    border: 'none',
                    ...(mode === 'single' && {
                      width: '100%',
                      maxWidth: '900px',
                      height: '500px',
                    }),
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    sx={{
                      width: mode === 'single' ? '100%' : 'auto',
                      height: mode === 'single' ? '100%' : 'auto',
                      maxWidth: '100%',
                      maxHeight: mode === 'single' ? '100%' : '550px',
                      objectFit: mode === 'single' ? 'cover' : 'contain',
                      display: 'block',
                      border: 'none',
                      outline: 'none',
                    }}
                  />

                  {/* Simple Hover Overlay */}
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0,0,0,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      borderRadius: '20px',
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        color: 'primary.main',
                        width: 50,
                        height: 50,
                        '&:hover': {
                          backgroundColor: 'white',
                        },
                      }}
                    >
                      <ZoomIn sx={{ fontSize: 28 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Clean Image Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth={false}
        fullScreen
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            boxShadow: 'none',
            margin: 0,
            maxWidth: 'none',
            maxHeight: 'none',
            borderRadius: 0,
          },
        }}
      >
        {selectedImage && (
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              padding: 4,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'fixed',
                top: 20,
                right: 20,
                zIndex: 1000,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                width: 50,
                height: 50,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Close sx={{ fontSize: 24 }} />
            </IconButton>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            />
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
