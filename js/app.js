import { initMap, setVisibleTrucks, focusTruck } from './modules/map.js';
import { subscribe, setFilter, emit } from './modules/trucks.js';
import { renderTruckList, renderTruckCards } from './modules/cards.js';
import { initAlerts } from './modules/alerts.js';
import { $, $$ } from './modules/ui.js';

function main() {
  // Map
  initMap('truck-map');

  // Alerts form
  initAlerts($('#alerts-form'));

  // Filter chips — sync across both groups
  $$('.chip[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.filter;
      $$('.chip[data-filter]').forEach(c => {
        const active = c.dataset.filter === value;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', String(active));
      });
      setFilter(value);
    });
  });

  // Subscribe to state
  const listEl  = $('#truck-list');
  const cardsEl = $('#truck-cards');
  const countEl = $('#result-count');

  subscribe((trucks) => {
    setVisibleTrucks(trucks);
    renderTruckList(trucks, listEl);
    renderTruckCards(trucks, cardsEl);
    if (countEl) countEl.textContent = `${trucks.length} ${trucks.length === 1 ? 'truck' : 'trucks'}`;
  });

  // Click on a nearby list item → focus its marker
  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-truck-id]');
    if (!btn) return;
    focusTruck(btn.dataset.truckId);
    $('#truck-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // First render
  emit();

  // Footer year — never goes stale
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = $('.nav-toggle');
  const nav = $('#primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  // Sticky header shadow
  const header = $('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
