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
import ButtonGroup from "../elements/ButtonGroup";
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
              className="font-color-hero padding-15p mt-0 mb-16"
              data-reveal-delay="200"
            >
              Are you looking to study abroad?
            
            </h3>
            <div className="container-xs">
              <p
                className="padding-15p m-0 mb-32 "
                data-reveal-delay="400"
              >
                <span className="font-color-hero ">
                  Start your Journey With us today
                </span>
              </p>
              <div className="" data-reveal-delay="600">
                <ButtonGroup  >
                  <Button
                className="btn"
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/book-an-appointment"
                  >
                 Book an Appointment	
                  </Button>
            
                </ButtonGroup>
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