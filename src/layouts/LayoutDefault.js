import React from 'react';
import NavMenu from '../components/layout/Navbar2';
import FooterReal from '../components/layout/FooterReal.js'

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