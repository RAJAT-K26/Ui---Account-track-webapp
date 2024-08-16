import React from 'react';
import { Box, Grid, Typography, Chip, Paper, InputLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';


const data = [
  [
    { value: 40, label: 'Open Deals' },
    { value: 30, label: 'Pending Deals' },
    { value: 30, label: 'Closed Deals' },
    { value: 30, label: 'Closed Deals' }
  ],
  [
    { value: 50, label: 'New Leads' },
    { value: 25, label: 'Contacted Leads' },
    { value: 25, label: 'Converted Leads' },
    { value: 30, label: 'Closed Deals' }
  ],
];

const size = {
  width: 500,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  const chipYPosition = top + height / 2 + 20; // Adjust Y position of the Chip
  return (
    <React.Fragment>
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
      <Chip
        label="+200 today"
        sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', position: 'absolute', top: chipYPosition }}
      />
    </React.Fragment>
  );
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Redbox() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [age, setAge] = React.useState('');

  function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
      <Box sx={{ maxWidth: 600, flexGrow: 1, width: '500px', paddingLeft: '2vh' }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{data[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          sx={{ width: '20vw' }}
        >
          {data.map((chartData, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <PieChart series={[{ data: chartData, innerRadius: 80 }]} {...size}>
                  <PieCenterLabel>Center label</PieCenterLabel>
                </PieChart>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <Paper sx={{ width: '100%', maxWidth: 687, padding: 0, borderRadius: "30px", boxShadow:'4' }}>
          <Grid container sx={{ justifyContent: 'space-between', height: '420px', marginTop:'2vh' }}>
            <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '2vw', marginBottom: '2vh' }}>
              <Typography variant="body2" color="#0a3a67">
                Red Box <Switch {...label} />
              </Typography>
              <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.8vh" }}> <em>Pending Task that need your immediate attention!</em>
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '8px' }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel sx={{
                  fontSize: '2.3vh',
                  justifyContent: 'center',
                  marginTop: '-6px',
                }} id="demo-select-small-label">Period</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="today"
                  sx={{
                    borderRadius: '7px',
                    height: '4vh',
                    '& .MuiInputLabel-root': {
                      fontSize: '3vh'
                    }
                  }}
                >
                  <MenuItem value="Today">
                    <em>Today</em>
                  </MenuItem>
                  <MenuItem value={10}>1 week ago</MenuItem>
                  <MenuItem value={20}>1 month ago</MenuItem>
                  <MenuItem value={30}>3 months ago</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 687, borderRadius: '30px', marginLeft: '1vw', marginRight: '1vw', height: '327px', marginTop:'-2vh' }}>
                <CardHeader
                  avatar={
                    <Typography variant="body1" sx={{ color: "#0a3a67", paddingBottom: '-5vw' }}>
                      Leads
                    </Typography>
                  }
                  title=""
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  marginTop:'-6vh' }}>
                    <SwipeableTextMobileStepper />
                  </Box>
                  <Grid container spacing={1} mt={0}>
                    <Grid item xs={12} sx={{ textAlign: 'center', bgcolor: 'red', display: 'flex', alignItems: 'flex-start' }}>
                      <Typography sx={{ color: "#0a3a67" }}>New <Chip label="+200 today" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} /></Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
