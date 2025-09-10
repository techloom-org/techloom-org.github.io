import Aurora from '@/design-system/components/Aurora';
import { useAurora } from '@modules/app/hooks/useAurora';
import { Box } from '@mui/material';

const AuroraProvider = ({ children, enabled = true }) => {
  const auroraConfig = useAurora();

  if (!enabled) {
    return children;
  }

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Aurora background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <Aurora
          colorStops={auroraConfig.colorStops}
          blend={auroraConfig.blend}
          amplitude={auroraConfig.amplitude}
          speed={auroraConfig.speed}
        />
      </Box>

      {/* App content */}
      {children}
    </Box>
  );
};

export default AuroraProvider;
