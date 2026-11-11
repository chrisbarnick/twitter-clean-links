// Intercept clicks on Twitter's built-in "Copy Link" menu buttons
document.addEventListener('click', async (event) => {
  const copyButton = event.target.closest('[data-testid="copyLink"], [aria-label*="Copy link"]');
  if (!copyButton) return;

  setTimeout(async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (isTwitterUrl(text)) {
        const cleanText = removeAllTwitterTracking(text);
        if (cleanText !== text) {
          await navigator.clipboard.writeText(cleanText);
        }
      }
    } catch (err) {
      console.error('Could not clean clipboard:', err);
    }
  }, 100);
}, true);

// Intercept standard manual text selection copying (Ctrl+C / Cmd+C)
document.addEventListener('copy', (event) => {
  const selection = window.getSelection().toString().trim();
  if (isTwitterUrl(selection)) {
    const cleanUrl = removeAllTwitterTracking(selection);
    event.clipboardData.setData('text/plain', cleanUrl);
    event.preventDefault();
  }
});

function isTwitterUrl(text) {
  return /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/.+/i.test(text);
}

function removeAllTwitterTracking(urlString) {
  try {
    const url = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`);
    
    // Completely wipe out ALL query parameters from tweet status links
    url.search = ''; 
    
    return url.toString();
  } catch (e) {
    return urlString;
  }
}