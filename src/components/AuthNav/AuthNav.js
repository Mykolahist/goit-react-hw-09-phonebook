import { Link } from 'react-router-dom';
import style from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div className={style.container__flex}>
      <Link className={style.link} to="/login">
        LogIn
      </Link>
      <Link className={style.link} to="/register">
        Register
      </Link>
    </div>
  );
}
