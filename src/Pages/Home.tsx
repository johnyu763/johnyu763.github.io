import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import kellyWeb from '../images/ws_kelly.png';
import jackWeb from '../images/ws_jack.png';
import salWeb from '../images/ws_salvador.png';
import strava from '../images/events/strava.png';
import eventsNG from '../images/events_ng.jpg'


import discordIcon from '../images/discordicon.png';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import Footer from '../Components/Footer';
import {SubscribeBox} from '../Components/Footer';
import '../Styles/index.css';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { withStyles } from '@material-ui/core/styles';


const introText = `Hi! I'm John Yu, and I'm currently pursuing a Master of Science 
                  degree in Computer Science and Engineering at UCSC. My interests 
                  are in Computer Vision, Embedded Systems, and Cybersecurity. I'm 
                  passionate about learning new things and I have more project ideas 
                  than I have time to do. In my free time I like to play guitar, go to
                  the gym, and cook.`;


const images = [
  {
    url: kellyWeb,
    title: 'Kelly Lue',
    width: '55%',
    place: "1st",
    webURL: "https://kellylue.github.io/",
    index: 0,
    color: "#ffe057",
  },
  {
    url: jackWeb,
    title: 'Jack Whittaker',
    width: '55%',
    place: "2nd",
    webURL: "https://jackw01.github.io/",
    index: 1,
    color: "#1CB5E0",

  },
  {
    url: salWeb,
    title: 'Salvador Villalon',
    width: '55%',
    place: "3rd",
    webURL: "https://salvillalon45.github.io/",
    index: 2,
    color: "#ccd8e3",
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  activePlace:{
    color: "white",
    borderLeft:"16px solid #1CB5E0",
  },
  inactivePlace:{
    color: "grey"
  },
  cardRibbon: {
    position: 'absolute',
    background: 'linear-gradient(to top, #00c6fb, #005bea)',
    width: "15%",
    height: "100%",
    left: 0,
  },
  image: {
    position: 'relative',
    width: "100%",
    height: "45vh",
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  cardTextControl: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 200,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const Accordion = withStyles({
    root: {
        backgroundColor: '#2A6AC6'
    }
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        color: 'white'

    }
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
    root: {
        backgroundColor: 'rgba(33, 32, 40, .5)', 
        color: 'white' 
    }
})(MuiAccordionDetails);

export function Hexagon() {
  return(
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className = "scrollDot"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
    fill="currentColor"
  />
</svg>)
  }


function EventsButton(){
  let history = useHistory();
  const handleClick = (url: string) => {
    history.push('/events');
  };
  return (
    <Button style={{letterSpacing:"2px"}} onClick={() => handleClick('events')}>MORE EVENTS</Button>
  )
}

function scrollSmoothTo(elementId: string) {
  let element = document.getElementById(elementId);
  if(element !== null){
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
}

export default function Home() {
  const classes = useStyles();

  const [websiteActive, setWebsiteActive] = React.useState([true, false, false]);
  const [activeWeb, setActiveWeb] = React.useState(images[0]);
  const setPlace = (index: number) => {
    let temp = [false, false, false];
    temp[index] = true;
    setWebsiteActive(temp);
    setActiveWeb(images[index]);
    };

 

  return(
    <div id="section01" >
      <Box className="bkgdGrad" />
      <Grid container className="scrollButtons"
        direction="column"
        justify="space-evenly"
        spacing = {2}>

        <Grid container item>
          <a className="hexButton scrollButton01" style={{cursor:'pointer'}} onClick={() => scrollSmoothTo('section01')}>
            <Hexagon/>
            <Typography className="hideText" style={{position: 'absolute', fontSize: '1vw', right: '22%', marginTop: '-18%'}}>HOME</Typography>
          </a>
        </Grid>
        <Grid container item>
          <a className="hexButton scrollButton02" style={{cursor:'pointer'}} onClick={() => scrollSmoothTo('section02')}>
            <Hexagon/>
            <Typography className="hideText" style={{position: 'absolute', fontSize: '1vw',right: '22%', marginTop: '-18%'}}>ABOUT ME</Typography>
          </a>
        </Grid>
        <Grid container item>
          <a className="hexButton scrollButton03" style={{cursor:'pointer'}} onClick={() => scrollSmoothTo('section03')}>
            <Hexagon/>
            <Typography className="hideText" style={{position: 'absolute', fontSize: '1vw', right: '28%', marginTop: '-23%'}}>EXPERIENCE</Typography>
          </a>
        </Grid>
        <Grid container item>
          <a className="hexButton scrollButton04" style={{cursor:'pointer'}} onClick={() => scrollSmoothTo('section04')}>
            <Hexagon/>
            <Typography className="hideText" style={{position: 'absolute', fontSize: '1vw', right: '22%', marginTop: '-18%'}}>CONTACT ME</Typography>
          </a>
        </Grid>
      </Grid>
      <Box className="mainBody" style={{position: 'relative', textAlign: 'center', paddingBottom: '15vw'}}>
        <Typography variant="h4" className="advanceText" style={{position: 'absolute', fontSize: '2.1vw', letterSpacing: '6px', top: '46%', left:'30%', transform: 'translate(-50%, 0%)'
}}>HI, I'M</Typography>
        <br/>
        <Typography variant="h4" className="advanceText" style={{position: 'absolute', fontSize: '3.1vw', letterSpacing: '6px', top: '50%', left:'30%', transform: 'translate(-50%, 0%)'
}}>JOHN YU</Typography>
      </Box>
      <Box id="section02" className="introBox">
        <Box style={{position:'absolute', width: '48%', top: '0%', left: '5%'}}>
          <Typography className='mainAboutText' style={{textAlign: "left", position: 'absolute', fontSize: "1.4vw", marginTop: '8%', marginBottom:'10%', marginLeft: '5%'}}>{introText}</Typography>
        </Box>


      </Box>

      <Box style={{marginTop: "10%", paddingLeft: "5%"}}>
        <Box id="section03" style={{paddingLeft:"10%", paddingBottom:"0%"}}>
          
        </Box>
              <Grid container direction="row" justify="space-between" alignItems="center"
                  style={{ width: "90%", textAlign: "center", paddingLeft: "10%", paddingRight: "auto" }}>
                  <Grid container item sm={7} justify = "space-between" >
                     
                      

              
            </Grid>
        <Grid
          container item
          sm = {4}
          justify="flex-end"
          style={{marginLeft:"7%"}}
        >
          
        </Grid>
      </Grid>

      </Box>


      <Box style={{position:"relative", marginTop: "10%", paddingLeft:"15%", paddingBottom:"10%"}}>
        
      </Box>



      <Box style={{position:"relative", marginTop: "25vw"}}>
        <Box className="webBanner" marginBottom="10vw" marginTop="-30vw">
        <ButtonBase
          focusRipple
          // key={activeWeb.title}
          // className={classes.image}
          // focusVisibleClassName={classes.focusVisible}
          style={{
            width: "40%",
            left: "12%",
            top: "4.5%",
            boxShadow: "0px 5px  20px black"
          }}
          // href={activeWeb.webURL}
        >
        

        </ButtonBase>

        </Box>
      </Box>
      <Footer></Footer>
      <Box id="section04"></Box>
      
    </div>
  );
}
