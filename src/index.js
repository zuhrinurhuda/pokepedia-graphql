import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { cache } from "state/cache";
import App from "views/layout/App";

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI,
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <App />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
