import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import techloomLogo from '@assets/images/logo.png';

const AboutPage = () => {
  const theme = useTheme();

  useDocumentHead({
    title: 'About Us - Techloom',
    description: 'Learn about Techloom\'s mission, vision, and the team behind our innovative technology solutions.',
    icon: techloomLogo,
    keywords: ['about techloom', 'company', 'team', 'mission', 'vision', 'technology startup']
  });

  return (
    <Box sx={{ flexGrow: 1, pt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.default',
          px: 2,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 4
            }}
          >
            About Techloom
          </Typography>
          
          <Typography
            variant="h4"
            component="p"
            align="center"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We're a forward-thinking technology startup committed to pushing the boundaries of what's possible in software engineering.
          </Typography>
        </Box>
      </Box>

      {/* Mission & Vision Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.contrast',
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

      {/* Values Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.default',
          px: 2,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 6
            }}
          >
            Our Values
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    color: 'text.primary',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  Excellence
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  We strive for excellence in every line of code, every design decision, and every client interaction.
                </Typography>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    color: 'text.primary',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  Innovation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  We embrace new technologies and approaches, constantly pushing boundaries to deliver cutting-edge solutions.
                </Typography>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    color: 'text.primary',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  Integrity
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  We build trust through transparency, honesty, and delivering on our promises consistently.
                </Typography>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    color: 'text.primary',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  Collaboration
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}
                >
                  We believe in the power of teamwork, both within our team and in partnership with our clients.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
