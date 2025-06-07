import { Box, Chip, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.palette.custom.borderRadius,
        // Gradient background
        background: `linear-gradient(135deg,
          ${theme.palette.custom.gradientStart} 0%,
          ${theme.palette.custom.gradientEnd} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse at center,
            ${theme.palette.primary.main}${theme.palette.mode === 'dark' ? '08' : '12'} 0%,
            transparent 70%)`,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', py: { xs: 6, sm: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="🚀 Our Creative Portfolio"
              sx={{
                mb: { xs: 2, sm: 3 },
                px: 3,
                py: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                bgcolor: `${theme.palette.primary.main}15`,
                border: `1px solid ${theme.palette.primary.main}20`,
                backdropFilter: 'blur(10px)',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                fontWeight: 800,
                lineHeight: { xs: 1.2, sm: 1.1 },
                mb: { xs: 3, sm: 4 },
                background: `linear-gradient(135deg,
                  ${theme.palette.text.primary} 0%,
                  ${theme.palette.primary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
              }}
            >
              Our{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                }}
              >
                Portfolio
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              component="p"
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.8rem' },
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: '800px',
                mx: 'auto',
                mb: { xs: 4, sm: 5 },
              }}
            >
              Discover the innovative solutions we've built for our clients across various
              industries
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
              }}
            >
              {['E-commerce', 'Mobile Apps', 'IoT Solutions', 'Web Platforms'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    fontSize: '0.9rem',
                    bgcolor: `${theme.palette.primary.main}08`,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}05, transparent)`,
          zIndex: 0,
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
            '50%': { transform: 'scale(1.1)', opacity: 0.8 },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}08, transparent)`,
          zIndex: 0,
          animation: 'pulse 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default PortfolioHero;
