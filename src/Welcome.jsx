import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert variant="success">
      <Alert.Heading>Ciao, è un piacere vederti</Alert.Heading>
      <p>Speriamo che qui tu possa trovare il libro che ti cambierà la vita.</p>
      <hr />
      <p className="mb-0">
        La nostra libreria si aggiorna ogni mese, torna a trovarci spesso per
        vedere i nuovi arrivi!
      </p>
    </Alert>
  );
};
export default Welcome;
