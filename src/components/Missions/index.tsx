import Title from '../Title';
import MissionCard from '../MissionCard';
import missions from '../../data/missions';

export default function Missions() {
  const result = missions.map((mission) => <MissionCard key={mission.name} name={mission.name} year={mission.year} country={mission.country} destination={mission.destination} />);
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {result}
    </div>
  );
}
