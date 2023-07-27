import { Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Navigation from './components/Navigation';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
