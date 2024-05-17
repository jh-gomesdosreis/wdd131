const mainnav = document.querySelector('.nav-wrap')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Campinas Brazil",
		location: "Campinas, Brazil",
		dedicated: "2002, May, 17",
		area: 48100,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
	  },	{
		templeName: "Recife Brazil",
		location: "Recife, Brazil",
		dedicated: "2000, December, 15",
		area: 37200,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
	  },	{
		templeName: "Sao Paulo Brazil",
		location: "Sao Paulo, Brazil",
		dedicated: "2004, February, 22",
		area: 59246,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
	  },
  ];

  function createTempleCards(filteredTemples) {
	const container = document.querySelector('.figures');
	container.innerHTML = ''; // Clear existing cards
	filteredTemples.forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('temple-cards');
  
	  const templeName = document.createElement('h2');
	  templeName.textContent = temple.templeName;
  
	  const location = document.createElement('p');
	  location.textContent = `Location: ${temple.location}`;
  
	  const dedicated = document.createElement('p');
	  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
	  const area = document.createElement('p');
	  area.textContent = `Area: ${temple.area} square feet`;
  
	  const image = document.createElement('img');
	  image.src = temple.imageUrl;
	  image.alt = temple.templeName;
	  image.setAttribute("loading", "lazy");
  
	  card.appendChild(templeName);
	  card.appendChild(location);
	  card.appendChild(dedicated);
	  card.appendChild(area);
	  card.appendChild(image);
  
	  container.appendChild(card);
	});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
	createTempleCards(temples);
  
	document.querySelector('#old').addEventListener('click', () => {
	  const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
	  createTempleCards(filteredTemples);
	});
  
	document.querySelector('#new').addEventListener('click', () => {
	  const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
	  createTempleCards(filteredTemples);
	});
  
	document.querySelector('#large').addEventListener('click', () => {
	  const filteredTemples = temples.filter(temple => temple.area > 90000);
	  createTempleCards(filteredTemples);
	});
  
	document.querySelector('#small').addEventListener('click', () => {
	  const filteredTemples = temples.filter(temple => temple.area < 10000);
	  createTempleCards(filteredTemples);
	});
  
	document.querySelector('#home').addEventListener('click', () => {
	  createTempleCards(temples);
	});
  });