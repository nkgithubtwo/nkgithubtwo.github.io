import navbar from './nav.js';

const nav_container = document.getElementById('nav_container');

const nav = (new navbar()).render();

nav_container.innerHTML = nav;