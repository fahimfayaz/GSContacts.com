import React from 'react';
//import TopNavMenu from '../components/layout/TopNav'
import NavMenu from '../components/layout/Navbar2';

const LayoutDefault = ({ children }) => (
  <>
{/* <TopNavMenu/> */}
<NavMenu/>
    {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
    <main className="site-content" style={{overflow:"hidden"}}>
      {children}
    </main>
  </>
);

export default LayoutDefault;  