import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import "./sections.css"
import Fade from 'react-reveal/Fade';
import {Link} from 'react-scroll';
import BookAnAppointment from "../../BookAnAppointment";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const classes = useStyles();
  return (
    <section {...props} className={outerClasses}>
      <div
       
        className="container-sm" >
        <Fade bottom>
        <div className={innerClasses}>
          <div className="hero-content">
            <h3
              className="topline"
              data-reveal-delay="200"
            >
              Study Abroad
              {/* <span className="text-color-primary">Start your Journey With us today</span> */}
            </h3>
            <h1
              // className="font-color-hero mt-0 mb-10 reveal-from-bottom"
              className="headline" 
              data-reveal-delay="200"
            >
              <span>Are you looking to<br></br>study abroad?</span>
              {/* <span className="text-color-primary">Start your Journey With us today</span> */}
            </h1>
            <div className="container-tagline">
              <p
                // className="padding-15p m-0 mb-32 reveal-from-bottom"
                className="tagline"
                data-reveal-delay="400"
              >
                <span>
                 Our CMI accredited undergraduate business degrees have been designed with employability in mind. Developed by experienced degree from us. 
                </span>
              </p>
              <div className="hero-btn" data-reveal-delay="600">
                  <Fade left>
                  <Button
                  className="btn-readmore"
                    wideMobile
                    style={{color:'white',backgroundColor:"rgb(0,165,79)"}}
                  >                  

                  <a style={{textAlign:'left'}} href="/book-an-appointment">Book An Apppointment for Free &#8594;</a>
                  {/* <Link
                    activeClass="active"
                    href="/book-an-appointment"
                    // to={BookAnAppointment}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Book a Free Appointment 	&#8594;</Link> */}
                    </Button>
                  </Fade>

              </div>
            </div>
          </div>
        
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
        </Fade>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;