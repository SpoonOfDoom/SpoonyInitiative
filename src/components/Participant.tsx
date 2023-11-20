import { useState } from 'react';
import classes from './Participant.module.css';

export interface ParticipantProps {
  name: string;
  initiative: number;
  isActive?: boolean;
  isUnconscious?: boolean;
  onInitiativeChange?: (initiative: number) => void;
  onClick?: () => void;
}

function Participant({
  name: initialName,
  initiative,
  isActive,
  isUnconscious,
  onInitiativeChange,
}: Readonly<ParticipantProps>) {
  const [name, setName] = useState(initialName);

  return (
    <div
      className={`${classes.participantcard} ${
        isActive ? classes.active : ''
      } ${isUnconscious ? classes.unconscious : ''}  `}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={initiative}
        onChange={(e) => {
          return (
            onInitiativeChange &&
            onInitiativeChange(parseInt(e.target.value, 10))
          );
        }}
      />
    </div>
  );
}

export default Participant;
