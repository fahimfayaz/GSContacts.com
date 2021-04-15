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
               
               <MediaCard title="Australia" description="Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/uluru-2058380_640_or5a13.jpg" href="/australia"/>


              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
               
              <MediaCard title="America" description="Globally renowned education from the highest-ranked universities and colleges. Chosen by over a million international students every year." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/city-336708_640_wg8kt7.jpg" href="/america" />


              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <MediaCard title="Canada" description="Quality education at low cost. Work during study, post-study work permits, and pro-immigration policies. Diverse, safe, and inclusive." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618425354/toronto-3112508_640_dli9am.jpg" href="/canada"/>


               
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <MediaCard title="United Kingdom" description="World-class universities in the heart of Europe. Shorter study duration to fast-track your career and reduce costs." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/c_scale,h_401/v1618462619/big-ben-westminster-bridge-sunset-london-uk_fzlfyq.jpg" href="/uk"/>


               
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <MediaCard title="Cyprus" description="Cyprus spends more than 7% of its GDP on education, the third-highest share in the European Union after Denmark and Sweden." Image="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618462070/door-2096367_640_o9scvc.jpg" href="/cyprus"/>


               
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
