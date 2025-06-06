import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const MissionVision = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Box>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 3,
                p: 2
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem' },
                    fontWeight: 'bold',
                    color: 'text.primary',
                    mb: 3
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8
                  }}
                >
                  To deliver engineering solutions that not only meet but exceed expectations, 
                  driving innovation and creating lasting value for our clients and their users. 
                  We believe in the power of technology to transform businesses and improve lives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 3,
                p: 2
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem' },
                    fontWeight: 'bold',
                    color: 'text.primary',
                    mb: 3
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8
                  }}
                >
                  To become the go-to technology partner for companies seeking exceptional quality 
                  and innovative solutions. We envision a future where our engineering excellence 
                  sets new industry standards and inspires others to reach beyond conventional limits.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MissionVision;
