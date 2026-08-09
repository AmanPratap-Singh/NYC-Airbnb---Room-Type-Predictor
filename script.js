const BOROUGHS = [
  "Bronx",
  "Brooklyn",
  "Manhattan",
  "Queens",
  "Staten Island"
];

const NEIGHBOURHOODS = [
  "Allerton",
  "Arden Heights",
  "Arrochar",
  "Arverne",
  "Astoria",
  "Bath Beach",
  "Battery Park City",
  "Bay Ridge",
  "Bay Terrace",
  "Bay Terrace, Staten Island",
  "Baychester",
  "Bayside",
  "Bayswater",
  "Bedford-Stuyvesant",
  "Belle Harbor",
  "Bellerose",
  "Belmont",
  "Bensonhurst",
  "Bergen Beach",
  "Boerum Hill",
  "Borough Park",
  "Breezy Point",
  "Briarwood",
  "Brighton Beach",
  "Bronxdale",
  "Brooklyn Heights",
  "Brownsville",
  "Bull's Head",
  "Bushwick",
  "Cambria Heights",
  "Canarsie",
  "Carroll Gardens",
  "Castle Hill",
  "Castleton Corners",
  "Chelsea",
  "Chinatown",
  "City Island",
  "Civic Center",
  "Claremont Village",
  "Clason Point",
  "Clifton",
  "Clinton Hill",
  "Co-op City",
  "Cobble Hill",
  "College Point",
  "Columbia St",
  "Concord",
  "Concourse",
  "Concourse Village",
  "Coney Island",
  "Corona",
  "Crown Heights",
  "Cypress Hills",
  "DUMBO",
  "Ditmars Steinway",
  "Dongan Hills",
  "Douglaston",
  "Downtown Brooklyn",
  "Dyker Heights",
  "East Elmhurst",
  "East Flatbush",
  "East Harlem",
  "East Morrisania",
  "East New York",
  "East Village",
  "Eastchester",
  "Edenwald",
  "Edgemere",
  "Elmhurst",
  "Eltingville",
  "Emerson Hill",
  "Far Rockaway",
  "Fieldston",
  "Financial District",
  "Flatbush",
  "Flatiron District",
  "Flatlands",
  "Flushing",
  "Fordham",
  "Forest Hills",
  "Fort Greene",
  "Fort Hamilton",
  "Fresh Meadows",
  "Glendale",
  "Gowanus",
  "Gramercy",
  "Graniteville",
  "Grant City",
  "Gravesend",
  "Great Kills",
  "Greenpoint",
  "Greenwich Village",
  "Grymes Hill",
  "Harlem",
  "Hell's Kitchen",
  "Highbridge",
  "Hollis",
  "Holliswood",
  "Howard Beach",
  "Howland Hook",
  "Huguenot",
  "Hunts Point",
  "Inwood",
  "Jackson Heights",
  "Jamaica",
  "Jamaica Estates",
  "Jamaica Hills",
  "Kensington",
  "Kew Gardens",
  "Kew Gardens Hills",
  "Kingsbridge",
  "Kips Bay",
  "Laurelton",
  "Little Italy",
  "Little Neck",
  "Long Island City",
  "Longwood",
  "Lower East Side",
  "Manhattan Beach",
  "Marble Hill",
  "Mariners Harbor",
  "Maspeth",
  "Melrose",
  "Middle Village",
  "Midland Beach",
  "Midtown",
  "Midwood",
  "Mill Basin",
  "Morningside Heights",
  "Morris Heights",
  "Morris Park",
  "Morrisania",
  "Mott Haven",
  "Mount Eden",
  "Mount Hope",
  "Murray Hill",
  "Navy Yard",
  "Neponsit",
  "New Brighton",
  "New Dorp",
  "New Dorp Beach",
  "New Springville",
  "NoHo",
  "Nolita",
  "North Riverdale",
  "Norwood",
  "Oakwood",
  "Olinville",
  "Ozone Park",
  "Park Slope",
  "Parkchester",
  "Pelham Bay",
  "Pelham Gardens",
  "Port Morris",
  "Port Richmond",
  "Prince's Bay",
  "Prospect Heights",
  "Prospect-Lefferts Gardens",
  "Queens Village",
  "Randall Manor",
  "Red Hook",
  "Rego Park",
  "Richmond Hill",
  "Ridgewood",
  "Riverdale",
  "Rockaway Beach",
  "Roosevelt Island",
  "Rosebank",
  "Rosedale",
  "Rossville",
  "Schuylerville",
  "Sea Gate",
  "Sheepshead Bay",
  "Shore Acres",
  "Silver Lake",
  "SoHo",
  "Soundview",
  "South Beach",
  "South Ozone Park",
  "South Slope",
  "Springfield Gardens",
  "Spuyten Duyvil",
  "St. Albans",
  "St. George",
  "Stapleton",
  "Stuyvesant Town",
  "Sunnyside",
  "Sunset Park",
  "Theater District",
  "Throgs Neck",
  "Todt Hill",
  "Tompkinsville",
  "Tottenville",
  "Tremont",
  "Tribeca",
  "Two Bridges",
  "Unionport",
  "University Heights",
  "Upper East Side",
  "Upper West Side",
  "Van Nest",
  "Vinegar Hill",
  "Wakefield",
  "Washington Heights",
  "West Brighton",
  "West Farms",
  "West Village",
  "Westchester Square",
  "Westerleigh",
  "Whitestone",
  "Williamsbridge",
  "Williamsburg",
  "Willowbrook",
  "Windsor Terrace",
  "Woodhaven",
  "Woodlawn",
  "Woodside"
];

