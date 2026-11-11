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
    
    url.search = ''; 
    
    return url.toString();
  } catch (e) {
    return urlString;
  }
}