import { Route } from 'react-router-dom';
import './App.css';
import SearchWeather from './Components/SearchWeather/SearchWeather';

function App() {
  return (
    <div className="App">
      <Route path="/searchWeater" render={() => <SearchWeather />} />
      {/* <Route path="/weater" render={() => <SearchWeather />} /> */}
    </div>
  );
}

export default App;