/* ============================================================
   ROOM TYPE LINE — app logic
   ============================================================ */

const COLUMNS = ["latitude","longitude","price","minimum_nights","number_of_reviews",
  "reviews_per_month","calculated_host_listings_count","availability_365",
  "neighbourhood_group","neighbourhood"];

const DEFAULT_API = "http://127.0.0.1:8000";

const els = {
  form: document.getElementById("predictForm"),
  boroughSelect: document.getElementById("neighbourhood_group"),
  neighbourhoodInput: document.getElementById("neighbourhood"),
  neighbourhoodList: document.getElementById("neighbourhoodList"),
  availability: document.getElementById("availability_365"),
  availabilityValue: document.getElementById("availabilityValue"),
  predictBtn: document.getElementById("predictBtn"),
  formError: document.getElementById("formError"),
  resultState: document.getElementById("resultState"),
  trainDot: document.getElementById("trainDot"),
  resultCallout: document.getElementById("resultCallout"),
  resultValue: document.getElementById("resultValue"),
  resultConfidence: document.getElementById("resultConfidence"),
  resultEmpty: document.getElementById("resultEmpty"),
  sampleBtn: document.getElementById("sampleBtn"),
  settingsBtn: document.getElementById("settingsBtn"),
  settingsPop: document.getElementById("settingsPop"),
  apiUrlInput: document.getElementById("apiUrl"),
  apiStatus: document.getElementById("apiStatus"),
  checkApiBtn: document.getElementById("checkApiBtn"),
};

const STOPS = {
  "Entire home/apt": { stop: document.getElementById("stopEntire"), pct: document.getElementById("pctEntire"), bar: document.getElementById("barEntire"), cx: 8 },
  "Private room":    { stop: document.getElementById("stopPrivate"), pct: document.getElementById("pctPrivate"), bar: document.getElementById("barPrivate"), cx: 50 },
  "Shared room":     { stop: document.getElementById("stopShared"), pct: document.getElementById("pctShared"), bar: document.getElementById("barShared"), cx: 92 },
};

/* ---------- populate dropdowns ---------- */

function populateOptions(){
  BOROUGHS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    els.boroughSelect.appendChild(opt);
  });
  els.boroughSelect.value = "Manhattan";

  NEIGHBOURHOODS.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    els.neighbourhoodList.appendChild(opt);
  });
}

/* ---------- availability slider live label ---------- */

function syncAvailability(){
  const val = Number(els.availability.value);
  els.availabilityValue.textContent = `${val} / 365`;
  const fillPct = (val / 365) * 100;
  els.availability.style.setProperty("--fill", `${fillPct}%`);
}

/* ---------- API base url (persisted) ---------- */

