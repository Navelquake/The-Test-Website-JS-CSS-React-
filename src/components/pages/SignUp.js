import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function SignUp() {
  return (
    <div className='hero-container'>
      <img src='http://www.hdwallpaperslife.com/wp-content/uploads/2019/02/preikestolen_cliff_river_norway_4k_5k.jpg' alt='tlo logowania'/>
  <section className='footer-subscription'>
  <p className='footer-subscription-heading'>
    Subskrybuj nas po więcej okazji!
  </p>
  <p className='footer-subscription-text'>
    To nic nie kosztuje, a może znajdziesz oferte dla siebie!
  </p>
  <div className='input-areas'>
    <form>
      <input
        className='footer-input'
        name='email'
        type='email'
        placeholder='Twój E-Mail  '
      />
      <Button buttonStyle='btn--outline'>Subskrybuj</Button>
    </form>
  </div>
</section>
</div>);
}
