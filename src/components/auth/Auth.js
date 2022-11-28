import { TextField } from '@mui/material';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Auth.css';

function Auth() {
  // const utilisateur = useSelector((state) => state.users);
  return (
    <div className="user">
      <form className="container forme">
        <img src="./logo.png" alt="logo" className="logo" />
        <h3>Connexion</h3>
        <div className="mb-5">
          <TextField label="Address mail" type="email" className="form-control  mb-3" variant="outlined" />
          <TextField label="Mot de passe" type="password" className="form-control  mb-3" variant="outlined" />
          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-3">
              Connexion
            </button>
          </div>
          <div>
            <p className="forgot-password">
              Mot de passe oublié
              <Link to="/accueil" className="lien"> Login? </Link>
            </p>
          </div>
        </div>

      </form>
    </div>
  );
}

export default Auth;
