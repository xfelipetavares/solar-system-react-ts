interface patternProps {
  headline: string
}

export default function Title(props: patternProps) {
  const { headline } = props;
  return <h2>{headline}</h2>;
}

