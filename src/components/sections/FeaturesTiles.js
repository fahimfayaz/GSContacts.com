import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight:500,
    background: 'rgb(233,232,232)',
    background: 'linear-gradient(90deg, rgba(233,232,232,1) 0%, rgba(223,255,249,1) 52%, rgba(230,230,230,1) 100%)',
    borderRadius:'0.6em',
    margin: '1em',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)',
    transition: 'all ease 200ms',
    "&:hover": {
      transform: 'scale(1.03)',
      boxShadow: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
    },
  },
  media: {
    height: 140,
  },
});

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const classes = useStyles();
  
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Contacts International',
    paragraph: 'For over 30 years, we have been the ‘home’ of overseas university applications, assisting self-funded students through the entire university application process. '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="section2" className="container" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="padding-top center-content"/>
          <div className={tilesClasses}>

            <div className="tiles-item" data-reveal-delay="200">
              <Fade left>
                <Card className={classes.root}>
                  <div className="tiles-item-inner" style={{marginTop:'20px',marginBottom:'20px', padding: '0 20px 0 20px'}}>
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16" style={{backgroundColor:"inherit",maxWidth:'160px',maxHeight:'160px'}}>
                          <Image
                            src={require('./../../assets/images/call.png')}
                            alt="Features tile icon 01"
                            width={164}
                            height={164} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8" style={{color:"#1a9657"}}>
                    Agents
                        </h4>
                      <p className="m-0 text-sm">
                      Diversify your campus by attracting qualified students from countries around the world.
                        </p>
                    </div>
                    <div style={{color:"#1a9657",paddingTop: "20px", paddingBottom: "20px"}}>
                      <a>Read More &#43;</a>
                    </div>
                  </div>
                </Card>
              </Fade>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <Fade bottom>
                <Card className={classes.root}>
                  <div className="tiles-item-inner" style={{marginTop:'20px',marginBottom:'20px',padding: '0 20px 0 20px'}}>
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16" style={{backgroundColor:"inherit",maxWidth:'160px',maxHeight:'160px'}}>
                        <Image
                          src={require('./../../assets/images/student.svg')}
                          alt="Features tile icon 02"
                          width={164}
                          height={24} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8" style={{color:"#1a9657"}}>
                      Students 
                        </h4>
                      <p className="m-0 text-sm">
                      Get matched and apply to programs and schools that align with your background, skills, and interests.
                        </p>
                    </div>
                    <div style={{color:"#1a9657",paddingTop: "20px", paddingBottom: "20px"}}>
                      <a>Read More &#43;</a>
                    </div>
                  </div>
                </Card>
              </Fade>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
            <Fade right>
                <Card className={classes.root}>
                  <div className="tiles-item-inner" style={{marginTop:'20px',marginBottom:'20px',padding: '0 20px 0 20px'}}>
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16" style={{backgroundColor:"inherit",maxWidth:'160px',maxHeight:'160px'}}>
                        <Image
                          src={require('./../../assets/images/university.png')}
                          alt="Features tile icon 03"
                          width={164}
                          height={164} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8" style={{color:"#1a9657"}}>
                      Institutes
                        </h4>
                      <p className="m-0 text-sm">
                      Give your students the best chance for success with access to 1,500+ educational institutions.
                        </p>
                    </div>
                    <div style={{color:"#1a9657",paddingTop: "20px", paddingBottom: "20px"}}>
                      <a>Read More &#43;</a>
                    </div>
                  </div>
                </Card>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;