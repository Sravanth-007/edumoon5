import React , {Component} from 'react' ;
import Navbar from './components/navbar';
import  Header from './components/header';
import  Homeslider from './components/homeslider';
import Patners from './components/patners';
import  Latestevents from './components/latestevents';
import  Popularcourses from './components/popularcourses';
import  Testimonial from './components/testimonial';
import  Grid from './components/grid';
import  Footer from './components/footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
import './components/about.css';
 import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import uuid from 'uuid';
import {HashRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/home';
import Ca from './components/ca';
import Gallery from './components/gallery';
import Blog from './components/blog';
import Events from './components/events';
import Server from './components/server';
import Courses from './components/courses';
import Resources from './components/resources';
import About from './components/about';
import Tutions from './components/tutions';
import Materials from './components/materials';
import Video from './components/video';
import Community from './components/community';
import Dbms from './components/dbms';
import C from './components/c';
import M1 from './components/m1';
import Che from './components/che';
import Ed from './components/ed';
import Dld from './components/dld';
import Flat from './components/flat';
import Dms from './components/dms';
import Daa from './components/daa';
import Oop from './components/oop';
import Oos from './components/oos';
import Co from './components/co';
import Wt from './components/wt';
import Cn from './components/cn';
import Cse from './components/cse';
import Bda from './components/bda';
import Es from './components/es';
import Dw from './components/dw';
import Phy from './components/phy';
import Js from './components/js';
import Java from './components/java';
import St from './components/st';
import Ss from './components/ss';
import Cs from './components/cs';
import Ac from './components/ac';
import Ee from './components/ee';
import M2 from './components/m2';
import M3 from './components/m3';
import Ds from './components/ds';
import Work from './components/work';
import Web from './components/web';
import Ses from './components/ses';




class App extends Component{

    render(){


        return(
        <div style={{overflowX:"hidden"}}>
        <Navbar />
        <Header />
       <switch>
           <Router>
           <Route exact path="/home" component={Home} />
           <Route exact path="/courses" component={Courses} />
           <Route exact path="/resources" component={Resources} />
           <Route exact path="/blog" component={Blog} />
           {/* <Route exact path="/about" component={About} /> */}
           <Route exact path="/events" component={Events} />
           <Route exact path="/tutions" component={Tutions} />
           <Route exact path="/gallery" component={Gallery} />
           <Route exact path="/materials" component={Materials} />
           <Route exact path="/ca" component={Ca} />
           <Route exact path="/video" component={Video} />
           <Route exact path="/community" component={Community} />
           <Route exact path="/dbms" component={Dbms} />
           <Route exact path="/c" component={C} />
           <Route exact path="/m1" component={M1} />
           <Route exact path="/m2" component={M2} />
           <Route exact path="/m3" component={M3} />
           <Route exact path="/che" component={Che} />
           <Route exact path="/ed" component={Ed} />
           <Route exact path="/dld" component={Dld} />
           <Route exact path="/flat" component={Flat} />
           <Route exact path="/dms" component={Dms} />
           <Route exact path="/daa" component={Daa} />
           <Route exact path="/oop" component={Oop} />
           <Route exact path="/oos" component={Oos} />
           <Route exact path="/co" component={Co} />
           <Route exact path="/wt" component={Wt} />
           <Route exact path="/cn" component={Cn} />
           <Route exact path="/cse" component={Cse} />
           <Route exact path="/bda" component={Bda} />
           <Route exact path="/dw" component={Dw} />
           <Route exact path="/es" component={Es} />
           <Route exact path="/phy" component={Phy} />
           <Route exact path="/js" component={Js} />
           <Route exact path="/java" component={Java} />
           <Route exact path="/st" component={St} />
           <Route exact path="/ss" component={Ss} />
           <Route exact path="/cs" component={Cs} />
           <Route exact path="/ac" component={Ac} />
           <Route exact path="/ee" component={Ee} />
             <Route exact path="/work" component={Work} />
              <Route exact path="/web" component={Web} />
               <Route exact path="/ses" component={Ses} />
                <Route exact path="/ds" component={Ds} />
                

           </Router>
        
       </switch>
       <Footer />
           
             </div>
       
               
        );
    }

}


export default App;