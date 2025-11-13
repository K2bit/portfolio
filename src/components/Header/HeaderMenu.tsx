import Drawer from '@mui/material/Drawer';
import NavLink from './NavLink';
import useAppNavigation from '../../hooks/useAppNavigation';

import "./HeaderMenu.css";

interface HeaderMenuProps {
    open: boolean,
    onClose: () => void,
}

export default function HeaderMenu({open, onClose}:HeaderMenuProps) {

    const { navPersonal } = useAppNavigation();

  const MenuList = (
    <div className="header-menu-container">
        <ul className="header-menu-list">
            <li><NavLink className="header-menu-link" href="#about" onClick={onClose}>About</NavLink></li>
            <li><NavLink className="header-menu-link" href="#experience" onClick={onClose}>Experience</NavLink></li>
        </ul>

        <ul className="header-menu-list">
            <li><NavLink className="header-menu-link header-menu-secret" onClick={navPersonal}>Stay Curious</NavLink></li>
        </ul>
    </div>
  );

  return (
    <div>
      <Drawer 
        anchor='right' 
        open={open} 
        onClose={onClose}
        slotProps={{
                paper: {
                    sx: {
                    backgroundColor: "var(--color-dark-2)",
                    color: "var(--color-light-2)",
                    width: 230,
                    padding: 3,
                }},
        }}
    >
        {MenuList}
      </Drawer>
    </div>
  );
}