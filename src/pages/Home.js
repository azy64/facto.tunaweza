import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2> Accueil </h2>
      <Link to="/"> RETOUR </Link>
    </div>
  );
}

export default Home;
