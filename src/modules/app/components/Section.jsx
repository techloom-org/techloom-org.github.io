import { Close } from '@mui/icons-material';
import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Section({ title, description, images, portrait = false }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();

  // Custom styles for swiper pagination
  const swiperStyles = `
    .custom-swiper .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.3) !important;
      opacity: 1 !important;
      width: 12px !important;
      height: 12px !important;
      transition: all 0.3s ease !important;
      border: none !important;
    }
    .custom-swiper .swiper-pagination-bullet-active {
      background-color: ${theme.palette.primary.main} !important;
      transform: scale(1.2) !important;
    }
    .custom-swiper .swiper-pagination {
      bottom: 20px !important;
    }
  `;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const renderTextContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
          fontWeight: 700,
          mb: 3,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </Typography>
      {Array.isArray(description) ? (
        description.map((paragraph, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
              mb: index < description.length - 1 ? 3 : 0,
            }}
          >
            {paragraph}
          </Typography>
        ))
      ) : (
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {description}
        </Typography>
      )}
    </motion.div>
  );

  const renderImagesSwiper = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Swiper
          effect={portrait ? 'slide' : 'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={portrait ? 'auto' : 'auto'}
          spaceBetween={portrait ? 20 : 30}
          className="custom-swiper"
          breakpoints={
            portrait
              ? {
                  320: {
                    slidesPerView: 1.8,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }
              : undefined
          }
          coverflowEffect={
            !portrait
              ? {
                  rotate: 30,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5,
                  slideShadows: false,
                }
              : undefined
          }
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={portrait ? [Pagination, Autoplay] : [EffectCoverflow, Pagination, Autoplay]}
          style={{
            width: '100%',
            paddingTop: portrait ? '30px' : '50px',
            paddingBottom: portrait ? '60px' : '80px',
          }}
          sx={{
            '& .swiper-pagination-bullet': {
              backgroundColor: 'rgba(255, 255, 255, 0.3) !important',
              opacity: '1 !important',
              width: '12px !important',
              height: '12px !important',
              transition: 'all 0.3s ease !important',
              border: 'none !important',
            },
            '& .swiper-pagination-bullet-active': {
              backgroundColor: `${theme.palette.primary.main} !important`,
              transform: 'scale(1.2) !important',
            },
            '& .swiper-pagination': {
              bottom: '20px !important',
            },
            '& .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)': {
              backgroundColor: 'rgba(255, 255, 255, 0.3) !important',
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: portrait ? '40%' : '80%',
                maxWidth: portrait ? '250px' : 'none',
              }}
            >
              <Box
                onClick={() => handleImageClick(image)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: portrait ? '0px' : '20px',
                  overflow: 'hidden',
                  width: '100%',
                  height: portrait ? { xs: '350px', sm: '400px', md: '450px' } : '100%',
                  position: 'relative',
                  background: 'transparent',
                  ...(portrait && {
                    aspectRatio: '9/16', // Mobile portrait aspect ratio
                    maxHeight: { xs: '350px', sm: '400px', md: '450px' },
                    maxWidth: { xs: '200px', sm: '225px', md: '250px' },
                    mx: 'auto',
                  }),
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Section image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: portrait ? 'contain' : 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    borderRadius: '0px',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    );
  };

  return (
    <Box sx={{ py: 8 }}>
      <style>{swiperStyles}</style>
      <Box sx={{ mb: 6 }}>{renderTextContent()}</Box>
      {renderImagesSwiper()}

      {/* Image Modal */}
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
              src={selectedImage}
              alt={`Selected`}
              style={{
                maxWidth: portrait ? '80%' : '90%',
                maxHeight: portrait ? '95%' : '90%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                ...(portrait && {
                  width: 'auto',
                  height: 'auto',
                }),
              }}
            />
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
