import styles from './styles.module.scss';
import calendar from '../../assets/calendar.svg'
import flag from '../../assets/flag.svg'
import location from '../../assets/location.svg'

interface patternProps {
  name: string;
  year: string;
  country: string;
  destination: string;
}

export default function MissionCard(props: patternProps) {
  const { name, year, country, destination } = props;
  return (
    <div className={styles.missionCard}>
      <header>
        <h4 className={styles.missionName}>{name}</h4>
      </header>
      <hr />
      <section>
        <label>
          <img src={calendar} alt="" />
          <p className={styles.missionYear}>{year}</p>
        </label>
        <label>
          <img src={location} alt="" />
          <p className={styles.missionCountry}>{country}</p>
        </label>
        <label>
          <img src={flag} alt="" />
          <p className={styles.missionDestiny}>{destination}</p>
        </label>
      </section>
    </div>
  );
}
