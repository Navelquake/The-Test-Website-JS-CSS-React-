import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards3() {
  return (
    <div className='cards'>
      <h1>Oferty w Polsce:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src='https://i.wpimg.pl/1920x0/m.fotoblogia.pl/mg-1550-edit-fe80eab3ebe281cf974,0,0,0,0,0-280,1920-1030.jpg'
              text='Stolica Polski, a zarazem jej największe miasto'
              label='Warszawa'
              path='/products'
            />
            <CardItem
              img src='https://www.poznan.pl/mim/info/pictures/poznan-jednym-z-najlepszych-celow-podrozy-w-europie,pic1,1016,128681,221029,show2.jpg'
              text='Centrum Wielkopolski'
              label='Poznań'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='https://media-cdn.tripadvisor.com/media/photo-s/18/2f/47/45/getlstd-property-photo.jpg'
              text='Stolica Kultury w Województwie Mazowieckim'
              label='Szydłowiec'
              path='/products'
            />
            <CardItem
              img src='https://d.wpimg.pl/1027950338-19464847/gdynia.jpg'
              text='Nadmorskie miasto oraz stolica Trolejbusów'
              label='Gdynia'
              path='/products'
            />
            <CardItem
              img src='https://www.polska.travel/images/pl-PL/glowne-miasta/wroclaw/wroclaw_panorama_1170.jpg'
              text='Miasto łączące starą architekture a nowocześnością'
              label='Wrocław'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='https://i.ytimg.com/vi/2LyxvAoKe84/maxresdefault.jpg'
              text='*oferta tymczasowo niedostępna*'
              label='Konin'
              path='/products'
            />
            <CardItem
              img src='https://ocdn.eu/pulscms-transforms/1/1WEk9kqTURBXy83MmQ0YmRhYTE4ZDkwOTk4NGMxMDMzMTY4NmY3MmI4Yy5qcGVnk5UDAHLNDk3NCAuTBc0DFM0BvJMJpjIzNzc2NQaBoTAB/koszalin-hotele.jpg'
              text='*oferta tymczasowo niedostępna*'
              label='Koszalin'
              path='/products'
            />
            <CardItem
              img src='https://ocdn.eu/pulscms-transforms/1/Pd_k9kpTURBXy80MjY1ODQ3MDMwYmNhODQ4MTI2Y2JhYmYwOGJhODhhYS5qcGeTlQMAzKrNFVjNDAGTBc0DFM0BvJMJpjNiNTE1ZgaBoTAB/sosnowiec.jpg'
              text='*oferta tymczasowo niedostępna*'
              label='Sosnowiec'
              path='/products'
            />
            <CardItem
              img src='https://nadzory-archeologiczne.pl/wp-content/uploads/2019/06/Radom-widziany-z-lot-ptaka.jpg'
              text='*oferta niedostępna*'
              label='Radom'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards3;