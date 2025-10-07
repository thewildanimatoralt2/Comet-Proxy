function go() {
  const input = document.getElementById('url').value;
  const proxied = `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(input)}`;
  document.getElementById('frame').src = proxied;
}
