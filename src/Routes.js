/* eslint-disable */
import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Print from "./components/print/print";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Previewer from "./components/previewer/Previewer";
import Displayer from "./components/displayer/Displayer";
import PostersDetails from "./components/works/postersDetails";
import Shop from "./components/shop/shop";
import Devis from "./components/devis/devis";

export default () => {
    return <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/print" exact component={Print}/>
            <Route path="/about" component={About}/>
            <Route path="/print/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/editions" exact component={Previewer}/>
            <Route path="/editions/:id" component={Displayer}/>
            <Route path="/music" exact component={Previewer}/>
            <Route path="/albums" exact component={Previewer}/>
            <Route path="/albums/:id" component={Displayer}/>
            <Route path="/merch" exact component={Previewer}/>
            <Route path="/merch/:id" component={Displayer}/>
            <Route path="/packaging" exact component={Previewer}/>
            <Route path="/packaging/:id" component={Displayer}/>
            <Route path="/visual-identity" exact component={Previewer}/>
            <Route path="/visual-identity/:id" component={Displayer}/>
            {/* <Route path="/works" exact component={Previewer}/> */}
            {/* <Route path="/works/:id" component={Displayer}/> */}
            <Route path="/posters" exact component={Previewer}/>
            <Route path="/posters/:id" component={Displayer}/>
            <Route path="/logos" component={Displayer}/>
            {/* <Route path="/logos" exact component={Previewer}/> */}
            {/* <Route path="/logos/:id" exact component={Displayer}/> */}

            {/* <Route path="/music/:id" component={Displayer}/> */}
            <Route path="/shop" component={Shop}/>
            <Route path="/print/devis" component={Devis}/>
            <Route key="tsh" path="/print/tshirts" exact component={Previewer}/>
            <Route path="/print/tshirts/:id" component={Displayer}/>
            <Route key="vyl" path="/print/vinyls" exact component={Previewer}/>
            <Route path="/print/vinyls/:id" component={Displayer}/>
            <Route key="cd" path="/print/cd" exact component={Previewer}/>
            <Route path="/print/cd/:id" component={Displayer}/>
            <Route key="k7" path="/print/cassettes" exact component={Previewer}/>
            <Route path="/print/cassettes/:id" component={Displayer}/>
            <Route key="pst" path="/print/posters" exact component={Previewer}/>
            <Route path="/print/posters/:id" component={Displayer}/>
            <Route key="misc" path="/print/divers" exact component={Previewer}/>
            <Route key="misc" path="/print/divers/:id" component={Displayer}/>
        </Switch>
    </div>
}
