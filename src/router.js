export class Router {
    constructor(routes) {
      this.routes = routes;
      this.navigateTo = this.navigateTo.bind(this);
      window.addEventListener('popstate', this.render.bind(this));
      document.addEventListener('DOMContentLoaded', this.render.bind(this));
    }
  
    navigateTo(url) {
      history.pushState(null, null, url);
      this.render();
    }
  
    async render() {
      const path = window.location.pathname;
      const route = this.routes.find(route => route.path === path) || this.routes.find(route => route.path === '*');
      const app = document.getElementById('app');
      app.innerHTML = route.view();
  
      document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          this.navigateTo(e.target.href);
        });
      });
    }
  }