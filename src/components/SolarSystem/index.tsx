import Title from '../Title';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';
import styles from './styles.module.scss'

export default function SolarSystem() {
  const result = planets.map((planet) => <PlanetCard key={planet.name} planetName={planet.name} planetImage={planet.image} />);
  return (
    <div className={styles.planets}>
      <Title headline="Planetas" />
      <div className={styles.cardsPlanet}>
        <hr className={styles.line} />
        {result}
      </div>
    </div>
  );
}
