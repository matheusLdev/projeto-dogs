import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/stats.svg';
import { ReactComponent as AddPhotos } from '../../Assets/add.svg';
import { ReactComponent as Exit } from '../../Assets/exit.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/user';

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button 
          aria-label='Menu' 
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}>            
        </button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/projeto-dogs/conta/'>
          <MyPhotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/projeto-dogs/conta/estatisticas'>
          <Stats/>
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/projeto-dogs/conta/postar'>
          <AddPhotos/>
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={() => dispatch(userLogout())}>
          <Exit/>
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav;