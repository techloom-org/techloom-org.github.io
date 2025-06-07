import { getAllProjects } from '@/modules/app/data/projectRegistry';
import techloomLogo from '@assets/images/logo.png';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const projects = getAllProjects();

  useDocumentHead({
    title: 'Portfolio - Techloom',
    description: 'Explore our portfolio of innovative software solutions and digital experiences.',
    icon: techloomLogo,
    keywords: ['portfolio', 'projects', 'software development', 'web development', 'mobile apps'],
  });

  const handleProjectClick = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Our Portfolio
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Discover the innovative solutions we've crafted for our clients across various
            industries
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.id}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: theme.palette.custom?.borderRadius || 2,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                    borderColor: theme.palette.primary.main,
                  },
                }}
                onClick={() => handleProjectClick(project.id)}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={project.thumbnail}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    bgcolor: theme.palette.grey[100],
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Chip
                      label={project.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    {project.featured && (
                      <Chip
                        label="Featured"
                        size="small"
                        color="secondary"
                        sx={{ fontWeight: 'bold' }}
                      />
                    )}
                  </Box>

                  <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3} more`}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.75rem', color: 'text.secondary' }}
                      />
                    )}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                    sx={{
                      py: 1.5,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      borderRadius: theme.palette.custom?.borderRadius || 2,
                    }}
                  >
                    View Project Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
