import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import CadastroVideo from "./pages/cadastro/Video/index";
import CadastroCategoria from "./pages/cadastro/Categoria/index";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
