import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import HomeUniSearch from './HomeUniSearch'
import { Grid } from '@material-ui/core';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Why Choose Contacts International?",
    paragraph:
      "WE DO NOT SELL COMMODITIES, WE LAY THE FOUNDATIONS FOR YOUR ACADEMIC FUTURE!                     Contacts International empowers prospective students with all the knowledge required of them to begin their studies in a new country with ease and confidence.  ",
  };

  return (
    <section {...props} className={outerClasses}>
      <div id="section3" className="section-header container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content"/> */}
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <SectionHeader data={sectionHeader} className="center-content" style={{paddingBottom:"10px"}}/>
                {/* <h1 className=" text-color-primary mt-0 mb-12" style={{color:"rgb(0,165,79)"}}>
                  Search from the widest array of universities
                </h1> */}
               
                <h4><HomeUniSearch/>
                </h4>

               
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-01.png")}
                  alt="Features split 01"
                  width={528}
                  height={436}
                />
              </div>
            </div>     

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12"></h3>
                <p className="m-0"></p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                style={{paddingTop:"2px!important"}}
                data-reveal-container=".split-item"
              >
                {/* <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} /> */}
              </div>
            </div>
            <Grid container>
              <Grid item xs={12} sm={6} md={6} lg={6}>
              <div
                className="split-item-content center-content-mobile reveal-from-bottom" >
                  <Image
                    src={require("./../../assets/images/features-split-image-02.png")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
              </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
              <div
                className="split-item-content center-content-mobile reveal-from-right" 
                style={{maxWidth:"528px",
                width:"100%",
                height:"100%",
                backgroundColor:"#00a54f",
                textAlign:"center",
                marginLeft:"1px",
                padding:"20px 20px 20px 20px"
              }}
              >
                <h1 className="mt-0 mb-12" >
                  <span style={{color:"#ffffff",fontSize:"35px",lineHeight:"3"}}>Free Exclusive Webinars</span>
                </h1>
                <h3 style={{borderTop: "2px solid white",marginLeft:"220px",marginRight:"220px",marginTop:"12px",marginBottom:"26px"}}></h3>
                <p className="m-0" style={{color:"#ffffff",fontSize:"15px",paddingLeft: "20px",paddingRight: "20px",paddingBottom:"30px",lineHeight:"1.5"}}>
                  Make sure to register for our Webinars to meet directly with
                  top International Universities from the comfort of your own
                  home. Get the opportunity to speak directly with university
                  representatives and receive first-hand information directly
                  from the University.
                </p>
              </div>
              </Grid>
            </Grid> 
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;