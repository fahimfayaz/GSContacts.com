import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import MediaCard from "./StudentServicesCards"
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturedStudyDestination = ({
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
      "Featured Study Destinations",
    
  };
  
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div style={{marginTop:"100px"}} className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div style-={{marginLeft:"50px", marginRight:"50px"}} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
               
               <MediaCard title="Australia" description="Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/uluru-2058380_640_or5a13.jpg"/>


              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
               
              <MediaCard title="America" description="Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/uluru-2058380_640_or5a13.jpg"/>


              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <MediaCard title="Australia" description="Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/uluru-2058380_640_or5a13.jpg"/>


               
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <MediaCard title="Australia" description="Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/uluru-2058380_640_or5a13.jpg"/>


               
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <MediaCard title="Australia" description="Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/uluru-2058380_640_or5a13.jpg"/>


               
              </div>
            </div>


        

        

         
           

           
          </div>
         
        </div>
        
      </div>
      
    </section>
   
    
  );
};

FeaturedStudyDestination.propTypes = propTypes;
FeaturedStudyDestination.defaultProps = defaultProps;

export default FeaturedStudyDestination;
