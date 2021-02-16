import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Zobacz najgorętsze oferty!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src='https://wallpaperaccess.com/full/1666622.jpg'
              //src='images/img-9.jpg'
              text='KRAKÓW - już od 100€'
              label='Kościół Mariacki'
              path='/products'
            />
            <CardItem
              img src='http://www.tarciechrzanu.pl/wp-content/uploads/2018/07/sew6.jpg'
              //src='images/img-2.jpg'
              text='SEWASTOPOL - już od 150€'
              label='Port w Sewastopolu'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='https://images5.alphacoders.com/527/thumb-1920-527084.jpg'
              //src='images/img-3.jpg'
              text='MOSKWA - 350€'
              label='Plac Czerwony'
              path='/products'
            />
            <CardItem
              img src='https://media.istockphoto.com/photos/night-view-of-the-city-of-novosibirsk-picture-id888791660?k=6&m=888791660&s=612x612&w=0&h=u7jChr2j8hLF48jOvXauHUR3WQep-gbggf-Jk0zt4Lk='
              //src='images/img-4.jpg'
              text='NOVOSYBIRSK - 450€'
              label='Panorama Novosybirska'
              path='/products'
            />
            <CardItem
              img src='https://upload.wikimedia.org/wikipedia/commons/8/80/Wydzia%C5%82_Mechaniczny_PK.JPG'
              //src='images/img-8.jpg'
              text='POLITECHNIKA KRAKOWSKA - 1000€'
              label='Wydział Mechaniczny'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;