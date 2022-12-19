import styles from './styles.module.scss'

interface patternProps {
  name: string,
  year: string,
  country: string,
  destination: string
}

export default function MissionCard(props: patternProps) {
  const { name, year, country, destination } = props;
  return (
    <div className={styles.missionCard}>
      <p data-testid="mission-name">{name}</p>
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}
