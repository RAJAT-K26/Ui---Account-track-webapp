import React from 'react'
import { styled } from '@mui/material/styles';
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
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import { useDrawingArea } from '@mui/x-charts/hooks';
import Stack from '@mui/material/Stack';
// import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group A', value: 200 },
    { label: 'Group D', value: 400 },
];

export default function Buyers() {
    const [expanded, setExpanded] = React.useState(false);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                <Paper sx={{ width: '100%', maxWidth: 687, padding: 0, borderRadius: "20px" }}>
                    <Grid item xs={12} sx={{ height: '339', width: '687' }}>
                        <Grid container sx={{ justifyContent: 'space-between', marginTop: '2vh' }}>
                            <Grid item xs={6} sx={{ textAlign: 'left', paddingLeft: '2vw', marginBottom: '2vh' }}>
                                <Typography variant="body2" color="#0a3a67">
                                    Buyers
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.8vh" }}> Insights showing Buyers/Tenant added to your list </Typography>
                            </Grid>

                            <Grid item xs={6} sx={{ textAlign: 'right', paddingRight: '8px' }}>
                                <Chip
                                    sx={{
                                        justifyContent: 'center',
                                        marginTop: '1.2vh',
                                        width: 'auto',
                                        height: '4.5vh',
                                        borderRadius: '10px'
                                        , color: '#0a3a67'
                                    }}
                                    avatar={<FilterListRoundedIcon sx={{ color: '#0a3a67' }} />} // Adding the icon inside the Avatar component
                                    label="Filter" />
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel sx={{
                                        fontSize: '2.3vh',
                                        justifyContent: 'center',
                                        marginTop: '-6px'
                                        , color: '#0a3a67'
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
                        <Stack direction="row">
                            <PieChart
                                series={[
                                    {
                                        paddingAngle: 5,
                                        innerRadius: 50,
                                        outerRadius: 80,
                                        data: [{ value: 65, color: '#d3756b', label: 'Total Buyers' }, { value: 40,color: '#f2f5f7', label: 'Closed' }] ,
                                        cx: 40,
                                        cornerRadius: 20,
                                        startAngle: -140
                                    },
                                ]}
                                slotProps={{
                                    legend: {
                                        labelStyle: {
                                            fontSize: 14,
                                            fill: '#d3756b',
                                        },
                                        direction: 'row',
                                        position: { vertical: 'middle', horizontal: 'left' },
                                        padding: 160,
                                        itemGap: 40,
                                    },

                                }}
                                margin={{ right: 2 }}
                                width={200}
                                height={200}
                                legend={{ hidden: false }}
                            />
                            <PieChart
                                series={[
                                    {
                                        paddingAngle: 5,
                                        innerRadius: 50,
                                        outerRadius: 80,
                                        data: [{ value: 75, color: '#ce9461', label: 'Total Tenants' }, { value: 40,color: '#f2f5f7', label: 'Closed' }] ,
                                        cx: 40,
                                        cornerRadius: 20,
                                        startAngle: -140
                                        
                                    },
                                ]}
                                slotProps={{
                                    legend: {
                                        labelStyle: {
                                            fontSize: 14,
                                            fill: '#ce9461',
                                        },
                                        direction: 'row',
                                        position: { vertical: 'middle', horizontal: 'left' },
                                        padding: 150,
                                        itemGap: 40,
                                    },
                                }}
                                margin={{ right: 1 }}
                                width={200}
                                height={200}
                                legend={{ hidden: false }}
                            />
                        </Stack>
                    </Grid>
                </Paper>
            </Box>
        </>
    )
}
