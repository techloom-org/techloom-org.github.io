import { Box, Container, Typography, useTheme } from '@mui/material';

export default function Intro({ title, description, images, keyFeatures, techStack }) {
  const theme = useTheme();

  // Helper function to check if an item is a video
  const isVideo = (src) => {
    if (typeof src !== 'string') {
      return false;
    }
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return (
      videoExtensions.some((ext) => src.toLowerCase().includes(ext)) ||
      src.includes('youtube.com') ||
      src.includes('vimeo.com') ||
      src.includes('youtu.be')
    );
  };

  // Component to render media (image or video)
  const MediaComponent = ({ src, alt, sx }) => {
    if (isVideo(src)) {
      return (
        <Box
          component="video"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          sx={{
            ...sx,
            objectFit: 'cover',
          }}
        />
      );
    }

    return <Box component="img" src={src} alt={alt} sx={sx} />;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        // Define keyframes for animations
        '@keyframes fadeInUp': {
          from: {
            opacity: 0,
            transform: 'translate3d(0, 20px, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        '@keyframes pulse': {
          '0%, 100%': { transform: 'scale3d(1, 1, 1)', opacity: 0.6 },
          '50%': { transform: 'scale3d(1.1, 1.1, 1)', opacity: 0.8 },
        },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 10, sm: 12, md: 5 },
          mb: { xs: 4, sm: 6, md: 5 },
          position: 'relative',
          borderRadius: theme.palette.custom.borderRadius,
          background: `linear-gradient(135deg,
          ${theme.palette.primary.main}08 0%,
          ${theme.palette.background.default} 50%,
          ${theme.palette.primary.main}05 100%)`,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                width: '100%',
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.2, sm: 1.1 },
                  my: { xs: 3, sm: 4 },
                  background: `linear-gradient(135deg,
                    ${theme.palette.text.primary} 0%,
                    ${theme.palette.primary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.125rem', sm: '1.25rem' },
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: { xs: 3, sm: 4 },
                  fontWeight: 400,
                  maxWidth: '650px',
                  mx: 'auto',
                }}
              >
                {description}
              </Typography>

              {/* Compact Tech Stack and Key Features */}
              <Box
                sx={{
                  mb: { xs: 5, sm: 6 },
                  maxWidth: '650px',
                  mx: 'auto',
                }}
              >
                {techStack && techStack.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'text.secondary',
                        letterSpacing: '0.5px',
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      Built With
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.75,
                        justifyContent: 'center',
                      }}
                    >
                      {techStack.map((tech, index) => (
                        <Box
                          key={index}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '12px',
                            bgcolor: `${theme.palette.primary.main}10`,
                            border: `1px solid ${theme.palette.primary.main}20`,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            color: 'text.primary',
                            letterSpacing: '0.2px',
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {keyFeatures && keyFeatures.length > 0 && (
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'text.secondary',
                        letterSpacing: '0.5px',
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      Key Features
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.75,
                        justifyContent: 'center',
                      }}
                    >
                      {keyFeatures.map((feature, index) => (
                        <Box
                          key={index}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '12px',
                            bgcolor: `${theme.palette.secondary.main}10`,
                            border: `1px solid ${theme.palette.secondary.main}20`,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            color: 'text.primary',
                            letterSpacing: '0.2px',
                          }}
                        >
                          {feature}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Images Section */}
            {images && images.length > 0 && (
              <Box
                sx={{
                  width: '100%',
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out 0.2s forwards',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1000px',
                    mx: 'auto',
                    mb: { xs: 6, sm: 8 },
                  }}
                >
                  {/* Main Central Image/Video */}
                  <MediaComponent
                    src={images[0]}
                    alt="Main interface"
                    sx={{
                      position: 'relative',
                      zIndex: 3,
                      width: { xs: 400, sm: 520, md: 640, lg: 720 },
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '28px',
                      boxShadow: `0 32px 64px rgba(0,0,0,0.4)`,
                      border: `2px solid transparent`,
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease',
                      cursor: 'pointer',
                      willChange: 'transform',
                      '&:hover': {
                        transform: 'scale3d(1.05, 1.05, 1)',
                        filter: 'brightness(1.05)',
                      },
                    }}
                  />

                  {/* Background Images/Videos - Dynamically positioned */}
                  {images.slice(1).map((mediaUrl, index) => {
                    const isLeft = index % 2 === 0;
                    const layerIndex = Math.floor(index / 2);
                    const rotationAngle = isLeft ? -(8 + layerIndex * 3) : 12 + layerIndex * 3;
                    const opacity = Math.max(0.2, 0.6 - layerIndex * 0.15);
                    const sizeMultiplier = Math.max(0.6, 1 - layerIndex * 0.1);

                    return (
                      <MediaComponent
                        key={index + 1}
                        src={mediaUrl}
                        alt={`Feature ${index + 2}`}
                        sx={{
                          position: 'absolute',
                          top: `${8 + layerIndex * 4}%`,
                          [isLeft ? 'left' : 'right']: {
                            xs: `${-25 - layerIndex * 5}%`,
                            sm: `${-30 - layerIndex * 5}%`,
                            md: `${-35 - layerIndex * 5}%`,
                          },
                          zIndex: Math.max(1, 2 - layerIndex),
                          width: {
                            xs: 260 * sizeMultiplier,
                            sm: 320 * sizeMultiplier,
                            md: 380 * sizeMultiplier,
                            lg: 420 * sizeMultiplier,
                          },
                          height: 'auto',
                          objectFit: 'contain',
                          borderRadius: `${22 - layerIndex * 2}px`,
                          boxShadow: `0 ${20 - layerIndex * 4}px ${40 - layerIndex * 8}px rgba(0,0,0,${0.3 - layerIndex * 0.05})`,
                          border: `1px solid transparent`,
                          opacity: opacity,
                          transform: `rotate3d(0, 0, 1, ${rotationAngle}deg)`,
                          transition:
                            'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                          cursor: 'pointer',
                          willChange: 'transform, opacity',
                          '&:hover': {
                            opacity: Math.min(1, opacity + 0.3),
                            transform: `rotate3d(0, 0, 1, ${rotationAngle * 0.7}deg) scale3d(1.05, 1.05, 1)`,
                          },
                        }}
                      />
                    );
                  })}
                </Box>
              </Box>
            )}
          </Box>
        </Container>

        {/* Decorative Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}06, transparent)`,
            zIndex: 1,
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.secondary.main}04, transparent)`,
            zIndex: 1,
            animation: 'pulse 6s ease-in-out infinite reverse',
          }}
        />
      </Box>
    </Box>
  );
}
