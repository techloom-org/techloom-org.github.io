import { projectRegistry } from '@/modules/portfolio/data/projectRegistry';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const PortfolioDetail = () => {
  const { projectId } = useParams();
  const project = projectRegistry[projectId];

  if (!project) {
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
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </Box>
    );
  }

  const ProjectComponent = project.component;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ProjectComponent />
    </Box>
  );
};

export default PortfolioDetail;
