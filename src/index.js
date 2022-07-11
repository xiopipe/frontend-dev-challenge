import React from "react";
import { createRoot } from 'react-dom/client';
import {App} from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './scss/NavBar.scss'
import './scss/Hero.scss'
import './scss/Info.scss'
import './scss/Testimony.scss'
import './scss/FAQ.scss'
import './scss/Contact.scss'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);