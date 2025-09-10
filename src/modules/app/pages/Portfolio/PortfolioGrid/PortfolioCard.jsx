import { Launch } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, IconButton, Stack, Typography } from '@mui/material';
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
          height: '100%',
          borderRadius: theme.palette.custom.borderRadius,
          bgcolor: 'background.paper',
          border: `1px solid ${theme.palette.divider}`,
          cursor: 'pointer',
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
            borderColor: theme.palette.primary.main,
            '& .project-thumbnail': {
              transform: 'scale(1.05)',
            },
            '& .hover-overlay': {
              opacity: 1,
            },
          },
        }}
        onClick={handleClick}
      >
        {/* Project Thumbnail */}
        <Box
          sx={{
            height: 280,
            position: 'relative',
            overflow: 'hidden',
            bgcolor: theme.palette.grey[100],
          }}
        >
          <Box
            className="project-thumbnail"
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${project.images?.[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {/* Hover Overlay */}
          <Box
            className="hover-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg,
                ${theme.palette.primary.main}90,
                ${theme.palette.secondary.main}70)`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              sx={{
                bgcolor: 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: 'white',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Launch />
            </IconButton>
          </Box>

          {/* Featured Badge */}
          {project.featured && (
            <Chip
              label="Featured"
              color="primary"
              size="small"
              sx={{
                position: 'absolute',
                top: 30,
                right: 30,
                bgcolor: theme.palette.primary.main,
                color: 'white',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            />
          )}
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              color: 'text.primary',
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 3,
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </Typography>

          {/* Technology Stack */}
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
            {project.technologies?.slice(0, 3).map((tech) => (
              <Chip key={tech} label={tech} size="small" variant="outlined" />
            ))}
            {project.technologies?.length > 3 && (
              <Chip
                label={`+${project.technologies.length - 3}`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.grey[400],
                  color: theme.palette.text.secondary,
                  fontSize: '0.75rem',
                }}
              />
            )}
          </Stack>

          {/* Date */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '0.8rem',
              }}
            >
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;
