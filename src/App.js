import { Route } from 'react-router-dom';
import './App.css';
import SearchWeather from './Components/SearchWeather/SearchWeather';

function App() {
  return (
    <div className="App">
      <div className='app-wraper'>
      <Route path="/searchWeater" render={() => <SearchWeather />} />
      {/* <Route path="/weater" render={() => <SearchWeather />} /> */}
      </div>
    </div>
  );
}

export default App;
