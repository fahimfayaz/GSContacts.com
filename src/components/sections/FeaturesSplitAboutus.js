import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

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
      "WE DO NOT SELL COMMODITIES, WE LAY THE FOUNDATIONS FOR YOUR ACADEMIC FUTURE!                     Global Education empowers prospective students with all the knowledge required of them to begin their studies in a new country with ease and confidence. Our services are professional and personal; the services offered by Global Education include individual counselling, student advice, University/ College applications, accommodation and visa assistance . Our offices are IELTS booking centres, and we are also registered UCAS centre for all UK university applications. ",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="section-header container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h1 className=" text-color-primary mt-0 mb-12">CONTACTS is working with more than 200 universities</h1>
                <p className="m-0">
                 Starting from Australia, Canada, China, Cyprus, Denmark, Finland, Germany, Hungary, India, Malaysia, Netherlands, New Zealand, South Korea, Sweden, Turkey and UK, USA,. {" "}
                </p>
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
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h1 className="mt-0 mb-12 text-color-primary">
                Our philosophy
                </h1>
                <p className="m-0">
                 Is that the student comes first. Our counselors work hard to ensure that they help students make an informed decision about their study choices. {" "}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618555004/teacher-99741_1280_g0yum2.jpg"
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h1 className="mt-0 mb-12 text-color-primary">
              Free Consultancy
                </h1>
                <p className="m-0">
                We strive to be the best Study Abroad Consultants by providing a service to students that is free and unrivaled by any other agencies. For working over 30 years we have placed 20,000 international students in some of the world’s most prestigious Universities & Colleges
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1618555669/office-meeting_rhkrge.png"
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
