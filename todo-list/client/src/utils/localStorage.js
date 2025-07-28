// LocalStorage utility functions for persisting app state

const STORAGE_KEYS = {
  FILTER_STATE: "todo-filter-state",
  THEME: "todo-theme",
};

// Save filter state to localStorage
export const saveFilterState = (filter) => {
  try {
    localStorage.setItem(STORAGE_KEYS.FILTER_STATE, JSON.stringify(filter));
  } catch (error) {
    console.warn("Failed to save filter state to localStorage:", error);
  }
};

// Load filter state from localStorage
export const loadFilterState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.FILTER_STATE);
    return saved ? JSON.parse(saved) : "all";
  } catch (error) {
    console.warn("Failed to load filter state from localStorage:", error);
    return "all";
  }
};

// Save theme preference
export const saveTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (error) {
    console.warn("Failed to save theme to localStorage:", error);
  }
};

// Load theme preference
export const loadTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.THEME) || "light";
  } catch (error) {
    console.warn("Failed to load theme from localStorage:", error);
    return "light";
  }
};

// Clear all app data from localStorage
export const clearAppData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.warn("Failed to clear app data from localStorage:", error);
  }
};

// Check if localStorage is available
export const isLocalStorageAvailable = () => {
  try {
    const test = "test";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};
