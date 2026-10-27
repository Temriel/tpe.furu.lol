async function loadNav() {
  const navbarURL = new URL("../navbar.html", document.currentScript.src);
  const response = await fetch(navbarURL);
  if (!response.ok) {
    throw new Error(`Could not load navbar: ${response.status}`);
  }

  document.querySelector("#site-nav").innerHTML = await response.text();
}

loadNav().catch((error) => console.error("Navbar failed to load:", error));
