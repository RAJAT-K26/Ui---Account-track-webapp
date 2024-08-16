import React from 'react'
import { Box, Grid, Typography, Paper, InputLabel } from '@mui/material';

import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import GroupsIcon from '@mui/icons-material/Groups';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { LineChart } from '@mui/x-charts/LineChart';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { PieChart } from '@mui/x-charts/PieChart';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import { useDrawingArea } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

const Item = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    backgroundColor: '#fff',
    color: '#000',
});
const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group D', value: 200 },
];

export default function Booking() {

    const [expanded, setExpanded] = React.useState(false);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                <Item sx={{ width: '100%', maxWidth: 993, padding: 0, borderRadius: "20px" }}>
                    <Paper sx={{ width: '100%', maxWidth: 993, padding: 0, borderRadius: "20px" }}>
                        <Grid item xs={12} sx={{ height: '339', width: '687', paddingTop: '2vh' }}>
                            <Grid container sx={{ justifyContent: 'space-between' }}>
                                <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '2vw', marginBottom: '2vh' }}>
                                    <Typography variant="body2" color="#0a3a67">
                                        Pipeline
                                    </Typography>
                                    <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.8vh" }}> Insights showing total clients and properties </Typography>
                                </Grid>

                                <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '8px' }}>
                                    <Chip
                                        sx={{
                                            justifyContent: 'center',
                                            marginTop: '1.2vh',
                                            width: 'auto',
                                            height: '4.5vh',
                                            borderRadius: '10px'
                                        }}
                                        avatar={<FilterListRoundedIcon />} // Adding the icon inside the Avatar component
                                        label="Filter" />
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel sx={{
                                            fontSize: '2.3vh',
                                            justifyContent: 'center',
                                            marginTop: '-6px',
                                            // Adjust the value to move the label upwards
                                        }} id="demo-select-small-label">Period</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="today"
                                            onChange={handleChange}
                                            sx={{
                                                borderRadius: '7px',
                                                height: '4vh',
                                                '& .MuiInputLabel-root': { // Selecting the label element
                                                    fontSize: '3vh' // Adjust the font size as needed
                                                }
                                            }}
                                        >
                                            <MenuItem value="Today">
                                                <em>Today</em>
                                            </MenuItem>
                                            <MenuItem value={10}>1 week ago</MenuItem>
                                            <MenuItem value={20}>1 month ago</MenuItem>
                                            <MenuItem value={30}>3 month ago</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Chip
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'center', width: '6vw', fontSize: '0.8vw' }}>
                                                <span>View Details</span>
                                                <ArrowRightAltOutlinedIcon sx={{ ml: 1 }} /> {/* Add margin to separate text and icon */}
                                            </Box>
                                        }
                                        variant="outlined"
                                        sx={{ borderRadius: '6px', height: '3.7vh', marginTop: '0.7vh' }}
                                    />

                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} >
                                <Grid xs={12}>

                                    <Item>


                                        <Card sx={{ width: '100%', borderRadius: '10px', marginTop: '1vh', paddingTop: '2vh', paddingBottom: '2vh', marginBottom: '3vh' }}>
                                            <Grid container sx={{ justifyContent: 'space-between' }}>
                                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Typography color="#0a3a67" sx={{ marginLeft: '2vh', fontSize: '2.4vh' }}>Total AUM&nbsp;   </Typography>

                                                    <Typography color="#0a3a67" sx={{ fontSize: '4vh' }}>₹1,15,04,700</Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' }, paddingRight: { sm: '3vh' } }}>
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/Graph_iamfn-removebg-preview.png'}
                                                        alt="Graph"
                                                        style={{ maxWidth: '100%', height: 'auto' }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Card>



                                        <Grid container spacing={1} sx={{ paddingLeft: '4vh', paddingRight: '4vh' }}>


                                            {/* card 1 */}

                                            <ThemeProvider theme={theme}>
                                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                                    <Card sx={{ maxWidth: 345, borderRadius: '30px', maxHeight: '116px' }}>
                                                        <CardHeader
                                                            avatar={<Typography sx={{ color: "#0a3a67" }}>Onboarding</Typography>}
                                                            title=""
                                                            sx={{ marginTop: { xs: '-2vh', sm: '-1vh' } }}
                                                        />
                                                        <CardContent>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: { xs: '-14vh', sm: '-12vh', md: '-6vh' } }}>
                                                                <Typography sx={{ color: "#0a3a67", fontSize: { xs: '2vw', sm: '3vh', md: '4vh' } }}>₹2.30Cr</Typography>
                                                                <Chip label={<TrendingUpRoundedIcon />} sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                            </Box>
                                                            <Grid container spacing={0} mt={1}>
                                                                <Grid item xs={12} sm={6} sx={{ textAlign: 'left', marginTop: { xs: '-1vh', sm: '0vh' } }}>
                                                                    <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop: { xs: '-4vh', sm: '-3vh' } }}>
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', marginRight: '2px' }} />
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>


                                                {/* card 2 */}


                                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                                    <Card sx={{ maxWidth: 345, borderRadius: '30px', maxHeight: '116px' }}>
                                                        <CardHeader
                                                            avatar={<Typography sx={{ color: "#69779c" }}>Onboarding</Typography>}
                                                            title=""
                                                            sx={{ marginTop: { xs: '-2vh', sm: '-1vh' } }}
                                                        />
                                                        <CardContent>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: { xs: '-4vh', sm: '-5vh' } }}>
                                                                <Typography sx={{ color: "#69779c", fontSize: { xs: '2vh', sm: '3vh', md: '4vh' } }}>₹2.30Cr</Typography>
                                                                <Chip label={<TrendingUpRoundedIcon />} sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                            </Box>
                                                            <Grid container spacing={0} mt={1}>
                                                                <Grid item xs={12} sm={6} sx={{ textAlign: 'left', marginTop: { xs: '-1vh', sm: '0vh' } }}>
                                                                    <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop: { xs: '-4vh', sm: '-3vh' } }}>
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', marginRight: '2px' }} />
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>

                                                {/* card 3 */}

                                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                                    <Card sx={{ maxWidth: 345, borderRadius: '30px', maxHeight: '116px' }}>
                                                        <CardHeader
                                                            avatar={<Typography sx={{ color: "#35a29f" }}>Onboarding</Typography>}
                                                            title=""
                                                            sx={{ marginTop: { xs: '-2vh', sm: '-1vh' } }}
                                                        />
                                                        <CardContent>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: { xs: '-4vh', sm: '-5vh' } }}>
                                                                <Typography sx={{ color: "#35a29f", fontSize: { xs: '2vh', sm: '3vh', md: '4vh' } }}>₹2.30Cr</Typography>
                                                                <Chip label={<TrendingUpRoundedIcon />} sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                            </Box>
                                                            <Grid container spacing={0} mt={1}>
                                                                <Grid item xs={12} sm={6} sx={{ textAlign: 'left', marginTop: { xs: '-1vh', sm: '0vh' } }}>
                                                                    <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop: { xs: '-4vh', sm: '-3vh' } }}>
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', marginRight: '2px' }} />
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>



                                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                                    <Card sx={{ maxWidth: 345, borderRadius: '30px', maxHeight: '116px' }}>
                                                        <CardHeader
                                                            avatar={<Typography sx={{ color: "#b958a5" }}>Onboarding</Typography>}
                                                            title=""
                                                            sx={{ marginTop: { xs: '-2vh', sm: '-1vh' } }}
                                                        />
                                                        <CardContent>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: { xs: '-4vh', sm: '-5vh' } }}>
                                                                <Typography sx={{ color: "#b958a5", fontSize: { xs: '2vh', sm: '3vh', md: '4vh' } }}>₹2.30Cr</Typography>
                                                                <Chip label={<TrendingUpRoundedIcon />} sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                            </Box>
                                                            <Grid container spacing={0} mt={1}>
                                                                <Grid item xs={12} sm={6} sx={{ textAlign: 'left', marginTop: { xs: '-1vh', sm: '0vh' } }}>
                                                                    <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop: { xs: '-4vh', sm: '-3vh' } }}>
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef', marginRight: '2px' }} />
                                                                        <Chip label="+200" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            </ThemeProvider>

                                            <LineChart
                                                yAxis={[{ data: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200] }]}
                                                series={[
                                                    { curve: "linear", data: [0, 20, 15, 40, 36, 70] },
                                                    { curve: "linear", data: [0, 40, 39, 76, 22, 64] },
                                                    { curve: "linear", data: [0, 58, 22, 60, 37, 60] },
                                                    { curve: "linear", data: [6, 33, 77, 95, 60, 74] },
                                                ]}
                                                height={300}
                                                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                                                grid={{ vertical: true, horizontal: true }}
                                            />








                                            {/* <Grid item xs={12}>
    <Grid container sx={{ justifyContent: 'space-between' }}>
        <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '8px' }}>
            <Typography variant="body2" color="#0a3a67">
                Key Portfolio Indicator
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.8vh" }}> Insights showing total clients and properties </Typography>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '8px' }}>
        <Chip label="Filter" sx={{justifyContent:'center',marginTop:'1.2vh', width:'6vw', height:'4.5vh', borderRadius: '10px' }} />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel sx={{
                    fontSize: '2.3vh',
                    justifyContent: 'center',
                    marginTop: '-6px',
                    // Adjust the value to move the label upwards
                }} id="demo-select-small-label">Period</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="today"
                    onChange={handleChange}
                    sx={{
                        borderRadius: '7px',
                        height: '4vh',
                        '& .MuiInputLabel-root': { // Selecting the label element
                            fontSize: '3vh' // Adjust the font size as needed
                        }
                    }}
                >
                    <MenuItem value="Today">
                        <em>Today</em>
                    </MenuItem>
                    <MenuItem value={10}>1 week ago</MenuItem>
                    <MenuItem value={20}>1 month ago</MenuItem>
                    <MenuItem value={30}>3 month ago</MenuItem>
                </Select>



            </FormControl>

        </Grid>
    </Grid>
</Grid> */}


                                        </Grid>






                                    </Item>
                                </Grid>

                            </Grid>
                            <Stack direction="row">


                            </Stack>
                        </Grid>
                    </Paper>
                </Item>
            </Box>
        </>
    )
}
