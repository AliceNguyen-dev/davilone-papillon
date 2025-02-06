import React from 'react';
import BanniDavi from '../assets/img/banni-home.png'

import './Home.scss'

function Home() {
  return (
    <div>
      <div className="ban-h-div">
        <div className="-ban-h-tab">
          <img className='banni-h-1' src={BanniDavi} alt="banni-h" />
        </div>
      </div>
    </div>
  );
}

export default Home;