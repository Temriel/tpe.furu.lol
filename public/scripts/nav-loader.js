async function loadNav() {
  const response = await fetch("/navbar.html");
  if (!response.ok) {
    throw new Error(`Could not load navbar: ${response.status}`);
  }

  document.querySelector("#site-nav").innerHTML = response.text();
}

loadNav().catch((error) => console.error("Navbar failed to load:", error));
