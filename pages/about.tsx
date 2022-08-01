import React from 'react';
import Head from 'next/head';
import Meta from '../components/Meta';
import linkedin from './assets/linkedin.png';
import stylesAbout from '../styles/About.module.css';
export default function about() {
  return (
    <div>
      <Meta title="About"/>
      <h1>About Page</h1>
      <h3>Things I learned</h3>
      <ul>
        <li>Server-Side-Rendering</li>
        <li>Nested Routing</li>
        <li>React Fragments</li>
        <li>Extracting values from the url</li>
        <li>How to link between different pages</li>
        <li>Head tags</li>
        <li>Layout and CSS modules</li>
        <li>Static Paths</li>
        <li>Static Props</li>
        <li>Fallbacks</li>
        <li>Meta Tags</li>
      </ul>
      
    <div style={{'display': 'flex', 'justifyContent': 'center', 'gap' : '0.5em'}}>
      <a href  ="https://www.becheraportfolio.ca/" style={{'color': '#0070f3;'}}>Portfolio</a>
      <br/>
      <a href ="https://github.com/becheract" style={{'color': '#0070f3;'}}>Github</a>
      <br/>
      <a href ="https://www.linkedin.com/in/bechera-chapman-tremblay-49b22b199/" style={{'color': '#0070f3;'}}>LinkedIn</a>
    </div>

    </div>
  )
}
