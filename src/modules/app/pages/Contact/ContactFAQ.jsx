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
      question: 'What is the best way to contact you for urgent inquiries?',
      answer:
        'For urgent inquiries, WhatsApp is your best option. We monitor WhatsApp messages throughout the day and typically respond within an hour. You can also call us directly during business hours (Egypt timezone).',
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes! We offer free initial consultations to understand your project requirements and provide guidance on the best technology approach. Contact us through any channel to schedule your consultation.',
    },
    {
      question: 'What information should I include when contacting you?',
      answer:
        "To help us provide the most relevant assistance, please include: your project type (web, mobile, desktop, etc.), timeline expectations, budget range, and any specific requirements or challenges you're facing.",
    },
    {
      question: 'How quickly can you start a new project?',
      answer:
        'Depending on our current workload and project complexity, we can typically start new projects within 1-2 weeks. For urgent projects, we offer expedited start options. Contact us to discuss your timeline.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Absolutely! We work with clients worldwide and are experienced in remote collaboration. We use modern communication tools and project management systems to ensure smooth international partnerships.',
    },
    {
      question: 'What are your business hours?',
      answer:
        "Our business hours are Sunday to Thursday, 9 AM to 6 PM (Egypt timezone). However, WhatsApp messages are monitored outside business hours for urgent matters, and we're flexible with international client time zones.",
    },
    {
      question: 'How does your pricing work?',
      answer:
        "Our pricing is based on a flat hourly rate that varies according to the project requirements and complexity. After our initial discussion, we provide an estimated number of hours needed for your project along with the total estimated cost. Throughout the project, we provide monthly receipts detailing the hours worked and their associated costs until the project is finalized. This transparent approach ensures you always know exactly what you're paying for.",
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
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
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
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Quick answers to common questions about getting in touch with our team.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: `${theme.palette.custom.borderRadius} !important`,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                bgcolor: 'background.paper',
                '&:before': {
                  display: 'none',
                },
                '&:not(:last-child)': {
                  borderBottom: 0,
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.12)',
                  borderColor: theme.palette.primary.main,
                  transform: 'translateY(-2px)',
                  '& .MuiAccordionSummary-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                  },
                },
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMore
                    sx={{
                      color: 'primary.main',
                      fontSize: '1.5rem',
                    }}
                  />
                }
                sx={{
                  py: 2.5,
                  px: 3,
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
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
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 0,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: '1rem',
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
