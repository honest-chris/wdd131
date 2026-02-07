// ---------- Temple Data ----------
const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
},
{
templeName: "Accra Ghana",
location: "Accra, Ghana",
dedicated: "2004, January, 11",
area: 17500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
},
{
templeName: "Abidjan Ivory Coast Temple",
location: "Abidjan, Cote d'ivoire",
dedicated: "2025, May, 25",
area: 17362,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
},
{
templeName: "Durban South Africa Temple",
location: "Umhlanga, South Africa",
dedicated: "2020, February, 16",
area: 19860,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
},
{
templeName: "Johannesburg South Africa",
location: "Johannesburg",
dedicated: "1985, August, 24",
area: 19184,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
},
{
templeName: "Nairobi Kenya Temple",
location: "Nairobi, Kenyan",
dedicated: "2025, May, 18",
area: 19870,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
},
{
templeName: "Praia Cape Verde Temple",
location: "Praia, Cape Verde",
dedicated: "2022, June, 19",
area: 8759,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/praia-cape-verde-temple/praia-cape-verde-temple-27204-main.jpg"
},

// ---- your required extra temples ----
{
templeName: "Washington D.C.",
location: "Maryland, USA",
dedicated: "1974, November, 19",
area: 156558,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
templeName: "Lima Perú",
location: "Lima, Peru",
dedicated: "1986, January, 10",
area: 9600,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
},
{
templeName: "Mexico City",
location: "Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
}
];

// ---------- Render Function ----------
const gallery = document.querySelector(".gallery");

function displayTemples(list) {
gallery.innerHTML = "";

list.forEach(t => {
const card = document.createElement("figure");

card.innerHTML = `
<img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
<figcaption>
<h3>${t.templeName}</h3>
<p>${t.location}</p>
<p>Dedicated: ${t.dedicated}</p>
<p>Area: ${t.area.toLocaleString()} sq ft</p>
</figcaption>
`;

gallery.appendChild(card);
});
}

// ---------- Filters ----------
function getYear(str) {
return parseInt(str.split(",")[0]);
}

const filters = {
home: () => temples,
old: () => temples.filter(t => getYear(t.dedicated) < 1900),
new: () => temples.filter(t => getYear(t.dedicated) > 2000),
large: () => temples.filter(t => t.area > 90000),
small: () => temples.filter(t => t.area < 10000)
};

// ---------- Nav Click Handling ----------
document.querySelectorAll("[data-filter]").forEach(link => {
link.addEventListener("click", e => {
e.preventDefault();
const key = link.dataset.filter;
displayTemples(filters[key]());
});
});


// ---------- Hamburger ----------
const btn = document.getElementById("menu-button");
const nav = document.getElementById("nav-menu");

btn.addEventListener("click", () => {
nav.classList.toggle("open");
btn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// ---------- Footer ----------
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("last-modified").textContent =
  document.lastModified;

// ---------- Initial Load ----------
displayTemples(temples);
