import { getAllProjects } from '@/modules/portfolio/data/projectRegistry';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = () => {
  const theme = useTheme();
  const projects = getAllProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.palette.custom.borderRadius,
        background: `linear-gradient(135deg,
          ${theme.palette.background.default} 0%,
          ${theme.palette.background.contrast} 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 2, sm: 3 },
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Featured Projects
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: { xs: 6, sm: 8 },
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.6,
          }}
        >
          Explore our cutting-edge solutions crafted with precision and innovation
        </Typography>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.id}>
              <motion.div variants={itemVariants}>
                <PortfolioCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 300,
          height: 300,
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
          bottom: '15%',
          left: '-5%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}08, transparent)`,
          zIndex: 0,
          animation: 'pulse 6s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default PortfolioGrid;
