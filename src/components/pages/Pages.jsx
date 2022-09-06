import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Home } from "../home/Home";
import { About } from "./About"
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Depoiments } from "./Depoiments";
import { Portifolio } from "./Portifolio";
import { Services } from "./Services";
import { Skills } from "./Skills";


export const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sobre" component={About} />
                    <Route exact path="/servicos" component={Services} />
                    <Route exact path="/habilidades" component={Skills} />
                    <Route exact path="/portifolio" component={Portifolio} />
                    <Route exact path="/depoimentos" component={Depoiments} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contato" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}