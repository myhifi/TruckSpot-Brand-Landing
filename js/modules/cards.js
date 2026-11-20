import { escapeHtml } from './ui.js';

export function renderTruckList(trucks, container) {
  if (!trucks.length) {
    container.innerHTML = `<li class="empty-state">No trucks open right now.</li>`;
    return;
  }
  container.innerHTML = trucks.map(truckListItem).join('');
}

function truckListItem(t) {
  return `
    <li>
      <button class="truck-item" type="button" data-truck-id="${t.id}" aria-label="View ${escapeHtml(t.name)} on map">
        <span class="truck-item__emoji" aria-hidden="true">${t.emoji}</span>
        <span class="truck-item__main">
          <span class="truck-item__title-row">
            <strong>${escapeHtml(t.name)}</strong>
            <span class="status status--${t.status}">${escapeHtml(t.statusLabel)}</span>
          </span>
          <span class="truck-item__meta">${escapeHtml(t.cuisineLabel)} · ${t.distanceKm.toFixed(1)} km · ★ ${t.rating}</span>
        </span>
      </button>
    </li>
  `;
}

export function renderTruckCards(trucks, container) {
  if (!trucks.length) {
    container.innerHTML = `<div class="empty-state"><p>No trucks match this filter. Try another craving 🍕</p></div>`;
    return;
  }
  container.innerHTML = trucks.map(truckCard).join('');
}

function truckCard(t) {
  return `
    <article class="truck-card" data-truck-id="${t.id}">
      <header class="truck-card__media">
        <span class="truck-card__emoji" aria-hidden="true">${t.emoji}</span>
        <span class="truck-card__vendor">${escapeHtml(t.vendorLabel)}</span>
      </header>
      <div class="truck-card__body">
        <div class="truck-card__title-row">
          <h3 class="truck-card__name">${escapeHtml(t.name)}</h3>
          <span class="rating" aria-label="Rated ${t.rating} out of 5">★ ${t.rating}</span>
        </div>
        <p class="truck-card__meta">${escapeHtml(t.cuisineLabel)} · ${t.distanceKm.toFixed(1)} km</p>
        <p class="truck-card__hours"><span>Today</span> ${escapeHtml(t.todayHours)}</p>
        <span class="status status--${t.status}">${escapeHtml(t.statusLabel)}</span>
        <ul class="truck-card__menu">
          ${t.menu.map(m => `<li><span>${escapeHtml(m.name)}</span><span>${escapeHtml(m.price)}</span></li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}
