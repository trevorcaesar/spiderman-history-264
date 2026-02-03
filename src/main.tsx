import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Element selection overlay - toggle mode controlled by parent
if (window.parent !== window) {
  let selectModeEnabled = false;
  let hoveredEl: HTMLElement | null = null;

  // Listen for toggle from parent
  window.addEventListener('message', (e) => {
    if (e.data?.type === 'toggle-select-mode') {
      selectModeEnabled = e.data.enabled;
      document.body.style.cursor = selectModeEnabled ? 'crosshair' : '';
      if (!selectModeEnabled && hoveredEl) {
        hoveredEl.style.outline = '';
        hoveredEl = null;
      }
    }
  });

  // Hover highlight
  document.addEventListener('mouseover', (e) => {
    if (!selectModeEnabled) return;
    const target = e.target as HTMLElement;
    if (hoveredEl) hoveredEl.style.outline = '';
    hoveredEl = target;
    target.style.outline = '2px dashed #3b82f6';
  }, true);

  document.addEventListener('mouseout', (e) => {
    if (!selectModeEnabled) return;
    const target = e.target as HTMLElement;
    target.style.outline = '';
  }, true);

  // Click to select
  document.addEventListener('click', (e) => {
    if (!selectModeEnabled) return;
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as HTMLElement;

    // Clear previous selection, apply new
    document.querySelectorAll('[data-selected]').forEach(el => {
      el.removeAttribute('data-selected');
      (el as HTMLElement).style.outline = '';
    });
    target.setAttribute('data-selected', 'true');
    target.style.outline = '2px solid #3b82f6';

    // Generate unique selector
    const getUniqueSelector = (el: HTMLElement): string => {
      if (el.id) return `#${el.id}`;
      if (el.className && typeof el.className === 'string') {
        const classes = el.className.split(' ').filter(c => c).join('.');
        if (classes) return `${el.tagName.toLowerCase()}.${classes}`;
      }
      return el.tagName.toLowerCase();
    };

    // Send to parent
    window.parent.postMessage({
      type: 'element-selected',
      element: {
        tagName: target.tagName.toLowerCase(),
        id: target.id || null,
        className: target.className || null,
        textContent: target.textContent?.slice(0, 100) || null,
        selector: getUniqueSelector(target),
      }
    }, '*');
  }, true);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

