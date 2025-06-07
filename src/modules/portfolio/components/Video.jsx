import { Close, Fullscreen, VolumeOff, VolumeUp } from '@mui/icons-material';
import { Box, Dialog, Fab, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Video({ title, videoSrc, description }) {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    handleOpen();
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (open && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
  }, [open]);

  return (
    <Box sx={{ py: 8 }}>
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
        </motion.div>
      )}

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              opacity: 0.9,
            }}
          >
            {description}
          </Typography>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '1000px',
            mx: 'auto',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 8px 24px rgba(0,0,0,0.4)'
                : '0 8px 24px rgba(0,0,0,0.12)',
            background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}05)`,
            border: `1px solid ${theme.palette.primary.main}15`,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
            willChange: 'transform',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 16px 40px rgba(0,0,0,0.6)'
                  : '0 16px 40px rgba(0,0,0,0.15)',
              '& .video-overlay': {
                opacity: 1,
              },
              '& .controls-overlay': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
          onClick={handleOpen}
        >
          {/* Auto-playing Silent Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '300px',
              maxHeight: '500px',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Elegant Gradient Overlay */}
          <Box
            className="video-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(
                45deg,
                rgba(0,0,0,0.1) 0%,
                transparent 30%,
                transparent 70%,
                rgba(138, 43, 226, 0.2) 100%
              )`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          />

          {/* Floating Controls Overlay */}
          <Box
            className="controls-overlay"
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              display: 'flex',
              gap: 1,
              opacity: 0,
              transform: 'translateY(10px)',
              transition: 'all 0.2s ease',
            }}
          >
            <Fab
              size="small"
              onClick={toggleMute}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: theme.palette.primary.main,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isMuted ? <VolumeOff /> : <VolumeUp />}
            </Fab>

            <Fab
              size="small"
              onClick={handleFullscreen}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: theme.palette.primary.main,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Fullscreen />
            </Fab>
          </Box>

          {/* Elegant Title Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
              color: 'white',
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              {title}
            </Typography>
            {description && (
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  opacity: 0.9,
                  textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

          {/* Decorative Corner Elements - Simplified */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 40,
              height: 40,
              background: `${theme.palette.primary.main}30`,
              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 40,
              height: 40,
              background: `${theme.palette.primary.main}30`,
              clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
            }}
          />
        </Box>
      </motion.div>

      {/* Enhanced Fullscreen Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            margin: 0,
            maxHeight: '100vh',
            maxWidth: '100vw',
            borderRadius: 0,
            '& .MuiDialogContent-root': {
              padding: 0,
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'fixed',
              top: { xs: 10, sm: 20 },
              right: { xs: 10, sm: 20 },
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.8)',
              color: 'white',
              width: { xs: 48, sm: 56 },
              height: { xs: 48, sm: 56 },
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.9)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <Close sx={{ fontSize: 28 }} />
          </IconButton>

          <video
            ref={modalVideoRef}
            controls
            autoPlay
            loop
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Dialog>
    </Box>
  );
}
