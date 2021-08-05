import { Route } from 'react-router-dom';
import './App.css';
import SearchWeather from './Components/SearchWeather/SearchWeather';
import s from './Components/SearchWeather/SearchWeather.module.css'
import a1 from './img/1.png'
import a2 from './img/2.png'
import a3 from './img/3.png'
import a4 from './img/4.png'
import a5 from './img/5.png'
import a6 from './img/6.png'


function App() {
  return (
    <div className="App">
      <div className='app-wraper'>
      <Route path="/searchWeater" render={() => <SearchWeather />} />
      <img className={s.a1} src={a1} alt="" />
      <img className={s.a2} src={a2} alt="" />
      <img className={s.a3} src={a3} alt="" />
      <img className={s.a4} src={a4} alt="" />
      <img className={s.a5} src={a5} alt="" />
      <img className={s.a6} src={a6} alt="" />
      {/* <Route path="/weater" render={() => <SearchWeather />} /> */}
      </div>
    </div>
  );
}

export default App;
