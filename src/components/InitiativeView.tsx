import React, { useState } from 'react';
import Participant, { ParticipantProps } from './Participant';
import styles from './InitiativeView.module.css';

interface InitiativeViewProps {
  participants: ParticipantProps[];
}

function InitiativeView({ participants }: Readonly<InitiativeViewProps>) {
  const [activeParticipant, setActiveParticipant] = useState<string | null>(
    null,
  );
  participants.sort((a, b) => b.initiative - a.initiative);
  if (activeParticipant === null) {
    setActiveParticipant(participants[0].name);
  }
  const advanceTurn = () => {
    const currentIndex = participants.findIndex(
      (participantProps) => participantProps.name === activeParticipant,
    );
    const nextIndex = (currentIndex + 1) % participants.length;
    setActiveParticipant(participants[nextIndex].name);
  };

  return (
    <div>
      <h1>InitiativeView</h1>
      <div>
        {participants.map((participantProps) => (
          <Participant
            key={participantProps.name}
            name={participantProps.name}
            isActive={participantProps.name === activeParticipant}
            initiative={participantProps.initiative}
          />
        ))}
      </div>
      <button
        id={styles['next-turn-button']}
        type="button"
        onClick={advanceTurn}
      >
        Next Turn
      </button>
    </div>
  );
}

export default InitiativeView;
