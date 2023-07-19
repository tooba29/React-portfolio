import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import "./App.css";

const App = () => {
return (
<div>
<Header />
<Navigation />
<main>
<section id="about-me">
<h2>About Me</h2>
</section>
<section id="portfolio">
<h2>Portfolio</h2>
<Project
title="Project 1"
image="eye.png"
deployLink="https://www.google.com"
repoLink="https://www.google.com"
/>

{/* Add more projects as needed */}
</section>*/
<section id="contact">
<h2>Contact</h2>
{/* Add contact form with fields for name, email address, and message */}
</section>
<section id="resume">
<h2>Resume</h2>
{/* Add link to downloadable resume and list of developer's proficiencies */}
</section>
</main>
<Footer />
</div>
);
};

export default App;