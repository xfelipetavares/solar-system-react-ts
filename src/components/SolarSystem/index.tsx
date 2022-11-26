import Title from '../Title';
import planets from '../../data/planets';
import PlanetCard from '../PlanetCard';

export default function SolarSystem() {
  const result = planets.map((planet) => <PlanetCard key={planet.name} planetName={planet.name} planetImage={planet.image} />);
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {result}
    </div>
  );
}
