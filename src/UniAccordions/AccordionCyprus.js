import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><span style={{display:"inline"}} width="50px"><img style={{display:"inline"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301370/icons8-uk-news-50_tnflm9.png"/>{" "}<span style={{marginBottom:"30px!important"}}>About Cyprus</span></span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          United Kingdom is the most popular study destination in the world because of it’s modern & conducive learning environment and quality of education that provide a vibrant, creative and challenging environment to develop versatility in your attitude . UK qualifications are recognized and respected throughout the world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><img style={{display:"inline"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-money-50_t4zgdo.png"/>{" "}Tuition Fees, Living Cost  &  Scholarship</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><img style={{display:"inline"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-passport-50_olt35v.png"/>{" "}Student Visa Requirements for the Cyprus </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><img style={{display:"inline"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-study-50_bcyszh.png"/>{" "}Study Option in Cyprus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><img style={{display:"inline"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-payroll-50_dauuve.png"/>{" "}Employment prospects in the Cyprus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><img style={{display:"inline"}} src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-airplane-departure-50_dz8p1y.png"/>{" "}Before You Leave</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
{/*      
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}