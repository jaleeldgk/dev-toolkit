/**
 * Code Snippet Manager
 * Quick access to commonly used code patterns
 */

const snippets = {
  'express-server': `
const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => console.log('Server running'));
  `.trim(),

  'fetch-api': `
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network error');
  return response.json();
}
  `.trim(),

  'debounce': `
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
  `.trim()
};

function getSnippet(name) {
  return snippets[name] || 'Snippet not found';
}

function listSnippets() {
  return Object.keys(snippets);
}

module.exports = { getSnippet, listSnippets };
