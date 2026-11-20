import { TRUCKS } from '../data/trucks.js';

const state = { filter: 'all' };
const listeners = new Set();

export function getState() { return { ...state }; }

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function emit() {
  const list = getFiltered();
  const snap = getState();
  listeners.forEach(fn => fn(list, snap));
}

export function setFilter(next) {
  if (!next || state.filter === next) return;
  state.filter = next;
  emit();
}

export function getFiltered() {
  return TRUCKS.filter(matches);
}

function matches(t) {
  if (state.filter === 'all') return true;
  if (state.filter === 'open') return t.status === 'open' || t.status === 'closing';
  return t.cuisine === state.filter;
}
