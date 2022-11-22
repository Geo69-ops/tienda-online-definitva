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

  // const toogleMenu = () => {
  //   setMenu(!menu);
  // };
  const { user } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(carrito.lenght);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div id="header">
      <div>
        <nav className="light-blue darken-4">
          <ul className="header">
            <li>
              <Link to="/">
                <div className="logo">
                  <img src={helloWorld} alt="logo" width="100" />
                </div>
              </Link>
            </li>

            {isAuthenticated ? (
              <li>
                <img src={user.picture} width="50" />
              </li>
            ) : (
              <li></li>
            )}

            {isAuthenticated ? (
              <li>
                <LogoutButton />
              </li>
            ) : (
              <li>
                <LoginButton />
              </li>
            )}

            {isAuthenticated ? (
              <li>
                <Link to="/Profile"> PERFIL </Link>
              </li>
            ) : (
              <li></li>
            )}

            {isAuthenticated ? (
              <li>
                <Link to="/Ventas"> VENTAS </Link>
              </li>
            ) : (
              <li></li>
            )}

            {isAuthenticated ? (
              <li>
                <Link to="/AddProducts"> Añadir productos </Link>
              </li>
            ) : (
              <li></li>
            )}

            <li>
              <Link to="/Productos"> PRODUCTOS </Link>
            </li>

            <div className="cart">
              <box-icon name="cart"></box-icon>
              <span className="item__total">{carrito}</span>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

{
  /* <Link to="/">
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

      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">CARRITO . LENGHT</span>
      </div> */
}
