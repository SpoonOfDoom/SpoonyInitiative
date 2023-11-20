import React, { useEffect, useState } from 'react';
import Participant, { ParticipantProps } from './Participant';
import styles from './InitiativeView.module.css';

interface InitiativeViewProps {
  participants: ParticipantProps[];
}

function InitiativeView({
  participants: initialParticipants,
}: Readonly<InitiativeViewProps>) {
  const [activeParticipant, setActiveParticipant] = useState<string | null>(
    null,
  );

  const [participants, setParticipants] = useState<ParticipantProps[]>([]);

  useEffect(() => {
    const sortedParticipants = [...initialParticipants].sort(
      (a, b) => b.initiative - a.initiative,
    );
    setParticipants(sortedParticipants);
  }, [initialParticipants]);

  useEffect(() => {
    if (activeParticipant === null && participants.length > 0) {
      setActiveParticipant(participants[0].name);
    }
  }, [participants, activeParticipant]);

  const handleInitiativeChange = (name: string, newInitiative: number) => {
    const newParticipantsArray = participants
      .map((participant) =>
        participant.name === name
          ? { ...participant, initiative: newInitiative }
          : participant,
      )
      .sort((a, b) => b.initiative - a.initiative); // sort the array

    setParticipants(newParticipantsArray);
  };

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
            onInitiativeChange={(newInitiative) =>
              handleInitiativeChange(participantProps.name, newInitiative)
            }
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
