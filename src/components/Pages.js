import {Routes, Route} from "react-router-dom";
import React from "react";
import {Home} from "./Home";
import {About} from "./About";
import {Contact} from "./Contact";
import {NavBar} from "./NavBar";


export default function Pages() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route
                    path="*"
                    element={
                        <main>
                            <h1>none</h1>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}