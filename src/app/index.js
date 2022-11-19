import React, { PureComponent } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-kiad8kuoh8wiheif.us.auth0.com";
const clientId = "CC594QNahn9gWLwq6XaG3hYxX1S2l1pH";

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

// import React from "react";
// import { render } from "react-dom";

// import App from "./app";

// render(<App />, document.getElementById("app"));
