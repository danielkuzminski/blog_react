import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Card from '../UI/Card';
import './style.css';

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div>
      <Card>
        {/* nadajemy styl liniowo dla logo, aby można było oddzielic styl dla ponownego użycia loga */}
        <div style={{ padding: '50px 0' }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
};

export default Hero;
