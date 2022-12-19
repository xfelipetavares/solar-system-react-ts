import Title from '../Title';
import MissionCard from '../MissionCard';
import missions from '../../data/missions';
import styles from './styles.module.scss'

export default function Missions() {
  const result = missions.map((mission) => <MissionCard key={mission.name} name={mission.name} year={mission.year} country={mission.country} destination={mission.destination} />);
  return (
    <div className={styles.missions}>
      <Title headline="Missões" />
      <div className={styles.missionsCards}>
        {result}
      </div>
    </div>
  );
}
