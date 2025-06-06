import React from 'react';
import { Box, Grid } from '@mui/material';
import { Code, CloudUpload, Security, Speed, BugReport, Group } from '@mui/icons-material';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
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
    <Box
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesList;
