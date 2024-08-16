import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from "./components/navbar/navbar"
import Portfolio from './components/portfolio/Portfolio';
import Events from './components/events/Events';
import RedBox from './components/redbox/Redbox';
import Buyers from './components/buyers/Buyers';
import Pipeline from './components/pipeline/Pipeline';
import Booking from './components/booking/Booking';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Ads from './components/Ads/Ads'

const Item = styled(Paper)(({ theme }) => ({


  textAlign: 'center',

}));

function App() {
  return (
    <div className="App" >


      <div style={{ marginTop: '4rem' }}>
        <Dashboard />
      </div>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>


      <Box sx={{ position: 'relative', marginLeft: '42vh', width: '1088px' }}>
        <Stack spacing={2}>
          
            <Grid sx={{ marginLeft: '0vh', height: '385px', width: '1088px' }}>
              <Portfolio ></Portfolio>
            </Grid>
          




          <Grid container spacing={0}>
            <Grid item xs={8} >
              <Grid container  spacing={0}>
                <Grid item xs={12} sx={{ height: '75vh', justifyContent: 'flex-start', marginLeft: '-3.2vh' }}>
                  <RedBox></RedBox>
                </Grid>
                <Grid item xs={12} sx={{   justifyContent: 'flex-start',marginLeft: '-3vh', marginTop: '-4vh', height: '280px', width: '687px', paddingTop:'-4vh' }}>
                <Buyers></Buyers>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{  height: '750px', justifyContent: 'center', alignItems: 'center', marginTop:'-2vh'}}>
              <Events></Events>
            </Grid>
          </Grid>

          <Grid container spacing={0} >
            <Grid item xs={12} sx={{height: '770px', width: '1088px', marginLeft: '-6vh', marginTop:'-7vh'}}>
                <Pipeline></Pipeline>
                

            </Grid>
            <Grid item xs={12} sx={{height: '715px', width: '1088px', marginLeft:'-6vh'}}>
                <Booking></Booking>

            </Grid>
            <Grid item xs={12} sx={{height: '425px', width: '1088px'}}>
                <Ads></Ads>

            </Grid>
          </Grid>



        </Stack>
      </Box>



    </div>
  );
}

export default App;
