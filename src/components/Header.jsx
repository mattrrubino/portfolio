import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import useSmartNavigate from "../hooks/useSmartNavigate";

export default function Header({ paths }) {
  const navigate = useSmartNavigate();
  const [anchor, setAnchor] = useState(null);

  const onCloseMenu = () => setAnchor(null);

  const onClickMenuItem = (path) => {
    onCloseMenu();
    navigate(path);
  }

  const sxMenuItem = { fontFamily: "Darker Grotesque", fontSize: "1.25rem" }

  return (
    <header className="h-16 z-50 sticky top-0 bg-white border-black border-2">
      <nav className="h-full px-4 flex justify-between items-center">
        <Link to="/" className="leading-none">Matthew Rubino</Link>
        <nav className="sm:hidden">
            <MenuIcon sx={{ cursor: "pointer" }} onClick={(e) => setAnchor(e.currentTarget)} />
            <Menu open={Boolean(anchor)} transitionDuration={0} anchorEl={anchor} onClose={onCloseMenu}>
              {paths.map(({name, path}, i) =>
                <MenuItem key={i} sx={sxMenuItem} disableRipple onClick={() => onClickMenuItem(path)}>{name}</MenuItem>
              )}
            </Menu>
        </nav>
        <nav className="hidden sm:flex ml-8 space-x-4">
          {paths.map(({name, path}, i) => <Link key={i} to={path}>{name}</Link>)}
        </nav>
      </nav>
    </header>
  );
}

Header.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.object).isRequired,
};
