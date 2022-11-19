import React, { useContext } from "react";
import helloWorld from "../../images/helloWorld.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import { LoginButton } from "../Login/LoginButton";
import { LogoutButton } from "../Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toogleMenu = () => {
    setMenu(!menu);
  };
  const { user } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={helloWorld} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
      </ul>

      <ul>
        {isAuthenticated ? <img src={user.picture} width="150" /> : <li></li>}
      </ul>

      <ul>
        {isAuthenticated ? (
          <li>
            <Link to="/Profile"> PERFIL </Link>
          </li>
        ) : (
          <li></li>
        )}
      </ul>

      <ul>
        <li>
          <Link to="/Productos"> PRODUCTOS </Link>
        </li>
        <ul>
          {isAuthenticated ? (
            <li>
              <Link to="/Ventas"> VENTAS </Link>
            </li>
          ) : (
            <li></li>
          )}
        </ul>

        <ul>
          {isAuthenticated ? (
            <li>
              <Link to="/AddProducts"> Añadir productos </Link>
            </li>
          ) : (
            <li></li>
          )}
        </ul>
      </ul>

      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};
