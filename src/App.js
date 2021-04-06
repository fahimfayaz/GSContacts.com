import React, { useRef, useEffect } from 'react';
import { useLocation, Switch , Route} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Uni from './uniPage';
import UniCountry from './UniAustralia';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
// Views
import Home from './views/Home';
import Aboutus from './Aboutus';
import RecruitmentPartners from './RecruitmentPartners';
import InstitutePartners from './InstitutePartners';
import Events from './Events';
import firebase from 'firebase'
import firebaseConfig from './config'
import UniCanada from './UniCanada';
import UniUK from './UniUK';
import UniAustralia from './UniAustralia';
import UniCyprus from './UniCyprus';
import StudentServices from './StudentServices'
import SingleUniPage from './singleUniPage'
import AgentRegistration from './AgentRegistration'
import ApplyNow from './ApplyNow'
import BookAnAppointment from './BookAnAppointment';
import IndieUni from './individualUni'
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const httpLink = new HttpLink({
    uri: "http://contactsint.com:8080/v1/graphql",
  headers: {
    'x-hasura-admin-secret': 'Contacts@123'
  }
  });
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    options: {
      reconnect: true,
   connectionParams: {
        headers: {
          'x-hasura-access-key': 'Contacts@123'
        }
   }}

  });
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
    <>
    <ApolloProvider client={client}>
    <ScrollReveal
      ref={childRef}
      children={() => (
       
        <Switch>

          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

          <AppRoute exact path="/about-us" component={Aboutus} layout={LayoutDefault} />
          <AppRoute exact path="/university" component={Uni} layout={LayoutDefault} />
          <AppRoute exact path="/recruitment-partners" component={RecruitmentPartners} layout={LayoutDefault} />
          <AppRoute exact path="/institute-partners" component={InstitutePartners} layout={LayoutDefault} />
          <AppRoute exact path="/students" component={StudentServices} layout={LayoutDefault} />
          <AppRoute exact path="/events" component={Events} layout={LayoutDefault} />
           <AppRoute exact path="/canada" component={UniCanada} layout={LayoutDefault} />
           <AppRoute exact path={"/university/:id"} component={SingleUniPage} layout={LayoutDefault} />
          <AppRoute exact path={'/uk'} component={UniUK} layout={LayoutDefault} />
          <AppRoute exact path={'/australia'} component={UniAustralia} layout={LayoutDefault} />
          <AppRoute exact path={'/cyprus'} component={UniCyprus} layout={LayoutDefault} /> 
          <AppRoute exact path={'/agent-registration'} component={AgentRegistration} layout={LayoutDefault} /> 
          <AppRoute exact path={'/apply-now'} component={ApplyNow} layout={LayoutDefault} /> 
          <AppRoute exact path={'/indie-uni/:id'} component={IndieUni} layout={LayoutDefault} /> 
          
          
          <AppRoute exact path={'/book-an-appointment'} component={BookAnAppointment} layout={LayoutDefault} /> 
          
        </Switch>
      
      )} />
      </ApolloProvider>
      </>
  );
}

export default App;
