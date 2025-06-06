import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { Code, CloudUpload, Security, Speed, BugReport, Group } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useDocumentHead } from '@modules/app/hooks/useDocumentHead';
import { useNavigate } from 'react-router-dom';
import techloomLogo from '@assets/images/logo.png';

const ServicesPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  useDocumentHead({
    title: 'Services - Techloom',
    description: 'Explore Techloom\'s comprehensive technology services including web development, cloud solutions, and quality assurance.',
    icon: techloomLogo,
    keywords: ['services', 'web development', 'cloud solutions', 'quality assurance', 'technology consulting']
  });

  const services = [
    {
      icon: <Code sx={{ fontSize: 40, color: 'text.primary' }} />,
      title: 'Custom Software Development',
      description: 'End-to-end software development services tailored to your specific business needs. From web applications to mobile solutions, we build scalable and maintainable software.'
    },
    {
      icon: <CloudUpload sx={{ fontSize: 40, color: 'text.primary' }} />,
      title: 'Cloud Solutions',
      description: 'Modernize your infrastructure with our cloud migration and optimization services. We help you leverage the power of cloud computing for scalability and efficiency.'
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'text.primary' }} />,
      title: 'Security & Compliance',
      description: 'Protect your digital assets with our comprehensive security solutions. We implement robust security measures and ensure compliance with industry standards.'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'text.primary' }} />,
      title: 'Performance Optimization',
      description: 'Maximize your application\'s performance with our optimization services. We analyze, identify bottlenecks, and implement solutions for optimal user experience.'
    },
    {
      icon: <BugReport sx={{ fontSize: 40, color: 'text.primary' }} />,
      title: 'Quality Assurance',
      description: 'Ensure your software meets the highest quality standards with our comprehensive testing services. From automated testing to manual QA processes.'
    },
    {
      icon: <Group sx={{ fontSize: 40, color: 'text.primary' }} />,
      title: 'Technology Consulting',
      description: 'Get expert guidance on technology decisions and strategy. Our consultants help you choose the right technologies and approaches for your projects.'
    }
  ];

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
            Our Services
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
              lineHeight: 1.6,
              mb: 6
            }}
          >
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </Typography>
        </Box>
      </Box>

      {/* Services Grid */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.contrast',
          px: 2,
        }}
      >
        <Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    p: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.palette.mode === 'dark' ? 3 : 6,
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 3, textAlign: 'center' }}>
                      {service.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontSize: { xs: '1.3rem', sm: '1.5rem' },
                        fontWeight: 'bold',
                        color: 'text.primary',
                        mb: 2,
                        textAlign: 'center'
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        textAlign: 'center',
                        flexGrow: 1
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.default',
          px: 2,
        }}
      >
        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 4
              }}
            >
              Ready to Get Started?
            </Typography>
            
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                color: 'text.secondary',
                mb: 6,
                lineHeight: 1.6
              }}
            >
              Let's discuss how we can help transform your ideas into exceptional digital solutions.
            </Typography>
            
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 6,
                }
              }}
            >
              Contact Us Today
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesPage;
