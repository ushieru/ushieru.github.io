import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import "./style.css";
import { Switch, Route } from "wouter";

import SimpleLayout from "./components/SimpleLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AreYouLost from "./pages/AreYouLost";

ReactDOM.render(
  <React.StrictMode>
    <SimpleLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route>
          <AreYouLost />
        </Route>
      </Switch>
    </SimpleLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
