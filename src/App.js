import React, { useRef, useEffect } from 'react';
import { useLocation, Switch , Route} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Uni from './uniPage';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Aboutus from './Aboutus';
import RecruitmentPartners from './RecruitmentPartners';
import InstitutePartners from './InstitutePartners';
import Events from './Events';
import firebase from 'firebase'
import firebaseConfig from './config'

import UniCountry from './uniPage';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>

          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

          <AppRoute exact path="/about-us" component={Aboutus} layout={LayoutDefault} />
          <AppRoute exact path="/university" component={Uni} layout={LayoutDefault} />
          <AppRoute exact path="/recruitment-partners" component={RecruitmentPartners} layout={LayoutDefault} />
          <AppRoute exact path="/institute-partners" component={InstitutePartners} layout={LayoutDefault} />
          <AppRoute exact path="/events" component={Events} layout={LayoutDefault} />
          <AppRoute exact path={'/university/:country'} component={Events} layout={LayoutDefault} />



        </Switch>
      )} />
  );
}

export default App;
