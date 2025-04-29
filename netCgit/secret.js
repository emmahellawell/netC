function getSecret() {
  fetch("/.netlify/functions/secret-code")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("secureContent").innerText = data.message;
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Failed to fetch secret.");
    });
}
