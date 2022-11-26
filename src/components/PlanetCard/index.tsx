export default function PlanetCard(props: patternProps) {
  const { planetName, planetImage } = props;
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={planetImage} alt={`Planeta ${planetName}`} />
    </div>
  );
}

interface patternProps {
  planetName: string,
  planetImage: string
}
