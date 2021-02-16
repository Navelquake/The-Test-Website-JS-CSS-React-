//import logo from './logo.svg';
import './App.css';
import {CFooter} from './components/CFooter'
import Cheader from './components/CHeader'
import CContents from './components/CContents'
import COuter from './components/COuter'

function App() {
  return (
    <div className="App">
      <Cheader aName="Jan" aFamily="Kowalski"/>
      {/*Cheader aName="Tomasz" aFamily="Nowak"/*/}
      <CContents/>
      <COuter/>
      <CFooter weather="słoneczna" temp="25"> 
        <p>Niebo jest bezchmurne, wiatr słaby.</p>
      </CFooter> 
      {/*}CFooter weather="deszczowa" temp="15"/*/}
      {/*}CFooter weather="śnieżna" temp="-5"/*/} 
    </div>
  );
}

export default App;
