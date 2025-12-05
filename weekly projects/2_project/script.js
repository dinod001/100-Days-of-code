// Initialize the map centered on Sri Lanka
const map = L.map('map').setView([7.8731, 80.7718], 7);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Grab the form element
const form = document.getElementById("floodReportForm");
const reports = [];

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const situation = document.getElementById("situation").value;
  const needs = document.getElementById("needs").value;

  const report = { name, location, situation, needs };
  reports.push(report);

  displayReports();
  addReportMarker(location, name, situation, needs);

  form.reset();
});

function displayReports() {
  const list = document.getElementById("reportsList");
  const emptyState = document.getElementById("emptyState");

  list.innerHTML = "";

  if (reports.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
    reports.forEach((report) => {
      const li = document.createElement("li");
      li.textContent = `${report.name} | ${report.location} | ${report.situation} | Needs: ${report.needs}`;
      list.appendChild(li);
    });
  }
}

async function addReportMarker(location, name, situation, needs) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
    const data = await response.json();

    if (data.length > 0) {
      const lat = data[0].lat;
      const lon = data[0].lon;

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<b>${name}</b><br>${situation}<br>Needs: ${needs}`);
    } else {
      alert("Could not find coordinates for this location.");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
}
