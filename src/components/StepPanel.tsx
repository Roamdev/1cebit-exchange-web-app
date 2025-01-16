import Link from 'next/link';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';

import styles from './StepPanel.module.css';

type StepperProps = {
  countPage?: number;
};
const steps = ['Give', 'Get', 'Summary', 'Accept'];

export const StepPanel = ({ countPage = 0 }: StepperProps) => {
  return (
    <>
      <nav className={styles.nav}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={countPage} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  '& .MuiStepIcon-root': {
                    color: '#222121'
                  }
                }}>
                <Link className={styles.link} href="/">
                  <StepLabel
                    sx={{
                      '& .MuiStepLabel-label': {
                        color: 'rgba(85, 27, 51, .8)'
                      },
                      '& .MuiStepLabel-label.Mui-active': {
                        color: 'rgba(225,225,225, .7)'
                      },
                      '& .MuiStepLabel-label.Mui-completed': {
                        color: 'rgba(25, 118, 210, 1)'
                      }
                    }}>
                    {label}
                  </StepLabel>
                </Link>
              </Step>
            ))}
          </Stepper>
        </Box>
      </nav>
    </>
  );
};
