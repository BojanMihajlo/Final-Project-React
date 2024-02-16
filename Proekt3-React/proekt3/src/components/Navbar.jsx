import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  MenuItem,
  Typography,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { checkAuthLoader } from "../util/auth";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const pages = [
  { name: "Home", url: "/", show: true },
  { name: "Meals", url: "meals", show: true },
  { name: "Calendar", url: "calendar", show: true },
  { name: "Blog", url: "blog", show: true },
];

const Navbar = (props) => {
  const saved = checkAuthLoader();

  const [authSaved, setAuthSaved] = useState("");

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const firstN = localStorage.getItem("name");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("name");
    setAuthSaved(!saved);
  };
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "green" }}>
        <LunchDiningIcon
          sx={{ fontSize: "40px", display: { xs: "none", md: "flex" } }}
        />
        <Typography sx={{ fontFamily: "Salsa", padding: "0 1%" }}>
          {" "}
          {firstN}
        </Typography>

        {/* for mobile code  */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <LunchDiningIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            // sx={{
            //   display: { xs: "block", md: "none" },
            // }}
          >
            {/*Links*/}
            {pages
              .filter((page) => page.show)
              .map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink to={page.url}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            {saved && (
              <NavLink
                to="auth"
                style={{
                  backgroundColor: "#08F91C",
                  textDecoration: "none",
                  padding: "3%",
                  marginLeft: "15%",
                  borderRadius: "5px",
                  fontSize: "15px",
                  color: "black",
                }}
              >
                Login
              </NavLink>
            )}
            {!saved && (
              <NavLink
                style={{
                  backgroundColor: "#08F91C",
                  textDecoration: "none",
                  padding: "3%",
                  borderRadius: "5px",
                  marginLeft: "15%",
                  fontSize: "15px",
                  color: "black",
                }}
                onClick={logout}
              >
                Logout
              </NavLink>
            )}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 0.9 }}></Box>
        <Stack direction="row">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages
              .filter((page) => page.show)
              .map((page) => (
                <NavLink
                  key={page.name}
                  to={page.url}
                  style={({ isActive }) => ({
                    color: "white",
                    textDecoration: isActive ? "underline" : "none",
                    fontSize: "20px",
                    marginRight: "7%",
                  })}
                >
                  {page.name}
                </NavLink>
              ))}
            {saved && (
              <NavLink
                to="auth"
                style={{
                  backgroundColor: "#08F91C",
                  textDecoration: "none",
                  padding: "3%",

                  borderRadius: "5px",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                Login
              </NavLink>
            )}{" "}
            {!saved && (
              <NavLink
                style={{
                  backgroundColor: "#08F91C",
                  textDecoration: "none",
                  padding: "3%",
                  borderRadius: "5px",
                  fontSize: "18px",
                  color: "black",
                }}
                onClick={logout}
              >
                Logout
              </NavLink>
            )}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
