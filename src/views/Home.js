import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export function Home() {
  return `
    ${Header()}
    <main class="container mt-5">
      <h1>Bienvenue sur notre site de commande de repas</h1>
      <p>Découvrez notre sélection de délicieux plats !</p>
    </main>
    ${Footer()}
  `;
}