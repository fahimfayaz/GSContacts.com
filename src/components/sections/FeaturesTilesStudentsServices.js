import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
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
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title:
      "Partner with Contacts International for an exceptional application to enrolment experience",
    paragraph:
      "Contacts International is a two sided EdTech marketplace for international student recruitment.  ",
    paragraph1:
      "Free for recruitment partners. Contacts International enables partners to grow their profitability, size and market share.",
  };
  
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618381613/icons8-tenses-50_zsoji4.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="text-color-primary mt-0 mb-8">
                  Simple Application
                  </h4>
                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618381613/icons8-consultation-50_vhudes.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="text-color-primary mt-0 mb-8">
                  Admission Counselling
                  </h4>
                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618381613/icons8-school-50_oa6fvx.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="text-color-primary mt-0 mb-8">
                  1,500+ Schools
                  </h4>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-money-50_t4zgdo.png"
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="text-color-primary mt-0 mb-8">
                  Financial Guidance
                  </h4>
               
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618301369/icons8-passport-50_olt35v.png"
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className=" text-color-primary mt-0 mb-8">
                  Visa Assistance
                  </h4>
                  
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618381613/icons8-online-support-50_yuq52z.png"
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className=" text-color-primary mt-0 mb-8">
                  Continuous Support
                  </h4>
                 
                </div>
              </div>
            </div>

         
           

           
          </div>
         
        </div>
        
      </div>
      
    </section>
   
    
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
