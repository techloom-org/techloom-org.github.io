import {
  CloudSync,
  Code,
  Construction,
  Devices,
  Engineering,
  Psychology,
} from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Code />,
      title: 'Custom Software Development',
      description:
        'We build software solutions tailored to your specific needs across any industry. From concept to deployment, our team delivers high-quality, scalable applications that drive your business forward.',
      features: [
        'Web Applications',
        'Enterprise Software',
        'API Development',
        'System Integration',
      ],
    },
    {
      icon: <Devices />,
      title: 'Multi-Platform Solutions',
      description:
        'Comprehensive development across all platforms and devices. Whether you need mobile apps, web applications, or embedded systems, we have the expertise to deliver on any target platform.',
      features: ['Mobile Apps', 'Web Platforms', 'Desktop Apps', 'Embedded Systems'],
    },
    {
      icon: <Engineering />,
      title: 'Hardware-Based Software',
      description:
        'Specialized in developing software for hardware targets and embedded systems. We create efficient, real-time applications that interface seamlessly with hardware components.',
      features: ['Embedded Systems', 'IoT Solutions', 'Real-time Systems', 'Driver Development'],
    },
    {
      icon: <Psychology />,
      title: 'Technology Consulting',
      description:
        'Expert guidance for your software development journey. Our consultants help you make informed technology decisions, architecture choices, and development strategies.',
      features: [
        'Architecture Design',
        'Technology Selection',
        'Process Optimization',
        'Best Practices',
      ],
    },
    {
      icon: <CloudSync />,
      title: 'DevOps & CI/CD',
      description:
        'Streamline your development workflow with automated CI/CD pipelines and DevOps practices. We help you implement efficient deployment processes, infrastructure management, and continuous integration.',
      features: [
        'CI/CD Pipelines',
        'Automated Deployment',
        'Infrastructure as Code',
        'Monitoring & Logging',
      ],
    },
    {
      icon: <Construction />,
      title: 'Assessment & Optimization',
      description:
        'Comprehensive assessment of existing systems and optimization recommendations. We analyze your current solutions and provide actionable insights for improvement.',
      features: [
        'Code Review',
        'Performance Analysis',
        'Security Assessment',
        'Architecture Review',
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        borderRadius: theme.palette.custom.borderRadius,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 3,
            }}
          >
            What We{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Deliver
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            Our comprehensive suite of services covers every aspect of software development, from
            initial consultation to ongoing support and optimization.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
              key={index}
              sx={{
                ...(services.length === 7 &&
                  index >= 6 && {
                    // Center the last item when we have 7 services
                    '@media (min-width: 1200px)': {
                      maxWidth: '33.333333%',
                      flexBasis: '33.333333%',
                    },
                  }),
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '-8%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}06, transparent)`,
          zIndex: 0,
          animation: 'float 10s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '-5%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}04, transparent)`,
          zIndex: 0,
          animation: 'float 7s ease-in-out infinite reverse',
        }}
      />
    </Box>
  );
};

export default ServicesList;
