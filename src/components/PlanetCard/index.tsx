import styles from './styles.module.scss'

interface patternProps {
  planetName: string,
  planetImage: string
}

export default function PlanetCard(props: patternProps) {
  const { planetName, planetImage } = props;
  return (
    <div className={styles.planetCard} id={styles[planetName]}>
      <p data-testid="planet-name">{planetName}</p>
      <img src={planetImage} alt={`Planeta ${planetName}`} />
    </div>    
  );
}  
