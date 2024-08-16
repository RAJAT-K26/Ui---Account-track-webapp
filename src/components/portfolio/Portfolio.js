import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import BlurOnSharpIcon from '@mui/icons-material/BlurOnSharp';
import TextField from '@mui/material/TextField';
import { useTheme, styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import ShareIcon from '@mui/icons-material/Share';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Portfolio() {
    const [expanded, setExpanded] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const countries = [
        { label: 'Yesterday' },
        { label: '1 week ago' },
        { label: '1 month ago' },
        { label: '3 month ago' },
        { label: '6 month ago' },
        { label: '1 year ago' }
    ];

    const colors = ['#a78295', '#3282b8', '#227c70', '#a3423c'];

    return (
        <Box sx={{marginTop:'5vh'}}>
            
                <Card sx={{ width: '100%', borderRadius: '40px', marginTop: '3vh', paddingTop: '2vh', paddingBottom: '2vh', boxSizing: 'border-box', boxShadow:'4' }}>
                    <Grid container sx={{ justifyContent: 'space-between' }}>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, paddingLeft: { md: '2vw' }, marginBottom: '2vh' }}>
                            <Typography variant="body2" color="#0a3a67">
                                Key Portfolio Indicator
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "1.8vh" }}> Insights showing total clients and properties </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' }, paddingRight: { md: '8px' }, marginBottom: '2vh' }}>
                            <Chip
                                sx={{
                                    justifyContent: 'center',
                                    marginTop: '1.2vh',
                                    width: 'auto',
                                    height: '4.5vh',
                                    borderRadius: '10px'
                                }}
                                avatar={<FilterListRoundedIcon />} // Adding the icon inside the Avatar component
                                label="Filter"
                            />
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
                    <Grid container spacing={2} sx={{ paddingLeft: '4vh', paddingRight: '4vh' }}>
            {[1, 2, 3, 4].map((index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ maxWidth: 345, borderRadius: '30px', margin: 'auto' }}>
                        <CardHeader
                            avatar={<GroupsIcon sx={{ color: colors[index - 1] }} />}
                            action={
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <Typography component="span" sx={{ marginLeft: 'auto', fontSize: '2.3vh', color: colors[index - 1] }}>
                                        Total Clients
                                    </Typography>
                                </Box>
                            }
                            title=""
                        />
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                {/* Use colors array to assign different colors */}
                                <Typography variant="h4" sx={{ color: colors[index - 1] }}>2033 <Chip label="+200 today" sx={{ fontWeight: 'bold', color: '#84cc7e', bgcolor: '#f0f9ef' }} /></Typography>
                            </Box>
                            <Grid container spacing={2} mt={2}>
                                <Grid item xs={4} sx={{ textAlign: 'left' }}>
                                    <Typography variant="body2" color="#0a3a67">
                                        Premium
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: "2.5vh",color: colors[index - 1] }}> 100 </Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                    <Typography variant="body2" color="#0a3a67">
                                        Free
                                    </Typography>
                                    <Typography sx={{ fontSize: "2.5vh",color: colors[index - 1] }}> 150 </Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                    <ArrowCircleRightIcon sx={{ color: colors[index - 1], fontSize: '2.8rem' }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Card sx={{ borderRadius: '10px', marginTop: '-1vh', paddingTop: '1vh', marginBottom: '1vh' }}>
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Typography color="#0a3a67" sx={{ fontSize: '2.4vh', paddingLeft: '2vh' }}>Total AUM&nbsp;</Typography>
                            <Typography color="#0a3a67" sx={{ fontSize: '4vh' }}>₹1,15,04,700</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: { xs: 'center', md: 'right' }, paddingRight: '3vh' }}>
                            <ArrowCircleRightIcon sx={{ color: '#0a3a67', fontSize: '2.8rem' }} />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
                </Card>
            
        </Box>
    );
}