function getApiBase(){
  return (localStorage.getItem("roomTypeLine_apiBase") || DEFAULT_API).replace(/\/+$/, "");
}

function setApiBase(url){
  localStorage.setItem("roomTypeLine_apiBase", url.replace(/\/+$/, ""));
}

function initSettings(){
  els.apiUrlInput.value = getApiBase();

  els.settingsBtn.addEventListener("click", () => {
    const isOpen = els.settingsPop.classList.toggle("is-open");
    els.settingsBtn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) els.apiUrlInput.focus();
  });

  document.addEventListener("click", (e) => {
    if (!els.settingsPop.contains(e.target) && e.target !== els.settingsBtn && !els.settingsBtn.contains(e.target)) {
      els.settingsPop.classList.remove("is-open");
      els.settingsBtn.setAttribute("aria-expanded", "false");
    }
  });

  els.apiUrlInput.addEventListener("change", () => {
    setApiBase(els.apiUrlInput.value.trim() || DEFAULT_API);
  });

  els.checkApiBtn.addEventListener("click", checkApiHealth);
}

async function checkApiHealth(){
  els.apiStatus.textContent = "checking…";
  els.apiStatus.className = "api-status";
  const base = (els.apiUrlInput.value.trim() || DEFAULT_API).replace(/\/+$/, "");
  setApiBase(base);
  try{
    const res = await fetch(`${base}/`, { method: "GET" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    els.apiStatus.textContent = "online";
    els.apiStatus.className = "api-status ok";
  }catch(err){
    els.apiStatus.textContent = "unreachable";
    els.apiStatus.className = "api-status bad";
  }
}

/* ---------- sample listing ---------- */

const SAMPLES = [
  { latitude: 40.7128, longitude: -74.0060, price: 165, minimum_nights: 3, number_of_reviews: 48,
    reviews_per_month: 2.1, calculated_host_listings_count: 1, availability_365: 210,
    neighbourhood_group: "Manhattan", neighbourhood: "Chelsea" },
  { latitude: 40.6782, longitude: -73.9442, price: 72, minimum_nights: 2, number_of_reviews: 112,
    reviews_per_month: 3.4, calculated_host_listings_count: 3, availability_365: 300,
    neighbourhood_group: "Brooklyn", neighbourhood: "Bedford-Stuyvesant" },
  { latitude: 40.7484, longitude: -73.9857, price: 45, minimum_nights: 1, number_of_reviews: 6,
    reviews_per_month: 0.4, calculated_host_listings_count: 8, availability_365: 40,
    neighbourhood_group: "Manhattan", neighbourhood: "Midtown" },
];

function fillSample(){
  const sample = SAMPLES[Math.floor(Math.random() * SAMPLES.length)];
  Object.entries(sample).forEach(([key, value]) => {
    const field = els.form.elements.namedItem(key);
    if (field) field.value = value;
  });
  syncAvailability();
  resetResult();
}

/* ---------- form -> payload ---------- */

function readPayload(){
  const data = new FormData(els.form);
  const payload = {};
  COLUMNS.forEach(col => {
    const raw = data.get(col);
    if (col === "neighbourhood_group" || col === "neighbourhood") {
      payload[col] = raw;
    } else if (col === "minimum_nights" || col === "number_of_reviews" ||
               col === "calculated_host_listings_count" || col === "availability_365") {
      payload[col] = parseInt(raw, 10);
    } else {
      payload[col] = parseFloat(raw);
    }
  });
  return payload;
}

function validatePayload(payload){
  for (const col of COLUMNS){
    const val = payload[col];
    if (val === null || val === undefined || val === "" || (typeof val === "number" && Number.isNaN(val))){
      return `Check the "${col.replace(/_/g, " ")}" field — it looks empty or invalid.`;
    }
  }
  if (!NEIGHBOURHOODS.includes(payload.neighbourhood)){
    return "Pick a neighbourhood from the suggestions list.";
  }
  return null;
}

/* ---------- result rendering ---------- */

function resetResult(){
  els.resultState.textContent = "awaiting input";
  els.resultState.className = "result-state";
  els.resultCallout.hidden = true;
  els.resultEmpty.hidden = false;
  els.trainDot.setAttribute("r", "0");
  Object.values(STOPS).forEach(s => {
    s.stop.classList.remove("is-winner", "is-arriving");
    s.stop.style.opacity = "";
    s.pct.textContent = "—";
    s.bar.style.width = "0%";
  });
  hideError();
}

function showError(message){
  els.formError.textContent = message;
  els.formError.hidden = false;
}
function hideError(){
  els.formError.hidden = true;
  els.formError.textContent = "";
}

function showToast(message){
  let toast = document.querySelector(".toast");
  if (!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function renderPrediction(predictedClass, probabilities){
  // probabilities order matches model.classes_ (alphabetical): Entire home/apt, Private room, Shared room
  const order = ["Entire home/apt", "Private room", "Shared room"];

  els.resultEmpty.hidden = true;
  els.resultState.textContent = "route resolved";
  els.resultState.className = "result-state is-live";

  order.forEach((label, i) => {
    const pct = Math.round((probabilities[i] ?? 0) * 100);
    const s = STOPS[label];
    s.pct.textContent = `${pct}%`;
    requestAnimationFrame(() => { s.bar.style.width = `${pct}%`; });
    s.stop.classList.toggle("is-winner", label === predictedClass);
  });

  const winner = STOPS[predictedClass];
  const winnerIndex = order.indexOf(predictedClass);
  const winnerPct = Math.round((probabilities[winnerIndex] ?? 0) * 100);

  if (winner){
    els.trainDot.setAttribute("r", "3.4");
    els.trainDot.setAttribute("cx", String(winner.cx));
    setTimeout(() => {
      winner.stop.classList.add("is-arriving");
      setTimeout(() => winner.stop.classList.remove("is-arriving"), 1200);
    }, 1150);
  }

  els.resultValue.textContent = predictedClass;
  els.resultConfidence.textContent = `${winnerPct}% confidence`;
  els.resultCallout.hidden = false;
}

/* ---------- submit ---------- */

async function handleSubmit(e){
  e.preventDefault();
  hideError();

  const payload = readPayload();
  const problem = validatePayload(payload);
  if (problem){
    showError(problem);
    return;
  }

  els.predictBtn.classList.add("is-loading", "is-swiping");
  els.predictBtn.querySelector(".predict-btn__label").textContent = "Reading the tracks…";
  els.predictBtn.disabled = true;
  els.resultState.textContent = "in transit";
  els.resultState.className = "result-state is-loading";

  const base = getApiBase();

  try{
    const res = await fetch(`${base}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok){
      let detail = `HTTP ${res.status}`;
      try{
        const errJson = await res.json();
        if (errJson?.detail) detail = typeof errJson.detail === "string" ? errJson.detail : JSON.stringify(errJson.detail);
      }catch(_){ /* ignore parse errors */ }
      throw new Error(detail);
    }

    const json = await res.json();
    const predictedClass = json["Predicted_room_type"];
    const probabilities = json["Probability"];

    if (!predictedClass || !Array.isArray(probabilities)){
      throw new Error("Unexpected response shape from /predict.");
    }

    renderPrediction(predictedClass, probabilities);

  }catch(err){
    console.error(err);
    els.resultState.textContent = "awaiting input";
    els.resultState.className = "result-state";
    if (err instanceof TypeError){
      showToast(`Can't reach the API at ${base}. Is the FastAPI server running?`);
    }else{
      showToast(`Prediction failed: ${err.message}`);
    }
  }finally{
    els.predictBtn.classList.remove("is-loading");
    els.predictBtn.disabled = false;
    els.predictBtn.querySelector(".predict-btn__label").textContent = "Predict room type";
    setTimeout(() => els.predictBtn.classList.remove("is-swiping"), 750);
  }
}

/* ---------- init ---------- */

function init(){
  populateOptions();
  syncAvailability();
  initSettings();

  els.availability.addEventListener("input", syncAvailability);
  els.sampleBtn.addEventListener("click", fillSample);
  els.form.addEventListener("submit", handleSubmit);

  els.form.addEventListener("input", () => {
    if (!els.resultCallout.hidden || !els.formError.hidden) {
      hideError();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
