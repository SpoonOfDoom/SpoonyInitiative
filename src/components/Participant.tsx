import classes from './Participant.module.css';

export interface ParticipantProps {
  name: string;
  initiative: number;
  isActive?: boolean;
  isUnconscious?: boolean;
  onClick?: () => void;
}

function Participant({
  name,
  initiative,
  isActive,
  isUnconscious,
}: Readonly<ParticipantProps>) {
  return (
    <div
      className={`${classes.participantcard} ${
        isActive ? classes.active : ''
      } ${isUnconscious ? classes.unconscious : ''}  `}
    >
      <p>Name: {name}</p>
      <p>Initiative: {initiative}</p>
    </div>
  );
}

export default Participant;
