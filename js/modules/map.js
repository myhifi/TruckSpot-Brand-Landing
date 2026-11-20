import { TRUCKS } from '../data/trucks.js';
import { escapeHtml } from './ui.js';

let map = null;
const markers = new Map();
const CENTER = [37.7273, -88.6284];

export function initMap(containerId) {
  if (map || typeof L === 'undefined') return map;

  map = L.map(containerId, {
    center: CENTER,
    zoom: 14,
    scrollWheelZoom: false,
    zoomControl: true,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  TRUCKS.forEach(addMarker);

  return map;
}

function addMarker(t) {
  const icon = L.divIcon({
    className: 'truck-marker',
    html: `<div class="truck-marker__pin truck-marker__pin--${t.status}" aria-hidden="true"><span>${t.emoji}</span></div>`,
    iconSize: [40, 48],
    iconAnchor: [20, 44],
    popupAnchor: [0, -44],
  });

  const marker = L.marker([t.lat, t.lng], { icon, title: t.name, riseOnHover: true })
    .bindPopup(popupHtml(t), { closeButton: false, offset: [0, -4] })
    .addTo(map);

  markers.set(t.id, marker);
}

function popupHtml(t) {
  return `
    <div class="popup">
      <div class="popup__head">
        <strong>${escapeHtml(t.name)}</strong>
        <span class="status status--${t.status}">${escapeHtml(t.statusLabel)}</span>
      </div>
      <p class="popup__meta">${escapeHtml(t.cuisineLabel)} · ${t.distanceKm.toFixed(1)} km · ★ ${t.rating}</p>
      <p class="popup__hours">Today: ${escapeHtml(t.todayHours)}</p>
    </div>
  `;
}


export function setVisibleTrucks(trucks) {
  if (!map) return;
  const visible = new Set(trucks.map(t => t.id));
  markers.forEach((marker, id) => {
    const onMap = map.hasLayer(marker);
    if (visible.has(id) && !onMap) marker.addTo(map);
    if (!visible.has(id) && onMap) map.removeLayer(marker);
  });
  if (trucks.length === 1) {
    map.flyTo([trucks[0].lat, trucks[0].lng], 15, { duration: 0.6 });
  } else if (trucks.length > 1) {
    const bounds = L.latLngBounds(trucks.map(t => [t.lat, t.lng]));
    map.flyToBounds(bounds, { padding: [40, 40], duration: 0.6, maxZoom: 15 });
  }
}

export function focusTruck(id) {
  const marker = markers.get(id);
  if (!marker || !map) return;
  map.flyTo(marker.getLatLng(), 16, { duration: 0.8 });
  marker.openPopup();
}
