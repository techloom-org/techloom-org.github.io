import { useProject, useProjectMedia } from '@/firebase/hooks/useProjects';
import { useProjectSections } from '@/firebase/hooks/useSections';
import { Box, Card, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Intro from '../../../components/Intro';
import Section from '../../../components/Section';

const PortfolioDetail = () => {
  const { projectId } = useParams();
  const { project, loading: projectLoading, error: projectError } = useProject(projectId);
  const { media, loading: mediaLoading, error: mediaError } = useProjectMedia(projectId);
  const {
    sections,
    loading: sectionsLoading,
    error: sectionsError,
  } = useProjectSections(projectId);

  if (projectLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (projectError || !project) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
          textAlign: 'center',
        }}
      >
        <div>
          <Typography variant="h4" gutterBottom>
            Project Not Found
          </Typography>
          <Typography color="text.secondary">
            {projectError || "The project you're looking for doesn't exist."}
          </Typography>
        </div>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Project Intro */}
      <Intro
        title={project.title}
        description={project.description}
        images={
          project.images?.map((src, index) => ({
            src,
            alt: `${project.title} - Image ${index + 1}`,
          })) || []
        }
        keyFeatures={project.features}
        techStack={project.technologies}
      />

      <Container maxWidth="lg">
        {/* Project Content */}
        {project.content && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {project.content}
            </Typography>
          </Box>
        )}

        {/* Project Sections */}
        {!sectionsLoading && sections.length > 0 && (
          <Box sx={{ mb: 6 }}>
            {sections.map((section, index) => (
              <Section
                key={section.id}
                title={section.title}
                description={section.description}
                images={section.images || []}
                layout={
                  index % 3 === 0
                    ? 'text-left-images-right'
                    : index % 3 === 1
                      ? 'text-right-images-left'
                      : 'text-top-images-bottom'
                }
              />
            ))}
          </Box>
        )}

        {sectionsError && (
          <Typography color="error" sx={{ mb: 4 }}>
            Error loading project sections: {sectionsError}
          </Typography>
        )}

        {/* Project Media Gallery */}
        {!mediaLoading && media.length > 0 && (
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Project Gallery
            </Typography>
            <Grid container spacing={2}>
              {media.map((mediaItem) => (
                <Grid item xs={12} sm={6} md={4} key={mediaItem.id}>
                  <Card>
                    {mediaItem.type === 'video' ? (
                      <video
                        controls
                        style={{ width: '100%', height: 'auto' }}
                        poster={mediaItem.thumbnailUrl}
                      >
                        <source src={mediaItem.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <CardMedia
                        component="img"
                        image={mediaItem.url}
                        alt={mediaItem.title || `${project.title} media`}
                        sx={{ height: 200, objectFit: 'cover' }}
                      />
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {mediaError && (
          <Typography color="error" sx={{ mt: 2 }}>
            Error loading project media: {mediaError}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default PortfolioDetail;
