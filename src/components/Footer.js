import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subskrybuj nas po więcej okazji!
        </p>
        <p className='footer-subscription-text'>
          To nic nie kosztuje, a może znajdziesz oferte dla siebie!
        </p>
        <div className='input-areas'>
          <form>
            {/*
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Twój E-Mail  '
            />
            */}
            <Button buttonStyle='btn--outline'>Subskrybuj</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Merch:</h2>
            <a href="https://www.pk.edu.pl/index.php?option=com_content&view=article&id=1949&lang=pl&template=pk18-tpl&Itemid=101">Pamiątki</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Podziel się:</h2>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/Politechnika.Krakowska">Udostępnij na Facebooku</a>
            <a href="https://www.youtube.com/upload">Prześlij nam swój film</a>
          </div>
          <div class='footer-link-items'>
            <h2>Znajdziesz nas:</h2>
            <a href="https://www.facebook.com/Politechnika.Krakowska">Facebook</a>
            <a href="https://www.youtube.com/user/PolitechnikaKrakow">Youtube</a>
            <a href="https://www.instagram.com/politechnika_krakowska/?hl=pl">Instagram</a>
            <a href="https://www.linkedin.com/school/politechnika-krakowska-im.-tadeusza-ko%C5%9Bciuszki/">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AIR PK
              <i class='fab fa-plane' />
            </Link>
          </div>

          <small class='website-rights'>AIRPK © 2021</small>
          {/* ikony do poprawy aby cos robily 

          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}

export default Footer;