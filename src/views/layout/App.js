import React from "react";
import { Route, useLocation } from "react-router-dom";

import { Container, Navigation, NavigationItem } from "views/components";
import routes from "routes";

function App() {
  const location = useLocation();

  return (
    <Container>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Navigation>
        <NavigationItem width="50%" to="/">
          <img
            src={`https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/${
              location.pathname === "/" ? "811ee09c" : "518bf1c8"
            }.svg`}
            alt="home"
          />
          Pokedex
        </NavigationItem>
        <NavigationItem width="50%" to="/my-pokemon">
          <img
            src={`https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/${
              location.pathname === "/my-pokemon" ? "99a999cc" : "7187ed7c"
            }.svg`}
            alt="my pokemon list"
          />
          My Pokemon
        </NavigationItem>
      </Navigation>
    </Container>
  );
}

export default App;
