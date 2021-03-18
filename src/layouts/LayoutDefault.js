import React from 'react';
import NavMenu from '../components/layout/Navbar';
import FooterReal from '../components/layout/FooterReal.js'
import Demo from '../components/layout/Navbar'
const LayoutDefault = ({ children }) => (
  <>
<NavMenu/>
    {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
    <main className="site-content">
      {children}
    </main>
    <FooterReal />
  </>
);

export default LayoutDefault;  