import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import style from './SiteBar.module.css';
import { authSelectors } from '../../redux/auth';

export default function SiteBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={style.site__bar}>
      <Link className={style.link} to="/">
        Home
      </Link>
      {isAuthenticated && (
        <Link className={style.link} to="/contacts">
          Contacts
        </Link>
      )}
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
