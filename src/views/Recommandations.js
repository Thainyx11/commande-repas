// Recommandations.js - Page de recommandations de voyages culinaires

import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import data from '../data.json';

export function Recommandations() {
  const recommendationsHTML = data.recommendations.map(recommendation => `
    <div class="col-md-6 mb-4">
      <div class="card">
        <img src="${recommendation.image}" class="card-img-top" alt="${recommendation.title}">
        <div class="card-body">
          <h5 class="card-title">${recommendation.title}</h5>
          <p class="card-text">${recommendation.description}</p>
          <a href="${recommendation.link}" class="btn btn-primary" target="_blank">En savoir plus</a>
        </div>
      </div>
    </div>
  `).join('');

  return `
    ${Header()}
    <main class="container mt-5">
      <h1>Recommandations de Voyages Culinaires</h1>
      <div class="row">
        ${recommendationsHTML}
      </div>
    </main>
    ${Footer()}
  `;
}