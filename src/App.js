import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PagePerfil from "./Pages/perfil";
import PageFormulario from "./Pages/formulario";
import PageError from "./Pages/error";
import PageAdopta from "./Pages/adopta";
import PageHome from "./Pages/home";
import PageModificarAnimales from "./Pages/modificarAnimales";
import PageRegistroAnimales from "./Pages/registroAnimales";
import PageEliminarAnimales from "./Pages/eliminarAnimales";
import PageDonar from "./Pages/donar";
import PageNosotros from "./Pages/nosotros";
import PageConsultas from "./Pages/consultas";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Filter from "./components/filter";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/consultas">
              <PageConsultas />
            </Route>
            <Route exact path="/nosotros">
              <PageNosotros />
            </Route>
            <Route exact path="/filter">
              <Filter />
            </Route>
            <Route exact path="/">
              <PageHome />
            </Route>
            <Route exact path="/adopta">
              <PageAdopta />
            </Route>
            <Route path="/donar">
              <PageDonar />
            </Route>
            <Route path="/eliminar">
              <PageEliminarAnimales />
            </Route>
            <Route path="/modificar">
              <PageModificarAnimales />
            </Route>
            <Route path="/registrar">
              {" "}
              <PageRegistroAnimales />
            </Route>
            <Route path="/adopta/:idMascota">
              {" "}
              <PagePerfil />
            </Route>
            <Route path="/formulario">
              <PageFormulario />
            </Route>
            <Route path="*">
              <PageError />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
