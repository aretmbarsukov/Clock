function updateClocks() {
  const now = new Date();

  // Локальний час (Іспанія)
  const esTime = now.toLocaleTimeString("es-ES", { hour12: false });
  document.getElementById("clock-es").textContent = `Іспанія: ${esTime}`;

  // Український час (за таймзоною Europe/Kyiv)
  const uaTime = now.toLocaleTimeString("uk-UA", {
    hour12: false,
    timeZone: "Europe/Kyiv",
  });
  document.getElementById("clock-ua").textContent = `Україна: ${uaTime}`;
}

setInterval(updateClocks, 1000);
updateClocks();
