import React,{ Fragment}  from "react";
import { NavBar } from "./components/NavBar";
import { Hero} from "./components/Hero"
import {Info} from "./components/Info"
import { Testimony } from "./components/Testimony";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";




export function App(){

    return(
    <Fragment>
        <Hero />
        <Testimony />
        <Info/>
        <FAQ />
        <Contact />
        <NavBar/>

    </Fragment>)
}