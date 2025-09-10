import { Close, ZoomIn } from '@mui/icons-material';
import { Box, Dialog, Grid, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Section({
  title,
  description,
  images,
  layout = 'text-left-images-right', // 'text-left-images-right', 'text-right-images-left', 'text-top-images-bottom'
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();

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
          textAlign: layout === 'text-top-images-bottom' ? 'center' : 'left',
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
          color: 'text.secondary',
          lineHeight: 1.6,
          textAlign: layout === 'text-top-images-bottom' ? 'center' : 'left',
          maxWidth: layout === 'text-top-images-bottom' ? '800px' : 'none',
          mx: layout === 'text-top-images-bottom' ? 'auto' : 0,
        }}
      >
        {description}
      </Typography>
    </motion.div>
  );

  const renderImagesGrid2 = () => {
    // Function to get size and height for different image positions
    const getImageConfig = (index, _) => {
      // First image is always bigger
      if (index === 0) {
        return { size: { xs: 12, sm: 12, md: 12 }, height: '400px' }; // Big first image
      }

      // All other images are the same size
      return { size: { xs: 6, sm: 6, md: 4 }, height: '250px' }; // Same size for all others
    };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Grid container spacing={2}>
          {images.map((image, index) => {
            const config = getImageConfig(index, images.length);
            return (
              <Grid size={config.size} key={index}>
                <Box
                  onClick={() => handleImageClick(image)}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                    height: config.height,
                    aspectRatio: '1', // Force square aspect ratio
                    background: theme.palette.background.paper,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.02)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.2), 0 0 30px ${theme.palette.primary.main}20`,
                      '& .overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt || `Section image ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />

                  {/* Hover Overlay */}
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
                      transition: 'opacity 0.3s ease',
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
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <ZoomIn sx={{ fontSize: 28 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case 'text-right-images-left':
        return (
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>{renderImagesGrid2()}</Grid>
            <Grid size={{ xs: 12, md: 6 }}>{renderTextContent()}</Grid>
          </Grid>
        );

      case 'text-top-images-bottom':
        return (
          <Box>
            <Box sx={{ mb: 6 }}>{renderTextContent()}</Box>
            {renderImagesGrid2()}
          </Box>
        );

      case 'text-left-images-right':
      default:
        return (
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>{renderTextContent()}</Grid>
            <Grid size={{ xs: 12, md: 6 }}>{renderImagesGrid2()}</Grid>
          </Grid>
        );
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      {renderLayout()}

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
