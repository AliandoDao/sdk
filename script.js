function gm() {
  const messages = [
    "GM ☀️ Stay bullish!",
    "GM 🚀 Time to hunt gems!",
    "GM 🔥 Market never sleeps!",
    "GM 💎 Let's find the next 100x!"
  ];

  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("gm-text").innerText = random;
}
