import CardSwap, { Card as SwapCard } from '@/design-system/components/CardSwap';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PortfolioCard = ({ project }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portfolio/${project.id}`);
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        elevation={0}
        sx={{
          height: 350, // Increased height to prevent cutoff
          borderRadius: theme.palette.custom.borderRadius,
          bgcolor: 'transparent', // Remove white background
          border: 'none', // Remove borders
          cursor: 'pointer',
          overflow: 'visible', // Changed from hidden to visible
          position: 'relative',
          display: 'flex',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)', // Subtle lift effect instead of shadow
          },
        }}
        onClick={handleClick}
      >
        {/* Content - Left Side */}
        <CardContent
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            bgcolor: 'transparent',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'text.primary',
                lineHeight: 1.3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6,
                fontSize: '1.1rem',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </Typography>

            {/* Technology Stack */}
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
              {project.technologies?.slice(0, 4).map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="medium"
                  variant="outlined"
                  sx={{
                    fontWeight: 500,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    bgcolor: 'transparent',
                    '&:hover': {
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                    },
                  }}
                />
              ))}
              {project.technologies?.length > 4 && (
                <Chip
                  label={`+${project.technologies.length - 4}`}
                  size="medium"
                  variant="outlined"
                  sx={{
                    borderColor: theme.palette.grey[400],
                    color: theme.palette.text.secondary,
                    bgcolor: 'transparent',
                  }}
                />
              )}
            </Stack>
          </Box>

          {/* Footer with Date and Status */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              mt: 'auto', // Push to bottom
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}
            >
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: project.status === 'completed' ? 'success.main' : 'warning.main',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                {project.status}
              </Typography>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: project.status === 'completed' ? 'success.main' : 'warning.main',
                }}
              />
            </Box>
          </Box>
        </CardContent>

        {/* Project Images with CardSwap - Right Side */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'transparent',
            p: 3,
          }}
        >
          {project.images && project.images.length > 0 ? (
            <CardSwap
              height={250}
              cardDistance={40}
              verticalDistance={50}
              delay={4000}
              skewAmount={4}
              easing="elastic"
            >
              {project.images.map((image, index) => (
                <SwapCard
                  key={index}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '30px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  }}
                />
              ))}
            </CardSwap>
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.grey[800],
                color: theme.palette.text.secondary,
                borderRadius: theme.palette.custom.borderRadius,
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              No Image Available
            </Box>
          )}
        </Box>
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;
