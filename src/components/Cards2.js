import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
  return (
    <div className='cards'>
      <h1>Oferty Międzynarodowe</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src='https://cache.marriott.com/marriottassets/marriott/TLVSI/tlvsi-exterior-4080-hor-feat.jpg'
              text='Tel Aviv'
              label='1000€'
              path='/products'
            />
            <CardItem
              img src='https://www.nomadepicureans.com/wp-content/uploads/2019/09/One-Day-in-Istanbul-Feature-Image.jpg'
              text='Istanbul'
              label='900€'
              path='/products'
            />
            <CardItem
              img src='https://ocdn.eu/pulscms-transforms/1/bpXk9kpTURBXy83YTk5YmUzZDA0ZGM3NjAwNTgyMzVmYmVkYTIwZjZiZC5qcGeTlQMAV80a9M0PKZMFzQMUzQG8kwmmNzFjNjdmBoGhMAE/nikozja-cypr.jpg'
              text='Nikozja'
              label='800€'
              path='/products'
            />
            <CardItem
              img src='https://f4fcdn.eu/wp-content/uploads/2019/11/shutterstock_1188509599.jpg'
              text='Ałmaty'
              label='1500€'
              path='/products'
            />
            <CardItem
              img src='https://upload.wikimedia.org/wikipedia/commons/1/17/Algiers_coast.jpg'
              text='Algier'
              label='1300€'
              path='/products'
            />
            <CardItem
              img src='https://ewaway.pl/wp-content/uploads/2018/07/DSC01009_ps_tyt_gs-1920x879.jpg'
              text='Tbilisi'
              label='1400€'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='https://ocdn.eu/pulscms-transforms/1/PzKktkqTURBXy9hYzA4MWExNDdjMzhkN2E5YWQxOTA5MDMyMDZiMDYyNC5qcGVnkpUCzQPAAMLDlQIAzQPAwsM'
              text='Pjongjang'
              label='25000€'
              path='/products'
            />
            <CardItem
              img src='https://static.300gospodarka.pl/media/2020/04/shutterstock_790426882-1-e1586259153343.jpg'
              text='Tokio'
              label='2600€'
              path='/products'
            />
            <CardItem
              img src='https://fajnepodroze.pl/wp-content/uploads/2018/11/shanghaj-ciekawostki.jpg'
              text='Szanghaj'
              label='2700€'
              path='/products'
            />
            <CardItem
              img src='https://www.tripsavvy.com/thmb/rj7_np_fSBER3fO9VqC-xWDX5hY=/2576x2576/smart/filters:no_upscale()/view-over-hanoi--vietnam-525833203-5ad7a2618e1b6e0037b89da8.jpg'
              text='Hanoi'
              label='2400€'
              path='/products'
            />
            <CardItem
              img src='https://tr-images.condecdn.net/image/p6dQDpYdlEn/crop/2040/f/gettyimages-962826702.jpg'
              text='New Delhi'
              label='2200€'
              path='/products'
            />
            <CardItem
              img src='https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-motpe-header?$MO_masthead-property-mobile$'
              text='Taipei'
              label='2600€'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='https://storage.googleapis.com/static-content-hc/sites/default/files/dji_0386.jpg'
              text='Santo Domingo'
              label='1500€'
              path='/products'
            />
            <CardItem
              img src='https://images.squarespace-cdn.com/content/v1/52efc94ae4b01409c74273d6/1585834171615-UL7OJYX14WAZC26CASHB/ke17ZwdGBToddI8pDm48kMdWRliAp-QCnBqreoNmQnh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UU6Vzt3ubrNvqRbKs1lGMUlKm2pYM3Lg6N1Jd69NxbqA2OvzC_WyG1BY7Fy8dlH1Uw/montevideo_grande.jpg?format=1500w'
              text='Montevideo'
              label='1700€'
              path='/products'
            />
            <CardItem
              img src='https://ocdn.eu/pulscms-transforms/1/JEGk9kpTURBXy8zYjlkMjgwNWZkNTMzMjZlZjM0Y2RjNzg1MzlmM2I2ZC5qcGeSlQLNA8AAwsOVAgDNA8DCw4GhMAU'
              text='Brasilia'
              label='1700€'
              path='/products'
            />
            <CardItem
              img src='https://img.static-af.com/images/meta/IDname/CITY-SAO-1?aspect_ratio=12:5&max_width=1920'
              text='Sao Paolo'
              label='1800€'
              path='/products'
            />
            <CardItem
              img src='https://www.gdzie-i-kiedy.pl/site/images/illustration/lima.jpg'
              text='Lima'
              label='1600€'
              path='/products'
            />
            <CardItem
              img src='https://d1bvpoagx8hqbg.cloudfront.net/originals/doswiadczenia-erasmusa-monsy-buenos-aires-argentyna-6a29b6e40ce975754d857422cfd4c411.jpg'
              text='Buenos Aires'
              label='1900€'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;