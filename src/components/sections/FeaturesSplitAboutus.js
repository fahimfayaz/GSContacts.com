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
                <h1 className=" text-color-primary mt-0 mb-12">Confused?</h1>
                <p className="m-0">
                  Interested in studying in the UK, but feel lost with where to
                  start? Register today and one of our counsellors will get in
                  contact with you to discuss your options and help you to
                  decide on the best university and course for you.{" "}
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
                  Know what you want?
                </h1>
                <p className="m-0">
                  You know what you want. You know which course or university
                  you want to pursue, but you're unsure about how to go about
                  applying? Awesome. We would be glad to help you apply and make
                  sure that every stage of your application goes smoothly.{" "}
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
                  src={require("./../../assets/images/features-split-image-02.png")}
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
                Already Applied?
                </h1>
                <p className="m-0">
                You've already applied and feel a bit lost with regards to what is next? Should you apply elsewhere, will you get a scholarship, and how long will it take to find out if you have recieved an offer? This isn't something you want to worry about during your exams. Let one of our counsellors take the weight off your shoulders, and let them deal with it for you. 
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
                  src={require("./../../assets/images/features-split-image-02.png")}
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
