import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { ParticipantProps } from '../components/Participant';
import InitiativeView from '../components/InitiativeView';

function StartScreen() {
  const participants: ParticipantProps[] = [
    { name: 'Bob', initiative: 10 },
    { name: 'Alice', initiative: 20 },
    { name: 'Charlie', initiative: 25 },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Spoony Initiative</h1>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>

      <InitiativeView participants={participants} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
      </Routes>
    </Router>
  );
}
