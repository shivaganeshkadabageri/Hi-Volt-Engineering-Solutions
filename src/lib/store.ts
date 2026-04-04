import { type AnalysisEntry } from './engine';

const STORAGE_KEY = 'prp_history';

export function getHistory(): AnalysisEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AnalysisEntry[];
  } catch (e) {
    console.error('Failed to parse history from localStorage', e);
    // As per prompt 7: If localStorage has corrupted entry, skip and show warning in UI.
    return [];
  }
}

export function saveAnalysis(entry: AnalysisEntry) {
  const history = getHistory();
  // if exists, update it, else prepend
  const existsIdx = history.findIndex(h => h.id === entry.id);
  if (existsIdx >= 0) {
    history[existsIdx] = entry;
  } else {
    history.unshift(entry);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getAnalysisById(id: string): AnalysisEntry | null {
  const history = getHistory();
  return history.find(h => h.id === id) || null;
}
