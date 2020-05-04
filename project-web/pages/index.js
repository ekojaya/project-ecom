import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Link from 'next/link';

import WhiteHeader from '../layouts/WhiteHeader';

const Home = () => {

  return (
    <WhiteHeader pageTitle="Vici Remittance | Homepage">
    <WhenWeMeet />

  </WhiteHeader>
    
    );
  }
  
export default Home;



