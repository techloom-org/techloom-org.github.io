import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ContactFAQ = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: 'What is the best way to contact you?',
      answer:
        'WhatsApp is your best option for urgent inquiries. We typically respond within an hour and monitor messages throughout the day.',
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes! We offer free initial consultations to understand your project requirements and provide guidance on the best technology approach.',
    },
    {
      question: 'How quickly can you start a new project?',
      answer:
        'We can typically start new projects within 1-2 weeks, depending on our current workload and project complexity. Contact us to discuss your timeline.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Absolutely! We work with clients worldwide and are experienced in remote collaboration using modern communication tools.',
    },
    {
      question: 'How does your pricing work?',
      answer:
        'Our pricing is based on a flat hourly rate. We provide estimated hours and costs upfront, with monthly receipts detailing work completed until project finalization.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8 },
        position: 'relative',
        borderRadius: theme.palette.custom.borderRadius,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Frequently{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Asked Questions
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: 1.5,
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Quick answers to common questions about getting in touch.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 1.5,
                borderRadius: `${theme.palette.custom.borderRadius} !important`,
                border: `1px solid rgba(254, 207, 29, 0.2)`,
                boxShadow: 'none',
                background: `linear-gradient(135deg, rgba(254, 207, 29, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%) !important`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                '&:before': {
                  display: 'none',
                },
                '&:not(:last-child)': {
                  borderBottom: 0,
                },
                '&.Mui-expanded': {
                  margin: '0 0 12px 0',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  borderColor: theme.palette.primary.main,
                  transform: 'translateY(-1px)',
                  background: `linear-gradient(135deg, rgba(254, 207, 29, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%) !important`,
                  '& .MuiAccordionSummary-root': {
                    background: 'rgba(254, 207, 29, 0.05)',
                  },
                },
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  transition: 'all 0.3s ease',
                  background: `linear-gradient(135deg, rgba(254, 207, 29, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%) !important`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMore
                    sx={{
                      color: 'primary.main',
                      fontSize: '1.3rem',
                    }}
                  />
                }
                sx={{
                  py: 1.5,
                  px: 2.5,
                  background: 'transparent',
                  '& .MuiAccordionSummary-content': {
                    margin: '8px 0',
                  },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    transition: 'transform 0.3s ease',
                  },
                  '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 2.5,
                  pb: 2.5,
                  pt: 2,
                  background: 'transparent',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFAQ;
